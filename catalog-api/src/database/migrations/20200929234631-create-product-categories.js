'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        field: 'product_id',
        type: Sequelize.STRING,
        references: { model: 'products', key: 'product_id' },
      },
      categoryId: {
        field: 'category_id',
        type: Sequelize.STRING,
        references: { model: 'categories', key: 'category_id' },
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
    await queryInterface.dropTable('product_categories');
  },
};
