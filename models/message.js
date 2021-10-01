const { v4: uuidv4 } = require('uuid');

const messagesDb = [];

class Message {
  static messages = messagesDb;
}

module.exports = Message;
