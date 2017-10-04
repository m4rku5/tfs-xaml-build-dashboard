const express = require('express')
const app = express()

app.get('/controllers', (req, res) => {
  res.send({
    message: 'hello there!'
  })
})

app.listen(process.env.PORT || 8081)
