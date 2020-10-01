module.exports = (sequelize, DataTypes) => {
  const skuSpecs = sequelize.define(
    'skuSpecs',
    {
      skuId: DataTypes.STRING,
      name: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    {
      underscored: true,
    },
  );

  skuSpecs.associate = models => {
    skuSpecs.belongsTo(models.productSkus, { foreignKey: 'skuId' });
  };

  return skuSpecs;
};
