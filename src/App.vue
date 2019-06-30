<template>
  <v-app>
    <v-toolbar app id="toolbar" class="blue darken-3 white-text">
      <v-toolbar-title class="white--text">e-ventas</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-layout row wrap>
        <v-flex xs3>
          <Sidenav />
        </v-flex>
        <v-flex xs9>
          <Form />
        </v-flex>
      </v-layout>
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
