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
              <v-icon color="green">
                check_circle
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{controllerId}}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Online
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
              <v-icon :color="agent.color">
                {{ agent.icon }}
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
        agents: [
          {
            name: 'Default Agent TFS 43 SYS X',
            status: 'Online',
            icon: 'check_circle',
            color: 'green'
          },
          {
            name: 'Agent TFS 52 SYS Y',
            status: 'Offline',
            icon: 'error',
            color: 'red'
          },
          {
            name: 'Default Agent TFS 99 SYS TF',
            status: 'Disabled',
            icon: 'warning',
            color: 'orange darken-1'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
