import Vue from "vue";
import Router from "vue-router";
import Home from '../components/home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            compoment: Home 
        }
    ],
    mode: 'history' 
})