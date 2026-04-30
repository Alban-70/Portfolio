import App from "@/App.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: App,
    children: [
      { 
        path: "home", 
        name: "home", 
        component: Home 
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
