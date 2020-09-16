import Vue from 'vue'
import App from './App.vue'
import router from './../router'

Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
