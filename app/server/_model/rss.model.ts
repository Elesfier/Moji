
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IRSS extends Document
{
  user: Types.ObjectId;
  name: string;
  description: string;
  rssList: Types.ObjectId;
};

let RSSSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String, required: false, default: '' },
  rssList: { type: Schema.Types.ObjectId, ref: 'RSSList', required: false }
});

RSSSchema.pre('remove',(next) => {
  this.model('RSSList').remove({ _id: this.rssList._id },next);
});

export const RSSModel: Model<IRSS> = model<IRSS>('RSS', RSSSchema);
