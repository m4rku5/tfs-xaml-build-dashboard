
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

exports.getBuildControllers = function (tfsUri) {
  return executePowershell(path.join(__dirname, '../tfs_api/Get-XamlControllers.ps1'), [`-TfsUri ${tfsUri}`])
}

exports.getBuildAgents = function (tfsUri, controllerId) {
  return executePowershell(path.join(__dirname, '../tfs_api/Get-XamlAgents.ps1'), [`-TfsUri ${tfsUri}`, `-ControllerId ${controllerId}`])
}
