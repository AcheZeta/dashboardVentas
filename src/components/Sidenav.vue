<template>
  <v-navigation-drawer permanent class="grey darken-3">
    <v-toolbar flat class="grey darken-4">
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title white--text">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="prueba"
      >
        <v-list-tile-action>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="title white--text">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidenav',
  data () {
    return {
      items: [
        { title: 'Usuario', icon: 'person' },
        { title: 'Formulario', icon: 'list' },
        { title: 'Dashboard', icon: 'dashboard' }
      ],
      right: null
    }
  },
  methods: {
    prueba () {
      console.log('Hola')
    },
    dashRoute () {
      this.$router.push('/dashboard')
    }
  }
}
</script>
