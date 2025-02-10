const { Router } = require('express');
const { indexPage, newMessage, submitMessage } = require('../controllers/indexPage');

const indexRouter = Router();

indexRouter.get('/', indexPage);
indexRouter.get('/new', newMessage);
indexRouter.post('/new', submitMessage);

module.exports = indexRouter;