/*
 * @Descripttion: 
 * @version: 
 * @Author: fmy1993
 * @Date: 2021-08-26 20:25:57
 * @LastEditors: fmy1993
 * @LastEditTime: 2021-08-26 21:46:25
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'



Vue.config.productionTip = false


Vue.use(MintUI);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})





