
import { Schema, Document, Model, Types, model } from 'mongoose';
import { Permissions } from '../_common/index';

export interface IPermission extends Document
{
  type: string;
  name: string;
  value: any;
};

let PermissionSchema: Schema = new Schema({
  type: { type: String, enum: Permissions, required: true },
  name: { type: String, required: true },
  value: { type: String, required: true }
});

export const PermissionModel: Model<IPermission> = model<IPermission>('Permission', PermissionSchema);
