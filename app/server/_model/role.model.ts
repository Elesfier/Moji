
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface IRole extends Document
{
  name: string;
  hierarchy: number;
  permissions: Types.ObjectId;
};

let RoleSchema: Schema = new Schema({
  name: { type: String, required: true },
  hierarchy: { type: Number, required: true, default: 0 },
  permissions: [{ type: Schema.Types.ObjectId, ref: 'Permission' }]
});

export const RoleModel: Model<IRole> = model<IRole>('Role', RoleSchema);
