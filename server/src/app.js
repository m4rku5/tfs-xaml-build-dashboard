const express = require('express')
const app = express()

const fs = require('fs')

app.get('/controllers', (req, res) => {
  const obj = JSON.parse(fs.readFileSync('config/controllers_dummydata.json', 'utf8'))
  res.send(obj)
})

app.listen(process.env.PORT || 8081)
