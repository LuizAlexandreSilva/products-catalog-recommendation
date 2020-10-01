const { db } = require('../../models');
const Formatter = require('./formatter');

const { products: Products } = db;

const ProductsDAO = {
  read: async ({ id, format }) => {
    const options = Formatter.format(format);
    const foundProduct = await Products.findByPk(id, {
      ...options,
    });

    if (!foundProduct) {
      throw new Error('Product not found');
    }

    return foundProduct;
  },
};

module.exports = ProductsDAO;
