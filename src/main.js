// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import routes from './router';
import iView from 'iview';
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n';
import store from "./router/store";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'



Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueAwesomeSwiper);


const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages: {
    'zh': require('./assets/lang/zh.js'),
    'en': require('./assets/lang/en.js')
  }
});

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savePosition) => {
    // 如果savePosition存在，则直接滚动到相应位置
    if (savePosition) {
      return savePosition
    }
    // 否则直接回到顶部
    return {x: 0, y: 0}
  },
  routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
