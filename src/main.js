import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import store from './config/store'
import router from './config/router'
import './config/bootstrap'
import './config/msgs'

Vue.config.productionTip = false

// Temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikxlb25hcmRvIExlaXRhbyIsImVtYWlsIjoibGVvQGdtaWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NjgxMTMyMjAsImV4cCI6MTY2ODM3MjQyMH0.6q1d6hPLB21lAY_Fs4NMYGJG2LG13Etc6GQs7gu6itk'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')