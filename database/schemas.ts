import mongoose, { Schema } from "mongoose";
import { Message, User } from "../types/types";

const MessageSchema = new Schema<Message>({
  content: { type: String, required: true },
  user: { type: Map, required: true },
  userRecive: { type: Map, required: true },
  timestamp: { type: Date, default: Date.now() },
  uid: { type: String, required: true },
});

const UserSchema = new Schema<User>({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  uid: { type: String, required: true },
  lastSignIn: { type: Date },
});

export const MessageDB = mongoose.model("message", MessageSchema);
export const UserDB = mongoose.model("user", UserSchema);
