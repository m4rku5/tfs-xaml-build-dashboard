<template>
<v-container class="grid-container" grid-list-md>
  <v-layout row wrap>
    <v-flex xs12>
      <v-toolbar class="indigo" dark>
        <v-toolbar-title>
          XAML Build Status
        </v-toolbar-title>
      </v-toolbar>
    </v-flex>
    <v-flex xs12 sm6 md4 display-flex>
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
                BUILDCONTROLLER_TFS12asdfjasdlöfjas
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
          
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="red">
                error
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Agent TFS 52 SYS Y
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Online
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
            
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="green">
                check_circle
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Agent TFS 21 SYS X
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Offline
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="orange darken-1">
                warning
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Default Agent TFS 43 SYS X
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Disabled
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>

      </v-flex>
      <v-flex xs12 sm6 md4 display-flex>

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
                BUILDCONTROLLER_TFS12
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
          
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="red">
                error
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Agent TFS 52 SYS Y
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Online
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
            
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="green">
                check_circle
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Agent TFS 21 SYS X
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Offline
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
              <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="red">
                error
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Agent TFS 52 SYS Y
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Online
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
            
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="green">
                check_circle
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Agent TFS 21 SYS X
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Offline
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="orange darken-1">
                warning
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Default Agent TFS 43 SYS X
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Disabled
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>

      </v-flex>
      <v-flex xs12 sm6 md4 display-flex>


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
                BUILDCONTROLLER_TFS12
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
                    <v-list-tile avatar>
            <v-list-tile-action>  
              <v-icon color="green">
                check_circle
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Default agent TFS 2 SYS 
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Online
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="red">
                error
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Agent TFS 52 SYS Y
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Online
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
            
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="green">
                check_circle
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Agent TFS 21 SYS X
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Offline
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-action>
              <v-icon color="orange darken-1">
                warning
              </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                Default Agent TFS 43 SYS X
              </v-list-tile-title>
              <v-list-tile-sub-title>
                Disabled
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
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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
