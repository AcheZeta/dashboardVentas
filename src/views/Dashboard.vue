<template>
  <v-layout row wrap fill-height>
    <v-flex xs5 sm4 md3 lg3 xl2>
      <SideNav />
    </v-flex>
    <v-flex xs7 sm8 md9 lg9 xl10>
      <Cards />
    </v-flex>
  </v-layout>
</template>

<script>
  import Cards from '../components/Cards'
  import SideNav from '../components/Sidenav'

  export default {
    components: {
      Cards,
      SideNav
    }
  }
</script>