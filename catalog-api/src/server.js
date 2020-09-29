import express from 'express';
const app = express();

const PORT = 3333;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Catalog API listening at port ${PORT}`);
});
