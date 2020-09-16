import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../src/components/pages/HomePage.vue';
import ProjectPage from '../src/components/pages/ProjectPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            name:'home',
            component: HomePage
        },
        {
            path:'/project',
            name:'project',
            component: ProjectPage
        }
    ]
});