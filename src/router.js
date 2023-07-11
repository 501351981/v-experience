import {createRouter, createWebHashHistory} from 'vue-router';
const routes = [
    { path: '/v-focus-next', component: ()=> import('./components/VFocusNext.vue') },
];

export default createRouter({
    history: createWebHashHistory(),
    routes
});