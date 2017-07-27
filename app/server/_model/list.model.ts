
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IList extends Document
{
  name: string;
  user: Types.ObjectId;
  list: any[];
};

let ListSchema: Schema = new Schema({
  name: { type: String, required: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  list: [Schema.Types.Mixed]
});

export const ListModel: Model<IList> = model<IList>('List', ListSchema);
