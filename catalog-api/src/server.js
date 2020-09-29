const express = require('express');
const { sequelize } = require('./database/models');

const app = express();

app.use(express.json());

const PORT = 3333;

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

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
