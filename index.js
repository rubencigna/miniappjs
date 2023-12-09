const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome !')
})

app.get('/tos', (req, res) => {
  res.send('Welcome !')
})

app.listen(port, () => {
  console.log(`Mini app listening on port ${port}`)
})
