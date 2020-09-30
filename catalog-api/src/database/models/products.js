module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    'products',
    {
      productId: DataTypes.STRING,
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

  products.associate = models => { };

  return products;
};
