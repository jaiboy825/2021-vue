import {createWebHistory, createRouter} from 'vue-router';
import A01Home from './../components/A01.Home.vue';

const routes = [
    {path:'/',        redirect:'/home'},  
    {path:'/home',        component:A01Home},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;