
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IRSSList extends Document
{
  name: string;
  user: Types.ObjectId;
  list: any[];
};

let RSSListSchema: Schema = new Schema({
  name: { type: String, required: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  list: [Schema.Types.Mixed]
});

export const RSSListModel: Model<IRSSList> = model<IRSSList>('RSSList', RSSListSchema);
