import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import ClientsSection from "../components/ClientsSection.vue"
import Profile from "../components/Profile.vue"

const routes = [
  {
    path: "/auth",
    component: Auth,
    children: [
      {path: "login", component: SignIn,},
      { path: "sign-up", component: SignUp },
      
    ],
  },
  { path: "/clients-section", component: ClientsSection },
  { path: "/profile", component: Profile},
  {
    path: "/", component: Home,
    
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
