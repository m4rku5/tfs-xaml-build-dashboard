<template>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
        <v-toolbar class="indigo" dark>
          <v-toolbar-title>XAML Build Agents</v-toolbar-title>
        </v-toolbar>
        <v-card>
        <v-subheader>Controller Status</v-subheader>
        <v-card-text>
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
        </v-card-text>
        <v-divider></v-divider>
        <v-list two-line subheader>
          <v-subheader>Agent status</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <div class="inline">
                <div class="circle green-back indicator"></div>
              </div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>AGENTHOSTNAME-TFS51</v-list-tile-title>
              <v-list-tile-sub-title>Agent TFS 52 SYS X</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <div class="inline">
                <div class="circle yellow-back indicator"></div>
              </div>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>AGENTHOSTNAME-TFS21</v-list-tile-title>
              <v-list-tile-sub-title>Agent TFS 21 SYS X</v-list-tile-sub-title>
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
	width: 25px;
	height: 25px; 
  
  
  -webkit-animation: blink 5s linear infinite;
  -moz-animation: blink 5s linear infinite;
  animation: blink 1s linear infinite;
   
	/* width and height can be anything, as long as they're equal */
}

.red-back {
  background-color: red;
}

.yellow-back {
  background-color: yellow;
}

.green-back {
  background-color: green;
}

/* 
@keyframes blink {  
  0% { background-color: red; }
  50% { background-color: orange; }
  100% { background-color: red; }
}
@-webkit-keyframes blink {
  0% { background-color: red; }
  50% { background-color: yellow; }
  100% { background-color: red; }
} */



.inline
{
  display: flex;
}
</style>
