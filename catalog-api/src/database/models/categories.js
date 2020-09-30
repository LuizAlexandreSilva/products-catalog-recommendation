module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    'categories',
    {
      categoryId: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      parentId: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      underscored: true,
    },
  );

  categories.associate = models => {
    categories.belongsToMany(models.products, {
      through: 'product_categories',
      foreignKey: 'category_id',
    });
  };

  return categories;
};
