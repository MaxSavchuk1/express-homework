const Message = require('../models/message');

module.exports.getMessages = (req, res) => {
  const messages = Message.getMessages();
  res.status(200).send(messages);
};

module.exports.getMessageById = (req, res) => {
  const {
    params: { msgId },
  } = req;
  const foundMessage = Message.getMessageById(msgId);
  if (foundMessage) {
    res.status(200).send(foundMessage);
  } else {
    res.status(404).send('Not found');
  }
};

module.exports.createMessage = (req, res) => {
  const { body } = req;
  const createdMessage = Message.createMessage(body);
  res.status(201).send(createdMessage);
};

module.exports.updateMessage = (req, res) => {
  const {
    params: { msgId },
  } = req;
  const { body } = req;
  const updatedMessage = Message.updateMessage(msgId, body);
  res.status(200).send(updatedMessage);
};

module.exports.deleteMessage = (req, res) => {
  const {
    params: { msgId },
  } = req;
  const deletedMessage = Message.deleteMessage(msgId);
  res.status(200).send(deletedMessage);
};
