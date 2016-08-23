/* VUE APPLICATION IMPORTS */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Database from './plugins/database'
import Application from './application'

/* CONFIGURE VUE PLUGINS */
Vue.use(VueRouter)
Vue.use(Database)

/* CONFIGURE & RUN ROUTED APPLICATION */
var router = new VueRouter()

import PeopleRoute from './routes/people'
import PersonRoute from './routes/person'

router.redirect({
    '/': '/people',
    '*': '/people'
})

router.map({
    '/people': {
        name: 'people',
        component: PeopleRoute
    },
    '/person/:id': {
        name: 'person',
        component: PersonRoute
    }
})

router.start(Application, 'app')
