import ContactRepository from "../../../domain/Contact/ContactRepository";
import { ContactDB } from "../Mongoose/Schemas/ContactSchema";
import { UserDB } from "../Mongoose/Schemas/UserSchema";

class ContactMongooseImpl implements ContactRepository {
  async addContact(id: string) {
    const user = await UserDB.findOne({ uid: id }).exec();
    if (user) {
      const newContact = new ContactDB({
        user: user._id,
        contactId: id,
      });
      await newContact.save();
    }

    return;
  }
  async getContacts(id: string) {
    const contacts = await UserDB.findOne({ uid: id }, "contact")
      .populate("contact")
      .exec();
    if (contacts) {
      const res = contacts.toObject().contact;
      return [...res];
    } else return [];
  }
  deleteContact(id: string) {}
  acceptContact(id: string, condition: boolean) {}
}

export default ContactMongooseImpl;
