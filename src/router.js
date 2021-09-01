import Vue from 'vue';
import VueRouter from 'vue-router';
import Timer from './views/Timer.vue';
import Profiles from './views/Profiles.vue';
import Settings from './views/Settings.vue';

Vue.use(VueRouter);

const routes = [
    { name: 'timer', path: '/', component: Timer },
    { name: 'profiles', path: '/profiles', component: Profiles },
    { name: 'settings', path: '/settings/:id', component: Settings, props: true }
];

export default new VueRouter({
    routes
});