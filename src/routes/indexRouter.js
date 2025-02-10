const { Router } = require('express');
const { indexPage } = require('../controllers/indexPage');
const { newMessage } = require('../controllers/newMessage');

const indexRouter = Router();

indexRouter.get('/', indexPage);
indexRouter.get('/new', newMessage);

module.exports = indexRouter;