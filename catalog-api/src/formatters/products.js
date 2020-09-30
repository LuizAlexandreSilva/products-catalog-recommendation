const _ = require('lodash');

const ProductResponseFormatter = {
  get: product => {
    const formattedResponse = _.omit(product.dataValues, ['description']);

    return formattedResponse;
  },
};

module.exports = ProductResponseFormatter;
