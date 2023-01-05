import mongoose, { Schema } from "mongoose";
import { Message } from "../../../../types/types";

const MessageSchema = new Schema<Message>({
  content: { type: String, required: true },
  user: { type: Map, required: true },
  userRecive: { type: String, required: true },
  timestamp: { type: Date, default: Date.now() },
  uid: { type: String, required: true },
});

export const MessageDB = mongoose.model("message", MessageSchema);

//mongoose.models.message;
