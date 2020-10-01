module.exports = (sequelize, DataTypes) => {
  const productSkus = sequelize.define(
    'productSkus',
    {
      sku: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.STRING,
        references: {
          model: 'products',
          key: 'id',
        },
      },
      name: DataTypes.STRING,
      installmentCount: DataTypes.INTEGER,
      installmentPrice: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      priceCash: DataTypes.DOUBLE,
      oldPrice: DataTypes.DOUBLE,
      status: DataTypes.STRING,
    },
    {
      underscored: true,
    },
  );

  productSkus.associate = models => {
    productSkus.hasMany(models.skuSpecs, { foreignKey: 'skuId' });
  };

  return productSkus;
};
