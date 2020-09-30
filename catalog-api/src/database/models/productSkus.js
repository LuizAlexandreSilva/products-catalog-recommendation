module.exports = (sequelize, DataTypes) => {
  const productSkus = sequelize.define(
    'productSkus',
    {
      sku: DataTypes.STRING,
      productId: DataTypes.STRING,
      name: DataTypes.STRING,
      installmentCount: DataTypes.INTEGER,
      installmentPrice: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      priceCash: DataTypes.DOUBLE,
      oldCash: DataTypes.DOUBLE,
      status: DataTypes.STRING,
    },
    {
      underscored: true,
    },
  );

  productSkus.associate = models => { };

  return productSkus;
};
