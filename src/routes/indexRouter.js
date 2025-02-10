const { Router } = require('express');
const { indexPage } = require('../controllers/indexPage');

const indexRouter = Router();

indexRouter.get('/', indexPage);

module.exports = indexRouter;