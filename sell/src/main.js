// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

import 'common/scss/index.scss';

// Vue.config.productionTip = false;

// 安装插件
Vue.use(Router);
Vue.use(Resource);

// 定义路由
const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
];

// 实例化router
const router = new Router({
  routes,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
