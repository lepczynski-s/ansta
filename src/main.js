/* COMMON LIBRARIES */
window.$ = window.jQuery = require('jquery')
var bootstrapjs = require('bootstrap-sass')

/* VUE APPLICATION IMPORTS */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Database from './plugins/database'
import Application from './application'

/* CONFIGURE VUE PLUGINS */
Vue.use(VueRouter)
Vue.use(Database)

/* IMPORT ROUTES */
import PeopleRoute from './routes/people'
import PersonRoute from './routes/person'

/* CONFIGURE & RUN ROUTED APPLICATION */
var router = new VueRouter({
    linkActiveClass: 'active'
})

router.redirect({
    '/': '/people/1',
    '*': '/people/1'
})

router.map({
    '/people/:page': {
        name: 'people',
        component: PeopleRoute
    },
    '/person/:id': {
        name: 'person',
        component: PersonRoute
    }
})

router.start(Application, 'app')
