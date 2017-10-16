const xamlBuild = require('../tfs_api/TfsBuildApiAdapter')
const config = require('../config/config')
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors({origin: '*'}))

console.log('Using NODE_ENV:  ' + process.env.NODE_ENV)

app.get('/controllers', (req, res) => {
  try {
    console.log(`tfsuri: ${config.tfsUri}`)
    res.send(xamlBuild.getBuildControllers(config.tfsUri))
  } catch (err) {
    res.status(400).send(`Cannot get controllers: ${err.name}`)
  }
})

app.get('/controllers/:controllerId', (req, res) => {
  try {
    res.send(xamlBuild.getBuildAgents(config.tfsUri, req.params.controllerId))
  } catch (err) {
    res.status(400).send(`Cannot get agents for controller with Id ${req.params.controllerId}: ${err.message}`)
  }
})

app.get('*', function (req, res) {
  res.status(404).send('404: Page not found ¯\\_(ツ)_/¯')
})

app.listen(process.env.PORT || 8081)
