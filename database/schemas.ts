import mongoose, { Schema } from "mongoose";
import { Contact, Message, UserType } from "../types/types";

interface UserWithEmail extends UserType {
  email: string;
  contact: Contact
}

const MessageSchema = new Schema<Message>({
  content: { type: String, required: true },
  user: { type: Map, required: true },
  userRecive: { type: String, required: true },
  timestamp: { type: Date, default: Date.now() },
  uid: { type: String, required: true },
});

const UserSchema = new Schema<UserWithEmail>({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  uid: { type: String, required: true },
  lastSignIn: { type: Date },
  email: { type: String, required: true, unique: true },
  contact: [{type: Schema.Types.ObjectId, ref: "contact"}]
});

const ContactSchema = new Schema<Contact>({
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  contactId: { type: String, required: true },
  accepted: { type: Boolean, required: true },
});

export const MessageDB = mongoose.models.message || mongoose.model("message", MessageSchema);
export const UserDB = mongoose.models.user || mongoose.model("user", UserSchema);
export const ContactDB = mongoose.models.contact || mongoose.model("contact", ContactSchema);
