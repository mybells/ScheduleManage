import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
// import $ from 'jquery'
import "./plugins/axios";
import "./plugins/element.js";
import router from "@/router/router";
import store from "@/store";
import App from "./App.vue";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
