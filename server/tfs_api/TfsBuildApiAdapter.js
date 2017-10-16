
const path = require('path')
const spawn = require('child_process').spawnSync

function XamlBuildApiException (message) {
  this.message = message
  this.name = 'XamlBuildApiException'
}

function executePowershell (scriptPath, args) {
  let commandArgs = []
  commandArgs.push(scriptPath)
  args.forEach((element) => commandArgs.push(element))

  console.log('Executing command: powershell.exe ', commandArgs)
  const psCommand = spawn('powershell.exe', commandArgs)

  if (psCommand.stderr === '') {
    throw new XamlBuildApiException(psCommand.stderr.toString())
  }
  return JSON.parse(psCommand.stdout.toString())
}

function getFakeControllers () {
  console.log('fake controlelryyd')
  var controllers = []
  for (var i = 0; i < 15; i++) {
    controllers.push({
      Id: i,
      Name: `Controller__Foooo ${i}`,
      Status: Math.floor(Math.random() * 2) + 1,
      Enabled: Math.random() > 0.5,
      Uri: 'vstfs:///build/agetns/1'
    })
  }
  console.log('return controllers ' + JSON.stringify(controllers))
  return controllers
}

function getFakeBuildAgents (controllerId) {
  console.log(`querying agents from ${controllerId}`)
  var agents = []

  for (var i = 0; i < ((controllerId * 99) % 5) + 1; i++) {
    const status = Math.floor((i / 3) + 1)
    const enabled = status !== 1 ? false : i % 2 === 0
    agents.push({
      id: i,
      Name: `Default Agent ${i}`,
      Status: status,
      Enabled: enabled,
      MachineName: `TFS-Agent-Hostname_${i}`,
      ReservedForBuild: false,
      Uri: 'vstfs:///build/agetns/1'
    })
  }
  return agents
}

exports.getBuildControllers = function (tfsUri) {
  if (process.env.NODE_ENV === 'development') {
    return getFakeControllers()
  }
  return executePowershell(path.join(__dirname, '../tfs_api/Get-XamlControllers.ps1'), [`-TfsUri ${tfsUri}`])
}

exports.getBuildAgents = function (tfsUri, controllerId) {
  if (process.env.NODE_ENV === 'development') {
    return getFakeBuildAgents(controllerId)
  }
  return executePowershell(path.join(__dirname, '../tfs_api/Get-XamlAgents.ps1'), [`-TfsUri ${tfsUri}`, `-ControllerId ${controllerId}`])
}
