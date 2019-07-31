<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="sales in cardSales" :key="sales.dashboardName" id="sales" xs3 md2>
        <b>
          <h1 class="headline mb-0">{{ sales.data().dashboardName }}</h1></b>
        <br>
        <v-card class="cyan lighten-3">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"><b>{{ sales.data().newPurchase }}</b></h3>
              <h5 class="headline mb-0">Nuevas Compras</h5>
            </div>
          </v-card-title>
        </v-card>
        <br>
        <v-card class="green lighten-3">
          <v-card-title primary-title >
            <div>
              <h3 class="headline mb-0"><b>{{ sales.data().increasePurchase }}%</b></h3>
              <h4 class="headline mb-0">Incremento de Compras</h4>
            </div>
          </v-card-title>
        </v-card>
        <br>
        <v-card class="orange lighten-2">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"><b>{{ sales.data().newUsers }}</b></h3>
              <h4 class="headline mb-0">Nuevos Usuarios</h4>
            </div>
          </v-card-title>
        </v-card>
        <br>
        <v-card class="red lighten-2">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"><b>{{ sales.data().newVisit }}</b></h3>
              <h4 class="headline mb-0">Nuevas Visitas</h4>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { db } from '../main'
import axios from 'axios'

export default {
  data () {
    return {
      cardSales: [],
      info: null
    }
  },
  methods: {
    readData () {
      db.collection('ventas')
        .get ()
        .then (querySnapshot => {
          querySnapshot.forEach(doc => {
            this.cardSales.push(doc)
            console.log(doc)
          })
        })
    },
  },
  created () {
    this.readData ()
    this.getData ()
  },
  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=460d45c0ef194983ff991c36e5e496b0')
      .then (response => (this.info = response.data))
      console.log(this.info)
  }
}
</script>
