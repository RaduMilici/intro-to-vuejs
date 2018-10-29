import Vue from "vue";
import Router from "vue-router";
import slides from "./slides";

const routes = slides.map((slide, index) => {
  return { path: `/${index}`, component: slide };
});

Vue.use(Router);

export default new Router({
  routes
});
