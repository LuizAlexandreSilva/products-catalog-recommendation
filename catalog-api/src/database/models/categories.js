module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    'categories',
    {
      categoryId: DataTypes.STRING,
      parentId: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      underscored: true,
    },
  );

  categories.associate = models => {};

  return categories;
};
