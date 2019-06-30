<template>
<v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="dashboardName"
        :rules="textRules"
        label="Nombre del Dashboard"
        required
      ></v-text-field>

      <v-text-field
        v-model="newPurchases"
        :rules="numberRules"
        label="Cantidad de Nuevas compras"
        required
      ></v-text-field>

      <v-text-field
        v-model="increasePurchase"
        :rules="numberRules"
        label="Incremento de compras"
        required
      ></v-text-field>

      <v-text-field
        v-model="newUsers"
        :rules="numberRules"
        label="Cantidad de nuevos usuarios"
        required
      ></v-text-field>

      <v-text-field
        v-model="newVisit"
        :rules="numberRules"
        label="Cantidad de nuevas visitas"
        required
      ></v-text-field>

      <v-text-field
        v-model="date"
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

    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    dashboardName: '',
    newPurchase: '',
    increasePurchase: '',
    newUsers: '',
    newVisit: '',
    date: '',
    numberRules: [
      v => !!NaN || 'Este campo es requerido',
      v => (v && v.length <= 50) || 'El nombre es demasiado largo'
    ],
    textRules: [
      v => !!v || 'Este campo es requerido'
      // v => (v && v.length <= 50) || 'El nombre es demasiado largo'
    ]
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
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
