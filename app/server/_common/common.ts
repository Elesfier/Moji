
import * as multer from 'multer';

export const MAX_FILE_SIZE_UPLOAD: number = 1976563;

//[FIXME]: change path for uploading files
export let fileUploader = multer({
  dest: 'dist/uploads/',
  limits: { fileSize: MAX_FILE_SIZE_UPLOAD }
});

export function generateRandomString (): string
{
  return Math.random().toString(36).substring(7);
}
