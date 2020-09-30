const ProductsDAO = require('../database/dao/products');
const productResponseFormatter = require('../formatters/products');

const productsController = {
  index: async (req, res) => {
    const { id } = req.params;
    const { format } = req.query;

    const product = await ProductsDAO.read({ id, format });
    const response = productResponseFormatter.get(product);

    return res.json(response);
  },
};

module.exports = productsController;
