<template>
  <v-layout row wrap fill-height>
    <v-flex xs5 sm4 md3 lg3 xl2>
      <Sidenav />
    </v-flex>
    <v-flex xs7 sm8 md9 lg9 xl10>
      <Form />
    </v-flex>
  </v-layout>
</template>

<script>
import Form from '../components/Form';
import Sidenav from '../components/Sidenav';

export default {
  components: {
    Form,
    Sidenav
  }
};
</script>