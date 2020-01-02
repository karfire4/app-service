import mongoose, { Schema, Document,model } from 'mongoose';

export interface IUser extends Document {
  email_id: string;
  password: string;
  confirm_password: string;
  mobile_no:number;
}

const UserSchema: Schema = new Schema({
  email_id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirm_password: { type: String, required: true },
  mobile_no: { type: String, required: true }
});

export default model<IUser>("User", UserSchema);