
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IMember extends Document
{
  user: Types.ObjectId;
  role: Types.ObjectId;
};

let MemberSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  role: [{ type: Schema.Types.ObjectId, ref: 'Role' }]
});

export const MemberModel: Model<IMember> = model<IMember>('Member', MemberSchema);
