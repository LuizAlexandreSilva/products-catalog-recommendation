const axios = require('axios').default;
const CATALOG_API_URL = 'http://catalog-api:3333/products/';
const WISHLIST_API_URL =
  'https://wishlist.neemu.com/onsite/impulse-core/ranking/';

const recommendationController = {
  read: async (req, res) => {
    const { type } = req.params;
    let { maxProducts, dataFormat } = req.query;
    let recommendedIds;

    if (!dataFormat) {
      dataFormat = 'complete';
    }

    if (!maxProducts || maxProducts < 10) {
      maxProducts = 10;
    }
    try {
      const response = await axios.get(`${WISHLIST_API_URL}${type}.json`);
      recommendedIds = response.data
        .slice(0, maxProducts)
        .map(product => product.recommendedProduct.id);

      const products = [];
      await Promise.all(
        recommendedIds.map(async id => {
          try {
            const product = await axios.get(
              `${CATALOG_API_URL}${id}?format=${dataFormat}`,
            );

            if (product.data && product.data.status === 'AVAILABLE') {
              products.push(product.data);
            }
          } catch (err) {
            console.error(err.message);
          }
          return products;
        }),
      );

      return res.json(products);
    } catch (err) {
      console.error(err.message);
      return res
        .status(400)
        .json({ message: 'Error getting recommendation data' });
    }
  },
};

module.exports = recommendationController;
