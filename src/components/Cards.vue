
<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <div v-for="sales in cardSales" :key="sales.dashboardName" id="sales">
        <h3 class="headline mb-0">{{ sales.data().dashboardName }}</h3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ sales.data().newPurchase }}</h3>
              <h3 class="headline mb-0">Nuevas Compras</h3>
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
              <h3 class="headline mb-0">{{ sales.data().increasePurchase }}%</h3>
              <h3 class="headline mb-0">Incremento de Compras</h3>
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
              <h3 class="headline mb-0">{{ sales.data().newUsers }}</h3>
              <h3 class="headline mb-0">Nuevos Usuarios</h3>
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
              <h3 class="headline mb-0">{{ sales.data().newVisit }}</h3>
              <h3 class="headline mb-0">Nuevas Visitas</h3>
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
  data() {
    return {
      cardSales: []
    }
  },
  methods: {
    readData() {
      db.collection('ventas')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.cardSales.push(doc);
            console.log(doc)
          })
        })
    }
  },
  created() {
    this.readData()
  }
};
</script>
