
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IArchive extends Document
{
  user: Types.ObjectId;
  title: string;
  description: string;
  hasFiles: boolean;
  hasList: boolean;
  isCheckList: boolean;
  isHidden: boolean,
  noteList: Types.ObjectId;
  fileList: [Types.ObjectId];
};

let ArchiveSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: false, default: '' },
  hasFiles: { type: Boolean, required: true, default: false },
  hasList: { type: Boolean, required: true, default: false },
  isCheckList: { type: Boolean, required: true, default: false },
  isHidden: { type: Boolean, required: true, default: false },
  noteList: { type: Schema.Types.ObjectId, ref: 'List', required: false },
  fileList: [{ type: Schema.Types.ObjectId, ref: 'File' }]
});

ArchiveSchema.pre('remove',(next) => {
  //[FIXME]: przepisac to zeby nie w taki sposob byly kasowane pliki
  this.fileList.forEach((file: any)=>{
    this.model('File').remove({ _id: file._id });
  });
  this.model('List').remove({ _id: this.noteList._id },next);
});

export const ArchiveModel: Model<IArchive> = model<IArchive>('Archive', ArchiveSchema);
