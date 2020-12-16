import Vue from 'vue'
import Router from 'vue-router'
import VedioManagement from "../components/VedioManagement";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VedioManagement',
      component: VedioManagement
    },

  ]
})
