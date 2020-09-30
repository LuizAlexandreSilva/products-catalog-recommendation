module.exports = (sequelize, DataTypes) => {
  const productCategories = sequelize.define(
    'productCategories',
    {
      productId: {
        type: DataTypes.STRING,
        references: {
          model: 'croducts',
          key: 'product_id',
        },
      },
      categoryId: {
        type: DataTypes.STRING,
        references: {
          model: 'categories',
          key: 'category_id',
        },
      },
    },
    {
      underscored: true,
    },
  );

  // productCategories.associate = models => { };

  return productCategories;
};
