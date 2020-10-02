const { Router } = require('express');
const recommendationController = require('../controllers/recommendation');

const routes = Router();

routes.get('/recommendations/:type', recommendationController.read);

module.exports = routes;
