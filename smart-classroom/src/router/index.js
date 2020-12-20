import Vue from 'vue'
import Router from 'vue-router'
import VedioManagement from "../components/VedioManagement";
import Index from "../views/Index";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/vedioManagement',
      name: 'VedioManagement',
      component: VedioManagement,
      meta:{
        showNav: true
      }
    },

  ]
})
