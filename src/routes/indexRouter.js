const { Router } = require('express');
const { getAllMessages, newMessage, submitMessage, getDetails } = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', getAllMessages);
indexRouter.get('/new', newMessage);
indexRouter.post('/new', submitMessage);
indexRouter.get('/details/:index', getDetails);

module.exports = indexRouter;