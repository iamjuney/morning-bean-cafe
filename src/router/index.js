import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import ProductView from "../views/ProductView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashboardView,
        },
        {
            path: "/product",
            name: "product",
            component: ProductView,
        },
    ],
});

export default router;
