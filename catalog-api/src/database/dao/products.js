const { db } = require('../models');

const { products: Products, categories: Categories } = db;

const ProductsDAO = {
  read: async ({ id, format }) => {
    console.log(id, format);
    const foundProduct = await Products.findOne({
      include: [{ model: Categories }],
      where: { productId: id },
    });

    if (!foundProduct) {
      throw new Error('Product not found');
    }

    return foundProduct;
  },
};

module.exports = ProductsDAO;
