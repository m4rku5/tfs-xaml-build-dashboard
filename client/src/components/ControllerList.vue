<template>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
      <v-toolbar class="indigo" dark>
        <v-toolbar-title>XAML Build Agents</v-toolbar-title>
      </v-toolbar>
        <v-subheader>Controller Status</v-subheader>
        <div class="grid-container">
          <div class="circle indicator"></div>
          <div class="item controllerheader">
            BuildControllerHostname
          </div>
          <div class=item>
            Name of the build controller
          </div>
          <div class=item>
            since 13:10h
          </div>
        </div>
        <v-divider></v-divider>
        <v-list two-line subheader>
          <v-subheader>Agent status</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <div class="inline">
                <div class="green-circle indicator"></div><div>Online</div>
              </div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>AGENTHOSTNAME-TFS51</v-list-tile-title>
              <v-list-tile-sub-title>Agent TFS 52 SYS X</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Hangouts message</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="video"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Video sounds</v-list-tile-title>
              <v-list-tile-sub-title>Hangouts vidoe call</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="invites"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Invites</v-list-tile-title>
              <v-list-tile-sub-title>Notify when receiving invites</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
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


.circle {
	border-radius: 50%;
	width: 20px;
	height: 20px; 
  background-color: red;
  
  
  -webkit-animation: blink 5s linear infinite;
  -moz-animation: blink 5s linear infinite;
  animation: blink 1s linear infinite;
   
	/* width and height can be anything, as long as they're equal */
}

.green-circle {
	border-radius: 50%;
	width: 20px;
	height: 20px; 
  background-color: green;
  align-self: center;
    
	/* width and height can be anything, as long as they're equal */
}

@keyframes blink {  
  0% { background-color: red; }
  50% { background-color: orange; }
  100% { background-color: red; }
}
@-webkit-keyframes blink {
  0% { background-color: red; }
  50% { background-color: yellow; }
  100% { background-color: red; }
}

.inline
{
  display: flex;
}
</style>
