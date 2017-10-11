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

    <v-flex xs12 sm6 md4 lg3 xl2 display-flex v-for="id in controllerIds" v-bind:key="id" >
      <controller-card :controller-id="id"></controller-card>
    </v-flex>
    
  </v-layout>
</v-container>
</template>

<script>
  import ControllerCard from './ControllerCard.vue'

  export default {
    name: 'ControllerList',
    data () {
      return {
        controllerIds: [21, 35, 13, 40, 26]
      }
    },
    components: {
      'controller-card': ControllerCard
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
