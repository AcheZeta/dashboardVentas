<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap class="white--text">
          <i class="material-icons">location_on</i>
          <b>{{ info.name }}
          {{ info.weather[0].description }}</b>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      info: null
    }
  },
  methods: {
    localizacion () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position.coords.latitude, position.coords.longitude)
        })
      }
    }
  },
  mounted () {
    axios
      .get ('http://api.openweathermap.org/data/2.5/weather?q=Mexico&APPID=460d45c0ef194983ff991c36e5e496b0')
      .then (response => (this.info = response.data))
  }
}
</script>
