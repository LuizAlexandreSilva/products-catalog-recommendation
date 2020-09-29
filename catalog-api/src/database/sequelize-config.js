require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    define: {
      underscored: true,
    },
    logging: true,
  },
};
