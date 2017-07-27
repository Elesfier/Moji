
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IFile extends Document
{
  info: any;
  data: Buffer;
};

let FileSchema: Schema = new Schema({
  info: { type: Schema.Types.Mixed, required: true },
  data: { type: Buffer, required: true }
});

export const FileModel: Model<IFile> = model<IFile>('File', FileSchema);
