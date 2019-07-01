import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const config = {
  apiKey: 'AIzaSyAj4fzMaTWREI2PeEUX440H8kW661ExLvs',
  authDomain: 'dashboard-sale.firebaseapp.com',
  databaseURL: 'https://dashboard-sale.firebaseio.com',
  projectId: 'dashboard-sale',
  storageBucket: '',
  messagingSenderId: '186953686584',
  appId: '1:186953686584:web:306ede244c7bebbc'
}

firebase.initializeApp(config)
export const db = firebase.firestore()