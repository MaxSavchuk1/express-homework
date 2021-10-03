const { v4: uuidv4 } = require('uuid');

const messagesDb = [];

class Message {
  static messages = messagesDb;

  static getMessages () {
    return Message.messages;
  }

  static getMessageById () {
    const [foundMessage] = Message.messages.filter(msg => msg.id == id);
    return foundMessage;
  }
  static createMessage (body) {
    const createdMessage = { ...body, id: uuidv4() };
    Message.messages.push(createdMessage);
    return createdMessage;
  }
  static updateMessage (id, body) {
    const _fn = msg => msg.id == id;
    const indexOfMessage = Message.messages.findIndex(_fn);
    const [editMessage] = Message.messages.filter(_fn);
    Message.messages.splice(indexOfMessage, 1, { ...editMessage, ...body });
    return Message.messages[indexOfMessage];
  }
  static deleteMessage (id) {
    const indexOfMessage = Message.messages.findIndex(msg => msg.id == id);
    const [deletedMessage] = Message.messages.splice(indexOfMessage, 1);
    return deletedMessage;
  }
}

module.exports = Message;
