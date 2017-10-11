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
              <v-icon :color="colorForState(controller.status)">
                {{ iconforState(controller.status) }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ controller.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ controller.status }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          
          <v-subheader>
            <span class="controller-status">
              Agent Status
            </span>
          </v-subheader>
          
          <v-list-tile avatar v-for="agent in agents" v-bind:key="agent.name">
            <v-list-tile-action>
              <v-icon :color="colorForState(agent.status)">
                {{ iconforState(agent.status) }}
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ agent.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ agent.status }}
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
  export default {
    name: 'ControllerCard',
    props: ['controllerId'],
    data () {
      return {
        controller: {
          name: 'Controller XY',
          status: 'Online'
        },
        agents: [

        ]
      }
    },
    computed: {
    },
    methods: {
      colorForState: function (state) {
        switch (state) {
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
      iconforState: function (state) {
        switch (state) {
          case 'Offline':
            return 'error'
          case 'Online':
            return 'check_circle'
          case 'Disabled':
            return 'warning'
          default:
            return 'black'
        }
      }
    },
    mounted () {
      console.log('mounted')
      let stausses = ['Online', 'Offline', 'Disabled']
      for (var i = 0; i < this.controllerId / 5; i++) {
        this.agents.push({
          name: `Default Agent TFS 43 SY${i}`,
          status: stausses[Math.floor(Math.random() * stausses.length)]
        })
      }
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
