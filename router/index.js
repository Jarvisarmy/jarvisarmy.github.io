import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../src/components/pages/HomePage.vue';
import ProjectPage from '../src/components/pages/ProjectPage.vue';
import EducationPage from '../src/components/pages/EducationPage.vue';
import PlayList from '../src/components/views/PlayList.vue';

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
        },
        {
            path:'/education',
            name:'education',
            component: EducationPage
        },
        {
            path:'/project/playlist',
            name:'playList',
            component: PlayList
        }
    ]
});