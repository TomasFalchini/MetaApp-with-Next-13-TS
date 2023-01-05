import Message from "../../domain/Message/MessageEntity";
import MessageRepository from "../../domain/Message/MessageRepository";

class MessagesServices {
  private MessageDB: MessageRepository;

  constructor(MessageDB: MessageRepository) {
    this.MessageDB = MessageDB;
  }

  async getMessages(id: string) {
    try {
      return this.MessageDB.getMessages(id);
    } catch (err) {
      return console.log(err);
    }
  }

  async sendMessage(message: Message) {
    try {
      return this.MessageDB.sendMsg(message);
    } catch (err) {
      return console.log(err);
    }
  }
}

export default MessagesServices;
