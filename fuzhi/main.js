import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$api='https://www.yaochele.com/api/fuzhi'

const app = new Vue({
    ...App
})
app.$mount()
