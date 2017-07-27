
import { Router, Response, Request } from 'express';
import { IArchive, ArchiveModel, ListModel, IList, authorization } from '../index';

export const archive = Router();

////////////////////////////////////////////////////////////////////////////////

archive.get('/archive', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  let responseArchives = { rows: [] };
  ArchiveModel
    .find({ user : request['_currentUser']._id})
    .populate('noteList')
    .populate('fileList')
    .exec((error: any, archives: [IArchive]) => {
      if (error) return response.handler({ DBError: true, error: error });
      archives.forEach((archive: IArchive) => {
        //[FIXME]: about this boolean with string 'true'
        if (!((request.query.showHidden === 'true') || !archive.isHidden)) return;
        //[REFACTOR]: repair code
        if (request.query.search && (archive.title.toLowerCase().indexOf(request.query.search.toLowerCase()) == -1)) return;
        responseArchives.rows.push({
          data : { id: archive._id },
          columns: [
            { content: archive.title },
            {
              content: (archive.hasFiles)?String(archive.fileList.length):('-'),
              type: 'center'
            },
            {
              content: (archive.hasList)?(function(){
                if (!archive.isCheckList) return String((<any>archive.noteList).list.length);
                let count = 0;
                (<any>archive.noteList).list.forEach((item: any)=>{
                  if(!item.columns[0].content) count++;
                });
                return String(count);
              }()):('-'),
              type: 'center'
            }
          ]
        });
      });
      response.json(responseArchives);
    });

});

////////////////////////////////////////////////////////////////////////////////

archive.put('/archive', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  let newList = new ListModel({
    list: []
  });
  newList.save();

  ArchiveModel.create({
    user: request['_currentUser']._id,
    title: request.body.title || 'none',
    description: request.body.description || '',
    hasFiles: request.body.hasFiles || false,
    hasList: request.body.hasList || false,
    isCheckList: request.body.isCheckList || false,
    isHidden: request.body.isHidden || false,
    noteList: newList._id
  },(error) => {
    if (error) return response.handler({ DBError: true, error: error });
    response.handler({ type: 'ARCHIVE_IS_ADDED' });
  });

});

////////////////////////////////////////////////////////////////////////////////

archive.delete('/archive/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  ArchiveModel.findOneAndRemove({
    _id: request.params.id,
    user: request['_currentUser']._id
  }).exec(function (error) {
    if (error) return response.handler({ DBError: true, error: error });
    response.handler({ type: 'ARCHIVE_IS_REMOVE' });
  });

});

////////////////////////////////////////////////////////////////////////////////

archive.get('/archive/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  ArchiveModel.findOne({
    _id: request.params.id,
    user: request['_currentUser']._id
  },(error: any, archives: IArchive) => {
    if (error) return response.handler({ DBError: true, error: error });
    response.json({
      title: archives.title,
      description: archives.description,
      hasList: archives.hasList,
      hasFiles: archives.hasFiles,
      isCheckList: archives.isCheckList,
      isHidden: archives.isHidden
    });
  });

});

////////////////////////////////////////////////////////////////////////////////

archive.patch('/archive/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  ArchiveModel.findOne({
    _id: request.params.id,
    user: request['_currentUser']._id
  })
  .exec((error: any, archive: IArchive) => {
    if (error) return response.handler({ DBError: true, error: error });
    archive.title = request.body.title;
    archive.description = request.body.description;
    archive.hasFiles = request.body.newHasFiles;
    archive.hasList = request.body.newHasList;
    archive.isCheckList = request.body.newIsCheckList;
    archive.isHidden = request.body.isHidden;
    archive.save((error: any)=>{
      if (error) return response.handler({ DBError: true, error: error });
      ListModel.findOne({ _id : archive.noteList })
      .exec((error: any, list: IList)=>{
        if (error) return response.handler({ DBError: true, error: error });
        if (request.body.hasList && (request.body.isCheckList !== request.body.newIsCheckList))
        {
          request.body.notes.rows.forEach((item, index, noteList)=>{
            if (request.body.newIsCheckList)
              noteList[index].columns[0] = { content: false, type: 'checkbox' };
            else
              noteList[index].columns[0] = { content: String(index+1), type: 'center' };
          });
        }
        list.list = request.body.notes.rows;
        list.save((error: any)=>{
          if (error) return response.handler({ DBError: true, error: error });
          response.handler({ type: 'ARCHIVE_PATCH_DONE' });
        });
      });
    });
  });

});

////////////////////////////////////////////////////////////////////////////////
