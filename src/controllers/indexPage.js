const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date().toLocaleString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString()
  },
  {
    text: "What's up!",
    user: "James",
    added: new Date().toLocaleString()
  },
];

const indexPage = (req, res) => {
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

module.exports = { indexPage, newMessage, submitMessage, getDetails };
