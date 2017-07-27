
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IProject extends Document
{
  title: string;
  description: string;
  start: Date;
  end: Date;
  counter: number;
  close: boolean;
  members: [Types.ObjectId];
  types: [Types.ObjectId];
  setting: any;
};

let ProjectSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, default: '' },
  start: { type: Date, required: false },
  end: { type: Date, required: false },
  counter: { type: Number, required: true, default: 0, min: 0 },
  close: { type: Boolean, required: true, default: false },
  members: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
  types: [{ type: Schema.Types.ObjectId, ref: 'Type' }],
  setting: { type: Schema.Types.Mixed, required: true }
});

export const ProjectModel: Model<IProject> = model<IProject>('Project', ProjectSchema);
