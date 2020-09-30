const express = require('express');
const { sequelize } = require('./database/models');
const routes = require('./routes');

const app = express();
const PORT = 3333;

app.use(express.json());

app.use(routes);

const tesDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

app.listen(PORT, () => {
  tesDbConnection()
    .then(() => console.log(`🚀 Catalog API listening at port ${PORT}!`))
    .catch(err => console.log(err));
  console.log();
});
