import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/Index.vue";

Vue.use(VueRouter);


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index")
      },
      {
        path: "/safe",
        name: "Safe",
        component: () => import("../views/safe/index")
      },
      {
        path: "/password",
        name: "Password",
        component: () => import("../views/safe/password")
      },
      {
        path: "/account",
        name: "Account",
        component: () => import("../views/account/username")
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
