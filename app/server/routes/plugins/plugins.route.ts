
import { Router, Response, Request } from 'express';
import { authorization } from '../../_common/index';
import * as path from 'path';
import * as AdmZip from 'adm-zip';
import * as fs from 'fs';

export const plugins = Router();

const regexHost: RegExp = /<<<O>>>HOST<<<O>>>/g;

////////////////////////////////////////////////////////////////////////////////

plugins.get('/plugins/chrome', authorization({

  global: { mustBeLogged: false }

}),(request: Request, response: Response) => {

  let icon = __dirname + '/chrome-extension/icon.png';
  let index = __dirname + '/chrome-extension/index.html';
  let manifest = __dirname + '/chrome-extension/manifest.json';
  let main = __dirname + '/chrome-extension/main.js';
  let plugin = __dirname + '/chrome-extension/moji-extension-chrome.zip';

  fs.readFile(main, 'utf8', (err, data) => {
    if (err) { return console.log(err); }
    var result = data.replace(regexHost, request.headers.host);
    fs.writeFile(main, result, 'utf8', (err) => {
       if (err) return console.log(err);

       let zip = new AdmZip();

       zip.addLocalFile(manifest);
       zip.addLocalFile(main);
       zip.addLocalFile(index);
       zip.addLocalFile(icon);
       zip.writeZip(plugin);

       response.download(plugin, path.basename(plugin), (err: any) => {
         if (!err) { fs.unlinkSync(plugin); }
       });
    });
  });

});

////////////////////////////////////////////////////////////////////////////////
