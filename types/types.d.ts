export interface User {
  name: string;
  image: string;
  uid: string;
  lastSignIn: Date;
}

export interface Message {
  content: string;
  user: User;
  timestamp: Date;
  uid: string;
}
