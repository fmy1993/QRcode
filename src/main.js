/*
 * @Descripttion: 
 * @version: 
 * @Author: fmy1993
 * @Date: 2021-08-26 20:25:57
 * @LastEditors: fmy1993
 * @LastEditTime: 2021-08-28 10:35:01
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



import axios from 'axios'; //导入axios
import VueAxios from 'vue-axios'
// axios.defaults.baseURL = 'http://www.xxxxx.cn';  //配置根域名
// Vue.prototype.$ajax = axios;  //把axios挂载到Vue的原型上,使用vue axios就可以不用这个




import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'



// 部署项目时关闭
Vue.config.productionTip = true

Vue.use(VueAxios, axios)
Vue.use(MintUI);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})





