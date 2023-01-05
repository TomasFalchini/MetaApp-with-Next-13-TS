import mongoose, { Schema } from "mongoose";
import { UserType, Contact } from "../../../../types/types";

interface UserWithEmail extends UserType {
  email: string;
  contact: Contact[];
}

const UserSchema = new Schema<UserWithEmail>({
  name: { type: String, required: true, unique: true },
  image: { type: String },
  uid: { type: String, required: true },
  lastSignIn: { type: Date },
  email: { type: String, required: true, unique: true },
  contact: [{ type: Schema.Types.ObjectId, ref: "contact" }],
});

export const UserDB = mongoose.model("user", UserSchema);
