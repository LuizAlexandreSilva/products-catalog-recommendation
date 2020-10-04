require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
    logging: false,
  },
};
