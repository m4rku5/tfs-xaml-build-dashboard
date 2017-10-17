<template>
<v-container class="grid-container" grid-list-md>
    <v-flex xs12>
      <v-toolbar :height="45" class="controller-toolbar" flat>
        <v-toolbar-title>
          XAML Build Status
        </v-toolbar-title>
      </v-toolbar>
    </v-flex>

    <article>
      <section v-for="controller in controllers" v-bind:key="controller.Id" >
        <controller-card :controller="controller"></controller-card>
      </section>
    </article>
    
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
          if (queriedIds.includes(`${controller.Id}`)) {
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

  *,
  *:before,
  *:after {
    box-sizing: border-box !important;
  }

  article {
    column-width: 30em;
    -moz-column-width: 30em;
    -webkit-column-width: 30em;
    
    column-gap: 1em;
    -moz-column-gap: 1em;
    -webkit-column-gap: 1em;
  }

  section {
    display: block;
    margin: 0.25rem;
    padding: .3rem;
    width: 100%;
    background: #efefef;
    break-inside: avoid-column;
  }

  .controller-status {
    font-weight: bold;
  }

  .grid-container {
    margin: 0px;
    max-width: 100%;
  }

  .card {
    width: 100%;
  }

  .container.grid-list-md {
    padding: 0px;
  }

  .controller-toolbar {
    background-color: #0078d7 !important;
    color: white !important; 
    padding: 0px !important;
  }

</style>
