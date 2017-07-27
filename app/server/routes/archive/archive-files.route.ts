
import { Router, Response, Request } from 'express';
import { IArchive, ArchiveModel, authorization, fileUploader } from '../index';
import * as path from 'path';

export const archiveFiles = Router();

////////////////////////////////////////////////////////////////////////////////

archiveFiles.get('/archive/files/download/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  console.log(request.query);
  console.log(request.params.id);
  var file = __dirname + '/index.ts';
  console.log(path.basename(file));
  response.download(file, path.basename(file));

});

////////////////////////////////////////////////////////////////////////////////

archiveFiles.get('/archive/files/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  //[TODO]
  response.json({
    rows: [
      {
        data: { id: 'assaas' },
        columns: [
          { content: 'Nazwa pliku1' }
        ]
      },
      {
        data: { id: 'assaas2' },
        columns: [
          { content: 'Nazwa pliku2' }
        ]
      }
    ]
  });

});

////////////////////////////////////////////////////////////////////////////////

archiveFiles.delete('/archive/files/:id', authorization({

  global: { mustBeLogged: true }

}),(request: Request, response: Response) => {

  //[TODO]
  console.log(request.params.id);
  console.log(request.query);
  response.handler({ type: 'REMOVE_FILE_SUCCESS' });

});

////////////////////////////////////////////////////////////////////////////////

archiveFiles.post('/archive/files/:id', authorization({

  global: { mustBeLogged: true }

}),
fileUploader.array("archiveFiles", 12),
(request: Request, response: Response) => {

  //[TODO]
  console.log(request.params.id);
  console.log(request.files);
  response.handler({ type: 'SUCCESS_ADDING_FILE' });

});

////////////////////////////////////////////////////////////////////////////////
