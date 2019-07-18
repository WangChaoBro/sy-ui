import Vue from "vue";
import Router from "vue-router";
import navConf from "../nav.json";

Vue.use(Router);

let routes = [];

Object.keys(navConf).forEach(header => {
  routes = routes.concat(navConf[header]);
});

let addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.type === "pages") {
        route.component = resolve =>
          require([`../components/${route.name}.vue`], resolve);

        return;
      }
      route.component = resolve =>
        require([`../docs/${route.name}.md`], resolve);

    }
  });
};

addComponent(routes);

export default new Router({
  routes: routes,
  mode: "history"
});
