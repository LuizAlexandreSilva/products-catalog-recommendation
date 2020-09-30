const { Router } = require('express');
const productsController = require('../controllers/products');

const routes = Router();

routes.use('/status', (req, res) =>
  res.status(200).json({
    status: 'OK',
  }),
);

routes.get('/products/:id', productsController.index);

module.exports = routes;
