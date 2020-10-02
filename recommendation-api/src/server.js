const express = require('express');
const routes = require('./routes');

const PORT = 3334;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`🚀 Recommendation API listening at port ${PORT}!`);
});
