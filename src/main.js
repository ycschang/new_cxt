import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui' // 引入element-ui依赖
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from "axios";// 引入axios

Vue.config.productionTip = false
Vue.use(Element) //使用element-ui组件
Vue.prototype.axios = axios //使用axios插件
Vue.prototype.router = router;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
