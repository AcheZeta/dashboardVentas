<template>
<v-container>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="formSales.dashboardName"
        type="text"
        :rules="nameRules"
        label="Nombre del Dashboard"
        required
      ></v-text-field>

      <v-text-field
        v-model="formSales.newPurchase"
        type="number"
        :rules="nameRules"
        label="Cantidad de Nuevas compras"
        required
      ></v-text-field>

      <v-text-field
        v-model="formSales.increasePurchase"
        type="number"
        :rules="nameRules"
        label="Incremento de compras"
        required
      ></v-text-field>

      <v-text-field
        v-model="formSales.newUsers"
        type="number"
        :rules="nameRules"
        label="Cantidad de nuevos usuarios"
        required
      ></v-text-field>

      <v-text-field
        v-model="formSales.newVisit"
        type="number"
        :rules="nameRules"
        label="Cantidad de nuevas visitas"
        required
      ></v-text-field>

      <v-text-field
        v-model="formSales.date"
        type="date"
        :rules="nameRules"
        label="Fecha"
        required
      ></v-text-field>

      <v-btn
        color="success"
        @click="addData"
      >
        ENVIAR
      </v-btn>
    <v-btn
      color="error"
      @click="reset"
    >
      CANCELAR
    </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { db } from '../main'
import firebase, { functions } from 'firebase'

export default {
  data () {
    return {
      formSales: {
      dashboardName: '',
      newPurchase: 0,
      increasePurchase: 0,
      newUsers: 0,
      newVisit: 0,
      date: ''
      },
      nameRules: [
        v => !!v || 'Este campo es requerido',
        v => (v && v.length <= 25) || 'El nombre es demasiado largo'
      ],
    }
  },
  methods: {
    reset () {
      this.$refs.form.reset()
    },
    addData () {
      db.collection('ventas').add(this.formSales)
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id)
          // this.readData()
        })
        .catch(function (error) {
          console.error ('Error adding document: ', error)
        })
      this.reset ()
      // this.watcher ()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
