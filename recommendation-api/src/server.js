const express = require('express')

const app = express()
const PORT = 3334

app.use(express.json())

app.use('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`🚀 Recommendation API listening at port ${PORT}!`)
})
