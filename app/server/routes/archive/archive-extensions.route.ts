
import { Router, Response, Request } from 'express';
import { IArchive, ArchiveModel, IList, ListModel, authorization } from '../index';

export const archiveExtensions = Router();

////////////////////////////////////////////////////////////////////////////////

archiveExtensions.get('/archive/extensions', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  let responseArchives = [];
  ArchiveModel
    .find({ user : request['_currentUser']._id })
    .exec((error: any, archives: [IArchive]) => {
      if (error) return response.handler({ DBError: true, error: error });
      archives.forEach((archive)=>{
        if (archive.hasList)
          responseArchives.push({ name: archive.title, value: archive._id });
      });
      response.json(responseArchives);
    });

});

////////////////////////////////////////////////////////////////////////////////

archiveExtensions.post('/archive/extensions/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  ArchiveModel
    .findOne({
      user: request['_currentUser']._id,
      _id: request.params.id
    })
    .exec((error: any, archive: IArchive) => {
      if (error) return response.handler({ DBError: true, error: error });
      ListModel
        .findOne({ _id : archive.noteList })
        .exec((error: any, list: IList) => {
          if (error) return response.handler({ DBError: true, error: error });
          if (archive.hasList)
          {
            if (archive.isCheckList)
              list.list.push({
                data : { note: '', index: list.list.length },
                columns: [
                  { content: false, type: 'checkbox' },
                  { content: request.body.title },
                  { content: request.body.link, type: 'link' }
                ]
              });
            else
              list.list.push({
                data : { note: '', index: list.list.length },
                columns: [
                  { content: String(list.list.length + 1), type: 'center' },
                  { content: request.body.title },
                  { content: request.body.link, type: 'link' }
                ]
              });
          }
          list.save((error: any) => {
            if (error) return response.handler({ DBError: true, error: error });
            response.handler({ type: 'NOTE_ADDED' });
          });
        });

    });

});

////////////////////////////////////////////////////////////////////////////////
