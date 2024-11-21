import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  preferences: string[];
  communicationChannel: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  preferences: { type: [String], required: true },
  communicationChannel: { type: String, required: true },
});

export default mongoose.model<IUser>("User", UserSchema);
