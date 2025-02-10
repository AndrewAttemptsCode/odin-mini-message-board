const homePage = (req, res) => {
  res.render('index', { title: 'Mini Message Board' });
};

module.exports = { homePage };
