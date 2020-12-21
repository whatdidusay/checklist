import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "newCar",
    component: () => import("../views/NewCar.vue")
  },
  {
    path: "/checkCar",
    name: "checkCar",
    component: () => import("../views/CheckCar.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
