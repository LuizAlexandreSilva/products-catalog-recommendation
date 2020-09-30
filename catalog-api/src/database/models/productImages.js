module.exports = (sequelize, DataTypes) => {
  const productImages = sequelize.define(
    'productImages',
    {
      productId: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      underscored: true,
    },
  );

  productImages.associate = models => { };

  return productImages;
};
