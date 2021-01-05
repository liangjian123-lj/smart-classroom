import Vue from 'vue'
import Router from 'vue-router'
import VedioManagement from "../views/management/VedioManagement";
import CoursewareManagement from "../views/management/CoursewareManagement";
import AccountManagement from "../views/management/AccountManagement";
import Favorites from "../views/management/Favorites";
import FollowsFans from "../views/management/FollowsFans";
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
    {
      path: '/coursewareManagement',
      name: 'coursewareManagement',
      component: CoursewareManagement,
      meta:{
        showNav: true
      }
    },
    {
      path: '/accountManagement',
      name: 'accountManagement',
      component: AccountManagement,
      meta:{
        showNav: true
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
      meta:{
        showNav: true
      }
    },
    {
      path: '/followsFans',
      name: 'followsFans',
      component: FollowsFans,
      meta:{
        showNav: true
      }
    }
  ]
})
