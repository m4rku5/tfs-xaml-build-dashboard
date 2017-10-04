const express = require('express')
const app = express()

const fs = require('fs')

app.get('/controllers', (req, res) => {
  try {
    const controllers = JSON.parse(fs.readFileSync('config/controllers_dummydata.json', 'utf8'))
    res.send(controllers)
  } catch (err) {
    res.status(400).send(`Cannot get controllers: ${err.message}`)
  }
})

app.get('/controllers/:agentId', function (req, res) {
  try {
    const agents = JSON.parse(fs.readFileSync(`config/agents_dummydata_${req.params.agentId}.json`, 'utf8'))
    res.send(agents)
  } catch (err) {
    res.status(400).send(`Cannot get agents for controller with Id ${req.params.agentId}: ${err.message}`)
  }
})

app.listen(process.env.PORT || 8081)
