/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/data-user', component:require('./components/Pengguna/DataPengguna.vue').default},
    { path: '/data-level', component:require('./components/Pengguna/DataLevel.vue').default}
]

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const router = new VueRouter({
    mode: 'history', //- ini buat menghilang  tanda /#/
    routes
})

const app = new Vue({
    el: '#app',
    router
});
