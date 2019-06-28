<template>
  <v-app>
    <v-content>
      <Toolbar/>
      <v-layout row wrap>
        <v-flex xs3>
          <Sidenav/>
        </v-flex>
        <v-flex xs9>
          <Form/>
        </v-flex>
      </v-layout>     
    </v-content>
  </v-app>
</template>

<script>
import Form from './components/Form';
import Toolbar from './components/Toolbar';
import Sidenav from './components/Sidenav';

export default {
  name: 'App',
  components: {
    Form,
    Toolbar,
    Sidenav
  },
  data() {
    return {
      //
    };
  }
};
</script>
