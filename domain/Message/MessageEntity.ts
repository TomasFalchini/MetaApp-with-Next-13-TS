import User from "../User/UserEntity";

export default interface Message {
  content: string;
  user: User;
  userRecive: string;
  timestamp: Date;
  uid: string;
}
