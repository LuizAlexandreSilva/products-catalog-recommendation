'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_skus', {
      sku: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      productId: {
        field: 'product_id',
        type: Sequelize.STRING,
        references: { model: 'products', key: 'product_id' },
      },
      name: {
        type: Sequelize.STRING,
      },
      installmentCount: {
        type: Sequelize.INTEGER,
        field: 'installment_count',
      },
      installmentPrice: {
        type: Sequelize.DOUBLE,
        field: 'installment_price',
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      priceCash: {
        type: Sequelize.DOUBLE,
        field: 'price_cash',
      },
      oldPrice: {
        type: Sequelize.DOUBLE,
        field: 'old_price',
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_skus');
  },
};
