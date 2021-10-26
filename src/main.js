import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import './assets/common.css'
import 'ant-design-vue/dist/antd.css';
import router from './router'
import store from './store'
import pluginError from '@/plugins'
import '@/assets/base.css'

Vue.config.productionTip = false

Vue.use(Antd)

//全局统一注册自定义过滤器
import filters from "./utils/filters"
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.use(pluginError)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
