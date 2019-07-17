import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main'
        },
        {
            path: '/users/:id',
            name: 'Detail',
            component: Detail
        }
    ]
})
