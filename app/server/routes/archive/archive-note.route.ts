
import { Router, Response, Request } from 'express';
import { IArchive, ArchiveModel, authorization } from '../index';

export const archiveNote = Router();

////////////////////////////////////////////////////////////////////////////////

archiveNote.get('/archive/note/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  ArchiveModel
  .findOne({
    user: request['_currentUser']._id,
    _id: request.params.id
  })
  .populate('noteList')
  .exec((error: any, archive: IArchive) => {

    response.json({ rows: (<any>archive.noteList).list });

  });

});

////////////////////////////////////////////////////////////////////////////////
