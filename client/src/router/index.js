import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import General from "../pages/General.vue";
import Departments from "../pages/Departments.vue";
import Clubs from "../pages/Clubs.vue";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";
import DepartmentAn from "../pages/DepartmentAn.vue";
import ClubAn from "../pages/ClubAn.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/general",
    component: General,
  },
  {
    path: "/departments",
    component: Departments,
  },
  {
    path: "/clubs",
    component: Clubs,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
  path: "/department-announcements",
  component: DepartmentAn,
},
{
  path: "/club-announcements",
  component: ClubAn,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;