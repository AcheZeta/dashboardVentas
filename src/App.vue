<template>
  <v-app>
    <v-toolbar app id="toolbar" class="blue darken-3 white-text">
      <v-toolbar-title class="white--text">e-ventas</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <main>
        <router-view></router-view>
      </main>
    </v-content>
  </v-app>
</template>

<script>
import Sidenav from './components/Sidenav'
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    Sidenav,
    Form
  },
  data () {
    return {
      //
    }
  }
}
</script>
