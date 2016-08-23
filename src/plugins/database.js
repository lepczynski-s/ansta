// Faked database populated using faker.js

import Faker from 'faker'
import Datastore from 'nedb'

export default {

    install(Vue, options) {
        var database = new Database()

        Vue.database = database
        Vue.prototype.$database = database
    }

}

class Database {

    constructor() {
        // Create required fake tables
        this.people = new Datastore()

        // And populate them with fake data
        this.populatePeopleTable()
    }

    populatePeopleTable() {
        for (var i = 0; i < 50; i++) {
            this.people.insert({
                first_name: Faker.name.firstName(),
                middle_name: Faker.name.firstName(),
                last_name: Faker.name.lastName(),
                family_name: Faker.name.lastName(),
                email_address: Faker.internet.email()
            })
        }
    }

}
