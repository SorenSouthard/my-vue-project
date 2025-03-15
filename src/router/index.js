import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/ProjectList.vue'
import ProjectList from '../components/ProjectList.vue';

const routes = [
    {path: '/', name: 'Home', component: HomePage},
    {path: '/projects', name: 'Projects', component: ProjectList}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;