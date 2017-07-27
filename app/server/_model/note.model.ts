
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface INote extends Document
{
  user: Types.ObjectId;
  title: string;
  content: string;
};

let NoteSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true, default: '' }
});

export const NoteModel: Model<INote> = model<INote>('Note', NoteSchema);
