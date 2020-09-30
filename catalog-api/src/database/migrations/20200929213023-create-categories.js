'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      categoryId: {
        allowNull: false,
        field: 'category_id',
        primaryKey: true,
        type: Sequelize.STRING,
      },
      parentId: {
        type: Sequelize.STRING,
        field: 'parent_id',
        references: { model: 'categories', key: 'category_id' },
      },
      name: {
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
    await queryInterface.dropTable('categories');
  },
};
