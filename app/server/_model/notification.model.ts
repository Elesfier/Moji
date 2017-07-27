
import { Schema, Document, Model, Types, model } from 'mongoose';

export interface INotification extends Document
{
  name: string;
  date: Date;
  data: any;
};

let NotificationSchema: Schema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  data: { type: Schema.Types.Mixed, required: false }
});

export const NotificationModel: Model<INotification> = model<INotification>('Notification', NotificationSchema);
