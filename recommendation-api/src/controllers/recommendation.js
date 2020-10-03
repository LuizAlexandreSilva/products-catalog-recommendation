const axios = require('axios').default;

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

    await axios
      .get(
        `
      https://wishlist.neemu.com/onsite/impulse-core/ranking/${type}.json
    `,
      )
      .then(response => {
        recommendedIds = response.data
          .slice(0, maxProducts)
          .map(product => product.recommendedProduct.id);
      })
      .catch(() => {
        return res
          .status(400)
          .json({ message: 'Error getting recommendation data' });
      });

    const products = [];
    await Promise.all(
      recommendedIds.map(async id => {
        const product = await axios.get(
          `http://localhost:3333/products/${id}?format=${dataFormat}`,
        );
        if (product.data && product.data.status === 'AVAILABLE') {
          products.push(product.data);
        }
        return products;
      }),
    );

    return res.json(products);
  },
};

module.exports = recommendationController;
