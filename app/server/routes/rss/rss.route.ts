
import { Router, Response, Request } from 'express';
import { IRSS, RSSModel, RSSListModel, IRSSList, authorization } from '../index';

export const rss = Router();

////////////////////////////////////////////////////////////////////////////////

rss.get('/rss', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  let responseRSS = { rows: [] };

  //TODO zwraca liste
  responseRSS.rows.push({
    data : { id: '1' },
    columns: [
      { content: 'blablaRSS' },
      {
        content: '3',
        type: 'center'
      },
      {
        content: '5',
        type: 'center'
      }
    ]
  });

  response.json(responseRSS);

});

////////////////////////////////////////////////////////////////////////////////

rss.put('/rss', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  //TODO tworzy nowy element
  response.handler({ type: 'ARCHIVE_IS_ADDED' });

});

////////////////////////////////////////////////////////////////////////////////

rss.delete('/rss/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  //TODO element jest usuwany
  response.handler({ type: 'ARCHIVE_IS_REMOVE' });

});

////////////////////////////////////////////////////////////////////////////////

rss.get('/rss/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  //TODO pobierany jest element
  response.json({
    name: 'blabla2'
  });

});

////////////////////////////////////////////////////////////////////////////////

rss.patch('/rss/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  //TODO aktualizacja istniejacego elementu
  response.handler({ type: 'ARCHIVE_PATCH_DONE' });

});

////////////////////////////////////////////////////////////////////////////////

rss.post('/rss-update', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  //TODO aktualizacja list rss
  response.handler({ type: 'RSS_UPDATE_DONE' });

});

////////////////////////////////////////////////////////////////////////////////

rss.get('/rss-first/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  //TODO pobranie pierwszego elementu rss
  response.json({ url: 'https://www.google.pl/' });

});

////////////////////////////////////////////////////////////////////////////////

rss.get('/rss/list/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  let responseRSSList = { rows: [] };

  //TODO zwraca liste
  responseRSSList.rows.push({
    data : { index: '0' },
    columns: [
      { content: true, type: 'checkbox' },
      { content: 'aaaa' },
      { content: 'llll', type: 'link' }
    ]
  });

  responseRSSList.rows.push({
    data : { index: '1' },
    columns: [
      { content: false, type: 'checkbox' },
      { content: 'bbbb' },
      { content: 'dddd', type: 'link' }
    ]
  });

  responseRSSList.rows.push({
    data : { index: '2' },
    columns: [
      { content: true, type: 'checkbox' },
      { content: 'cccc' },
      { content: 'hhhh', type: 'link' }
    ]
  });

  response.json(responseRSSList);

});

////////////////////////////////////////////////////////////////////////////////
