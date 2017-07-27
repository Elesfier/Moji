
import { Schema, Document, Model, Types, model } from 'mongoose';
import { Status, Difficult, Priority } from '../_common/index';

export interface ITask extends Document
{
  title: string;
  description: string;
  start: Date;
  end: Date;
  achieve: number;
  project: Types.ObjectId;
  type: [Types.ObjectId];
  member: [Types.ObjectId];
  priority: string;
  status: string;
  difficult: string;
  comments: string;
  deleted: boolean;
  history: [{ date: Date, content: String }];
};

let TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, default: '' },
  start: { type: Date, required: false },
  end: { type: Date, required: false },
  achieve: { type: Number, required: true, default: 0, min: 0, max: 100 },
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  type: [{ type: Schema.Types.ObjectId, ref: 'Type' }],
  member: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
  priority: { type: String, enum: Priority, required: true },
  status: { type: String, enum: Status, required: true },
  difficult: { type: String, enum: Difficult, required: true },
  comments: { type: String, required: true },
  deleted: { type: Boolean, required: true, default: false },
  history: [{ date: Date, content: String }]
});

export const TaskModel: Model<ITask> = model<ITask>('Task', TaskSchema);
