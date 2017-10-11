import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:8081/`
})

export default {
  getControllers: () => {
    return api.get('Controllers')
  },

  getAgents: (controllerId) => {
    const agentResource = `Controllers/${controllerId}`
    console.log(`querying resource ${agentResource}`)
    return api.get(agentResource)
  }

}

