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

const homePage = (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
};

module.exports = { homePage };
