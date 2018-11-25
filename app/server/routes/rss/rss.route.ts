
import { Router, Response, Request } from 'express';
import { IRSS, RSSModel, RSSListModel, IRSSList, authorization } from '../index';

let Parser = require('rss-parser');
let parser = new Parser();

export const rss = Router();

////////////////////////////////////////////////////////////////////////////////

rss.get('/rss', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  let responseRSS = { rows: [] };

  RSSModel
    .find({ user : request['_currentUser']._id})
    .populate('rssList')
    .exec((error: any, rsses: [IRSS]) => {
      if (error && !rsses) return response.handler({ DBError: true, error: error });
      rsses.forEach((rss: IRSS) => {

        responseRSS.rows.push({
          data : { id: rss._id },
          columns: [
            { content: rss.name },
            {
              content: (function(){
                let count = 0;
                (<any>rss.rssList).list.forEach((item: any)=>{
                  if(item.columns && !item.columns[0].content) count++;
                });
                return String(count);
              }()),
              type: 'center'
            },
            {
              content: String((<any>rss.rssList).list.length),
              type: 'center'
            }
          ]
        });

      });
      response.json(responseRSS);
    });

});

////////////////////////////////////////////////////////////////////////////////

rss.put('/rss', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  let newList = new RSSListModel({
    url: request.body.rssLink,
    list: []
  });

  let title = 'none';

  parser.parseURL(request.body.rssLink, (error, feed) => {
    if (error) return response.handler({ error: error });
    title = feed.title;

    feed.items.forEach( function(item, index){
        if ((new Date(item.pubDate)) > (new Date(newList.date))){
          newList.date = (new Date(item.pubDate)).toISOString();
        }
        newList.list.push({
          data : { index: String(index) },
          columns: [
            { content: false, type: 'checkbox' },
            { content: String(item.title) },
            { content: String(item.link), type: 'link' }
          ]
        });
    });

    newList.save();

    RSSModel.create({
      user: request['_currentUser']._id,
      name: request.body.name || title,
      rssList: newList._id
    },(error) => {
      if (error) return response.handler({ DBError: true, error: error });
      response.handler({ type: 'RSS_IS_ADDED' });
    });

  });

});

////////////////////////////////////////////////////////////////////////////////

rss.delete('/rss/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  RSSModel.findOneAndRemove({
    _id: request.params.id,
    user: request['_currentUser']._id
  }).exec(function (error) {
    if (error) return response.handler({ DBError: true, error: error });
    response.handler({ type: 'RSS_IS_REMOVE' });
  });

});

////////////////////////////////////////////////////////////////////////////////

rss.get('/rss/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  RSSModel
    .findOne({ _id: request.params.id })
    .exec(function (error: any, rss: IRSS) {
      if (error) return response.handler({ DBError: true, error: error });
      response.json({ name: rss.name });
    });

});

////////////////////////////////////////////////////////////////////////////////

rss.patch('/rss/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  RSSModel
    .findOne({ _id: request.params.id })
    .exec((error: any, rss: IRSS) => {
      if (error) return response.handler({ DBError: true, error: error });
      rss.name =  request.body.newName ? request.body.newName : rss.name;
      rss.save((error: any)=>{
        if (error) return response.handler({ DBError: true, error: error });
        RSSListModel.findOne({ _id : rss.rssList })
        .exec((error: any, rssList: IRSSList)=>{
          if (error) return response.handler({ DBError: true, error: error });
          rssList.list = request.body.rssList.rows;
          rssList.save((error: any)=>{
            if (error) return response.handler({ DBError: true, error: error });
            response.handler({ type: 'RSS_PATCH_DONE' });
          });
        });
      });
    });
});

////////////////////////////////////////////////////////////////////////////////

rss.post('/rss-update', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  RSSModel
    .find({ user: request['_currentUser']._id })
    .exec((error: any, rsses: [IRSS]) => {
      if (error) return response.handler({ DBError: true, error: error });

      let len = rsses.length;
      let rssNumber = 0;

      rsses.forEach((rss: IRSS) => {

        RSSListModel.findOne({ _id : rss.rssList })
        .exec((error: any, rssList: IRSSList)=>{
          if (error) return response.handler({ DBError: true, error: error });

          parser.parseURL(rssList.url, (error, feed) => {
            if (error) return response.handler({ error: error });

            let addedList = [];

            feed.items.forEach( function(item, index){
                if ((new Date(item.pubDate)) > (new Date(rssList.date))){

                  addedList.push({
                    data : { index: String(index) },
                    columns: [
                      { content: false, type: 'checkbox' },
                      { content: String(item.title) },
                      { content: String(item.link), type: 'link' }
                    ]
                  });
                }
            });

            if (addedList.length)
            {
              rssList.date = (new Date(feed.items[0].pubDate)).toISOString();

              rssList.list = addedList.concat(rssList.list);

              rssList.list.forEach((row, index) => {
                if (!row.data) row.data = {};
                row.data.index = index;
                if (!row.columns) row.columns = [];
                if (row.columns.length != 3) {
                  row.columns = [
                    { content: false, type: 'checkbox' },
                    { content: 'NONE' },
                    { content: 'javascript:void(0)', type: 'link' }
                  ];
                }
              });

              rssList.markModified('list');
            }

            rssList.save((error: any)=>{
              if (error) return response.handler({ DBError: true, error: error });

              rssNumber++;
              if ( rssNumber == len ) {
                response.handler({ type: 'RSS_UPDATE_DONE' });
              }

            });

          });
        });
      });
    });
});

////////////////////////////////////////////////////////////////////////////////

rss.get('/rss-first/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  RSSModel
    .findOne({ _id: request.params.id })
    .exec((error: any, rss: IRSS) => {
      if (error) return response.handler({ DBError: true, error: error });

      RSSListModel.findOne({ _id : rss.rssList })
      .exec((error: any, rssList: IRSSList)=>{
        if (error) return response.handler({ DBError: true, error: error });

        let indexItem = -1;
        for ( let i = rssList.list.length-1; i >= 0; --i) {
          if ( !rssList.list[i].columns[0].content ) {
            indexItem = i;
            break;
          }
        }

        if ( indexItem != -1 )
        {
          rssList.list[indexItem].columns[0].content = true;
          rssList.markModified('list');
          //TODO nie zapisuje sie lista po wyciagnieciu ostatniego ele
          rssList.save((error: any, savedList: IRSSList)=>{
            if (error) return response.handler({ DBError: true, error: error });
            response.json({ url: rssList.list[indexItem].columns[2].content });
          });
        }

      });
    });
});

////////////////////////////////////////////////////////////////////////////////

rss.get('/rss/list/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  let responseRSSList = { rows: [] };

  RSSModel
    .findOne({ _id: request.params.id })
    .populate('rssList')
    .exec((error: any, rss: IRSS) => {
      if (error) return response.handler({ DBError: true, error: error });

      responseRSSList.rows = (<any>rss.rssList).list;
      response.json(responseRSSList);

    });
});

////////////////////////////////////////////////////////////////////////////////
