const { Router } = require('express');
const { homePage } = require('../controllers/homePage');

const indexRouter = Router();

indexRouter.get('/', homePage);

module.exports = indexRouter;