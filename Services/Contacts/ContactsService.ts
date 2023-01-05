import ContactRepository from "../../domain/Contact/ContactRepository";

class ContactService {
  private ContactDB: ContactRepository;
  constructor(ContactDB: ContactRepository) {
    this.ContactDB = ContactDB;
  }

  async getContacts(id: string) {
    try {
      return this.ContactDB.getContacts(id);
    } catch (err) {
      return console.log(err);
    }
  }

  async addContact(id: string) {
    try {
      return this.ContactDB.addContact(id);
    } catch (err) {
      return console.log(err);
    }
  }

  async deleteContact(id: string) {
    try {
      return this.ContactDB.deleteContact(id);
    } catch (err) {
      return console.log(err);
    }
  }
  async acceptContact(id: string, condition: boolean) {
    try {
      return this.ContactDB.acceptContact(id, condition);
    } catch (err) {
      return console.log(err);
    }
  }
}

export default ContactService;
