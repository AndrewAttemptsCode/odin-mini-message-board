const db = require('../../db/queries');

const getAllMessages = async (req, res) => {
  const messages = await db.allMessagesGet();

  messages.forEach(message => {
    const dateObj = new Date(message.timestamp);

    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = String(dateObj.getFullYear()).slice(-2);

    message.formattedDate = `${day}/${month}/${year}`;
  });

  res.render('index', { title: 'Mini Message Board', messages: messages });
};

const newMessage = (req, res) => {
  res.render('form');
}

const submitMessage = (req, res) => {
  const { user, message } = req.body;
  messages.unshift({ user: user, text: message, added: new Date().toLocaleString() });
  res.redirect('/');
}

const getDetails = async (req, res) => {
  const messageId = Number(req.params.messageId);
  const messageDetails = await db.getDetails(messageId);

  const dateObj = new Date(messageDetails.timestamp);

  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = String(dateObj.getFullYear()).slice(-2);

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  messageDetails.formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

  res.render('details', { title: 'Message details', messageDetails });
}

module.exports = { getAllMessages, newMessage, submitMessage, getDetails };
