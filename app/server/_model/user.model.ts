
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IUser extends Document
{
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  token: string;
  profile: Types.ObjectId;
  notifications: [Types.ObjectId];
  setting: any;
};

let UserSchema: Schema = new Schema({
  username: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  token: { type: String, required: true },
  profile: { type: Schema.Types.ObjectId, ref: 'File', required: false },
  notifications: [{ type: Schema.Types.ObjectId, ref: 'Notification' }],
  setting: { type: Schema.Types.Mixed, required: true }
});

export const UserModel: Model<IUser> = model<IUser>('User', UserSchema);
