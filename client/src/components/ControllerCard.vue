<template>
      <v-card>
        <v-list>

          <v-subheader>
            <span class="controller-status">
              Controller Status
            </span>
          </v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>  
              <v-icon :color="colorForState(controller)">
                {{ iconforState(controller) }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ controller.Name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ getReadableState(controller) }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          
          <v-subheader>
            <span class="controller-status">
              Agent Status
            </span>
          </v-subheader>
          
          <v-list-tile avatar v-for="agent in agents" v-bind:key="agent.Id">
            <v-list-tile-action>
              <v-icon :color="colorForState(agent)">
                {{ iconforState(agent) }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ agent.Name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ getReadableState(agent) }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  import backendApi from '../api/TfsBuildBackendApi'
  export default {
    name: 'ControllerCard',
    props: ['controller'],
    data () {
      return {
        agents: []
      }
    },
    methods: {
      colorForState: function (machine) {
        const strState = this.getReadableState(machine)
        switch (strState) {
          case 'Offline':
            return 'red'
          case 'Online':
            return 'green'
          case 'Disabled':
            return 'orange darken-1'
          default:
            return 'black'
        }
      },
      iconforState: function (machine) {
        const strState = this.getReadableState(machine)
        switch (strState) {
          case 'Offline':
            return 'error'
          case 'Unavailable':
            return 'error'
          case 'Online':
            return 'check_circle'
          case 'Disabled':
            return 'warning'
          default:
            return 'black'
        }
      },
      getReadableState: function (machine) {
        if (machine.Status === 2) {
          return 'Offline'
        }
        if (machine.Status === 1 && !machine.Enabled) {
          return 'Disabled'
        }
        if (machine.Status === 1 && machine.Enabled) {
          return 'Online'
        }
      },
      update: async function () {
        // const vm = this
        const agenetReq = await backendApi.getAgents(this.controller.Id)
        this.agents = Array.isArray(agenetReq.data) ? agenetReq.data : [agenetReq.data]
        console.log('agents: ' + this.agents.message)
      }
    },
    mounted: function () {
      console.log('mounted controller')
      this.$nextTick(async function () {
        this.update()
        setInterval(this.update, 30000)
      })
    }
  }
</script>

<style scoped>

  .controller-status {
    font-weight: bold;
  }

  .grid-container {
    margin: 0px;
    max-width: 100%;
  }

  .display-flex {
    display: flex;
  }

  .card {
    width: 100%;
  }
</style>
