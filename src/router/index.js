import App from "@/App.vue";
import Home from "@/views/Home.vue";
import Technique from "@/views/Technique.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: App,
    children: [
      { 
        path: "", 
        name: "Home", 
        component: Home 
      }
    ],
  },
  {
    path: "/technique",
    name: "Technique",
    component: Technique
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
