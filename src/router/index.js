import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/List'
import Detail from '../components/Detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: List
        },
        {
            path: '/users/:id',
            name: 'users',
            component: Detail
        }
    ]
})
