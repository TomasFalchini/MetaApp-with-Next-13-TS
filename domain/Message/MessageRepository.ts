import Message from "./MessageEntity";

export default interface MessageRepository {
  sendMsg: (message: Message) => Message;
  getMessages: (id: string) => Message[];
}
