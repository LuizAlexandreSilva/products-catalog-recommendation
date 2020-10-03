const ProductsDAO = require('../database/dao/products');

const productsController = {
  index: async (req, res) => {
    const { id } = req.params;
    const { format } = req.query;

    const product = await ProductsDAO.read({ id, format });
    if (!product) {
      return res.json();
    }

    return res.json(product);
  },
};

module.exports = productsController;
