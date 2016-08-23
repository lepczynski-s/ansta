/* VUE APPLICATION IMPORTS */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Application from './application'

/* CONFIGURE VUE PLUGINS */
Vue.use(VueRouter)

/* CONFIGURE & RUN ROUTED APPLICATION */
var router = new VueRouter()

import PeopleListRoute from './routes/people-list'
import PersonDetailsRoute from './routes/person-details'

router.redirect({
    '/': '/people',
    '*': '/people'
})

router.map({
    '/people': {
        name: 'homepage',
        component: PeopleListRoute
    },
    '/person/:id': {
        name: 'person-details',
        component: PersonDetailsRoute
    }
})

router.start(Application, 'app')
