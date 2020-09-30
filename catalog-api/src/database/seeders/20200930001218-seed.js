const catalogJSON = require('./catalog.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = [];
    const products = [];
    const productCategories = [];
    const skus = [];
    const skuSpecs = [];

    catalogJSON.map(item => {
      if (item.id && !products.some(i => i.id === item.id)) {
        products.push({
          product_id: item.id,
          name: item.name,
          description: item.description,
          status: item.status,
          brand: item.details.brand,
          rating: item.details.rating,
          price_cash: Number(item.details.precoavista),
          created_at: new Date(),
          updated_at: new Date(),
        });
      }

      item.categories.map(category => {
        if (
          category &&
          category.id &&
          !categories.some(i => i.category_id === category.id)
        ) {
          categories.push({
            category_id: category.id,
            name: category.name,
            parent_id: category.parents ? category.parents[0] : null,
            created_at: new Date(),
            updated_at: new Date(),
          });

          productCategories.push({
            product_id: item.id,
            category_id: category.id,
            created_at: new Date(),
            updated_at: new Date(),
          });
        }
      });

      item.skus &&
        item.skus.map(sku => {
          skus.push({
            sku: sku.sku,
            product_id: item.id,
            name: sku.properties.name,
            installment_count: sku.properties.installment.count,
            installment_price: sku.properties.installment.price,
            price: sku.properties.price,
            price_cash: sku.properties.details.precoavista,
            old_price: sku.properties.oldPrice,
            status: sku.properties.status,
            created_at: new Date(),
            updated_at: new Date(),
          });

          const keys = Object.keys(sku.specs);
          if (keys.length) {
            keys.forEach(key => {
              skuSpecs.push({
                sku_id: sku.sku,
                name: key,
                value: sku.specs[key],
                created_at: new Date(),
                updated_at: new Date(),
              });
            });
          }
        });
    });

    await queryInterface.bulkInsert('categories', categories);
    await queryInterface.bulkInsert('products', products);
    await queryInterface.bulkInsert('product_categories', productCategories);
    await queryInterface.bulkInsert('product_skus', skus);
    await queryInterface.bulkInsert('sku_specs', skuSpecs);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sku_specs');
    await queryInterface.bulkDelete('product_skus');
    await queryInterface.bulkDelete('product_categories');
    await queryInterface.bulkDelete('products');
    await queryInterface.bulkDelete('categories');
  },
};
