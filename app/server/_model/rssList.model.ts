
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IRSSList extends Document
{
  name: string;
  user: Types.ObjectId;
  url: String;
  date: String;
  list: any[];
};

let RSSListSchema: Schema = new Schema({
  name: { type: String, required: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  url: { type: String, required: true },
  date: { type: String, required: true, default: '1970-01-01T00:00:00.000Z' },
  list: [Schema.Types.Mixed]
});

export const RSSListModel: Model<IRSSList> = model<IRSSList>('RSSList', RSSListSchema);
