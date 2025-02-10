const { Router } = require('express');
const { indexPage, newMessage, submitMessage, getDetails } = require('../controllers/indexPage');

const indexRouter = Router();

indexRouter.get('/', indexPage);
indexRouter.get('/new', newMessage);
indexRouter.post('/new', submitMessage);
indexRouter.get('/details/:index', getDetails);

module.exports = indexRouter;