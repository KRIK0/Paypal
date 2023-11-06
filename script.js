Vue.config.productionTip = false

Vue.component('login', {
  template: '#login'
})

Vue.component('account', {
  template: '#account'
})

Vue.component('signup', {
  template: '#signup'
})

Vue.component('registered', {
  template: '#registered'
})

new Vue({
  el: '#app',
  
  data: {
    page: 'login'
  },
  
  methods: {
    onChangePage(to) {
      this.page = to
    }
  }
})