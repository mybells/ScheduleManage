import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export const constantRouterMap = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  { path: "/404", component: () => import("@/views/404.vue"), hidden: true },
  { path: "*", redirect: "/404", hidden: true }
];
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
