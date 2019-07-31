<template>
  <v-navigation-drawer permanent class="grey darken-3">
    <v-toolbar flat class="grey darken-4">
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title white--text">
            Dashboard
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
        <Clima></Clima>
        </v-list-tile>
        <v-list-tile>
        <v-btn flat class="white--text" @click="dashRoute">Dashboard</v-btn>
        </v-list-tile>
        <v-list-tile>
        <v-btn flat class="white--text" @click="homeRoute">Formulario</v-btn>
        </v-list-tile>
        
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

  </v-navigation-drawer>
</template>

<script>
import Clima from '@/components/Clima'

export default {
  name: 'Sidenav',
  components: {
    Clima
  },
  data () {
    return {
      right: null
    }
  },
  methods: {
    dashRoute () {
      this.$router.push('dashboard')
    },
    homeRoute () {
      this.$router.push('/')
    },
  }
}
</script>
