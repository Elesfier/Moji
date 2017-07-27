
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IType extends Document
{
  name: string;
  value: string;
  look: any;
  project: Types.ObjectId;
};

let TypeSchema: Schema = new Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
  look: { type: Schema.Types.Mixed, required: true, default: {} },
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true }
});

export const TypeModel: Model<IType> = model<IType>('Type', TypeSchema);
