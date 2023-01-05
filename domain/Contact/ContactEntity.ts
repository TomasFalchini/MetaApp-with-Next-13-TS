import User from "../User/UserEntity";

export default interface Contact {
  user: User;
  contactId: string;
  accepted: boolean;
}
