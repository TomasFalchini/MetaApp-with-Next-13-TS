import mongoose, { Schema } from "mongoose";
import { Contact } from "../../../../types/types";

const ContactSchema = new Schema<Contact>({
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  contactId: { type: String, required: true },
  accepted: { type: Boolean, default: false },
});

export const ContactDB = mongoose.model("contact", ContactSchema);
