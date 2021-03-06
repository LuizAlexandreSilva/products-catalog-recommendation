module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    'products',
    {
      productId: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      brand: DataTypes.STRING,
      rating: DataTypes.STRING,
      priceCash: DataTypes.DOUBLE,
      status: DataTypes.STRING,
    },
    {
      underscored: true,
    },
  );

  products.associate = models => {
    products.belongsToMany(models.categories, {
      through: 'product_categories',
      foreignKey: 'productId',
    });
    products.hasMany(models.productImages, { foreignKey: 'productId' });
    products.hasMany(models.productSkus, {
      foreignKey: 'productId',
    });
  };

  return products;
};
