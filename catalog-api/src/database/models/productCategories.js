module.exports = (sequelize, DataTypes) => {
  const productCategories = sequelize.define(
    'productCategories',
    {
      productId: DataTypes.STRING,
      categoryId: DataTypes.STRING,
    },
    {
      underscored: true,
    },
  );

  productCategories.associate = models => { };

  return productCategories;
};
