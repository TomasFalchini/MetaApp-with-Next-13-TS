export interface User {
  name: string;
  image: string;
}

export interface Message {
  content: string;
  user: User;
}
