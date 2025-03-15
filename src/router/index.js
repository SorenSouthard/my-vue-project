import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import ProjectList from '../components/ProjectList.vue';
import Contact from '../components/Contact.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/projects', name: 'Projects', component: ProjectList},
    {path: '/contact', name: 'Contact', component: Contact}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;