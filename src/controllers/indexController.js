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

const getDetails = (req, res) => {
  const index = Number(req.params.index);
  const message = messages[index];
  res.render('details', { message: message });
}

module.exports = { getAllMessages, newMessage, submitMessage, getDetails };
