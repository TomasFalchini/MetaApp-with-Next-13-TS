export interface UserType {
  name: string;
  image: string;
  uid: string;
  lastSignIn: Date;
}

export interface Message {
  content: string;
  user: UserType;
  userRecive: string; //es un uid del q recive
  timestamp: Date;
  uid: string;
}
