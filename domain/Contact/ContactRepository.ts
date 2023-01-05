import Contact from "../Contact/ContactEntity";

export default interface ContactRepository {
  addContact: (id: string) => void;
  getContacts: (id: string) => Promise<Contact[] | []>;
  deleteContact: (id: string) => void;
  acceptContact: (id: string, condition: boolean) => void;
}
