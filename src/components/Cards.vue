
<template>
  <v-layout>
    <v-flex xs12 sm6>
      <div v-for="sales in cardSales" :key="sales.dashboardName" id="sales">
        <b><h1 class="headline mb-0">{{ sales.data().dashboardName }}</h1></b>
        <br>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"><b>{{ sales.data().newPurchase }}</b></h3>
              <h4 class="headline mb-0">Nuevas Compras</h4>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="blue">Ver más</v-btn>
          </v-card-actions>
        </v-card>
        <br>
        <v-card>
          <v-card-title primary-title >
            <div>
              <h3 class="headline mb-0"><b>{{ sales.data().increasePurchase }}%</b></h3>
              <h4 class="headline mb-0">Incremento de Compras</h4>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="blue">Ver más</v-btn>
          </v-card-actions>
        </v-card>
        <br>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"><b>{{ sales.data().newUsers }}</b></h3>
              <h4 class="headline mb-0">Nuevos Usuarios</h4>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="blue">Ver más</v-btn>
          </v-card-actions>
        </v-card>
        <br>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0"><b>{{ sales.data().newVisit }}</b></h3>
              <h4 class="headline mb-0">Nuevas Visitas</h4>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="blue">Ver más</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { db } from '../main'
import firebase from 'firebase'

export default {
  data () {
    return {
      cardSales: []
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
    }
  },
  created () {
    this.readData ()
  }
}
</script>
