import Vue from "vue";
import Router from "vue-router";
import Main from "@/views/Main.vue";

Vue.use(Router);

export const constantRouterMap = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  { path: "/404", component: () => import(/* webpackChunkName: "about" */ "@/views/404.vue"), hidden: true },
  { path: "*", redirect: "/404", hidden: true }
];
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
