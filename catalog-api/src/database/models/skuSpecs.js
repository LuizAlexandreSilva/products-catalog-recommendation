module.exports = (sequelize, DataTypes) => {
  const productSkus = sequelize.define(
    'productSkus',
    {
      skuId: DataTypes.STRING,
      name: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      underscored: true,
    },
  );

  // productSkus.associate = models => { };

  return productSkus;
};
