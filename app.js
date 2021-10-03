const express = require('express');
const validate = require('./middleware/validate');
const messagesController = require('./controller/messagesController');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});

app.get('/messages', messagesController.getMessages);

app.get('/messages/:msgId', messagesController.getMessageById);
app.post(
  '/messages',
  validate.validateMessage,
  messagesController.createMessage
);
app.patch('/messages/:msgId', messagesController.updateMessage);
app.delete('/messages/:msgId', messagesController.deleteMessage);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
