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

    <v-flex xs12 sm6 md4 lg3 xl2 display-flex v-for="controller in controllers" v-bind:key="controller.Id" >
      <controller-card :controller="controller"></controller-card>
    </v-flex>
    
  </v-layout>
</v-container>
</template>

<script>
  import ControllerCard from './ControllerCard.vue'
  import backendApi from '../api/TfsBuildBackendApi'
  export default {
    name: 'ControllerList',
    data () {
      return {
        controllers: []
      }
    },
    components: {
      'controller-card': ControllerCard
    },

    async mounted () {
      const controllerReq = await backendApi.getControllers()
      const controllers = controllerReq.data

      if (this.$route.query.controllerId) {
        var queriedIds = []
        if (Array.isArray(this.$route.query.controllerId)) {
          queriedIds = this.$route.query.controllerId
        } else {
          queriedIds.push(this.$route.query.controllerId)
        }
        const actualControllersToQuery = []
        controllers.forEach(function (controller) {
          if (queriedIds.includes(controller.Id)) {
            actualControllersToQuery.push(controller)
          }
        }, this)
        this.controllers = actualControllersToQuery
      } else {
        this.controllers = controllers
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
