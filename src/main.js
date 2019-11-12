import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      GPA: 123
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
