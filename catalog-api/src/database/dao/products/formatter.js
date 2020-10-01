const { db } = require('../../models');
const { categories: Categories } = db;

const Formatter = {
  format: type => {
    switch (type) {
      case 'compact':
        return {
          include: [
            {
              model: Categories,
              attributes: ['name'],
              through: { attributes: [] },
            },
          ],
          attributes: ['name', ['price_cash', 'price'], 'status'],
        };
      case 'complete':
        return {
          include: { all: true, nested: true },
        };
    }
  },
};

module.exports = Formatter;
