<template>
<v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="dashboardName"
        type="text"
        :rules="textRules"
        label="Nombre del Dashboard"
        required
      ></v-text-field>

      <v-text-field
        v-model="newPurchase"
        type="number"
        :rules="numberRules"
        label="Cantidad de Nuevas compras"
        required
      ></v-text-field>

      <v-text-field
        v-model="increasePurchase"
        type="number"
        :rules="numberRules"
        label="Incremento de compras"
        required
      ></v-text-field>

      <v-text-field
        v-model="newUsers"
        type="number"
        :rules="numberRules"
        label="Cantidad de nuevos usuarios"
        required
      ></v-text-field>

      <v-text-field
        v-model="newVisit"
        type="number"
        :rules="numberRules"
        label="Cantidad de nuevas visitas"
        required
      ></v-text-field>

      <v-text-field
        v-model="date"
        type="number"
        :rules="numberRules"
        label="Fecha"
        required
      ></v-text-field>

      <v-btn
        color="success"
        @click="validate"
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
export default {
  data () {
  return {    
    valid: true,
    dashboardName: '',
    newPurchase: null,
    increasePurchase: null,
    newUsers: null,
    newVisit: null,
    date: null,
    numberRules: [
      v => !!v || 'Este campo es requerido'
    ],
    textRules: [
      v => !!v || 'Este campo es requerido'
      // v => (v && v.length <= 50) || 'El nombre es demasiado largo'
    ]
  } 
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
     this.$refs.form.reset()
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