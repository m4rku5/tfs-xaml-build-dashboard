import axios from 'axios'

function TfsApiException (message) {
  this.message = message
  this.name = TfsApiException
}

const api = axios.create({
  baseURL: `http://localhost:8081/`
})

export default {
  getControllers: () => {
    var controllers
    api.get('Controllers').then((result) => {
      controllers = result.data
    })
    .err((err) => {
      throw new TfsApiException(`Unable to query controllers: ${err}`)
    })
    return controllers
  },
  getAgents: (controllerId) => {
    var controllers
    api.get(`Controllers/${controllerId}`).then((result) => {
      controllers = result.data
    })
    .err((err) => {
      throw new TfsApiException(`Unable to query controllers: ${err}`)
    })
    return controllers
  }

}

