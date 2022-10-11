import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import ClientsSection from "../components/ClientsSection.vue"

const routes = [
  {
    path: "/auth",
    component: Auth,
    children: [
      {path: "login", component: SignIn,},
      { path: "sign-up", component: SignUp },
      
    ],
  },
  {path:"/clients-section", component: ClientsSection},
  {
    path: "/", component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
