// --------------------------------
// Custom in-memory database plugin
// --------------------------------

export default {

    install(Vue, options) {
        var database = new Database()

        Vue.database = database
        Vue.prototype.$database = database
    }

}

// --------------------------------
// Database repositories container
// --------------------------------

import Faker from 'faker'
import { randomize2, randomize3 } from './randomize-utils'
import PeopleRepository from '../repositories/people-repository'

class Database {

    constructor() {
        // Create required repositories
        this.people = new PeopleRepository()

        // Populate them with fake data
        populatePeople(this.people.store)
    }

}

function populatePeople(store) {
    Faker.locale = "pl"
    for (var i = 0; i < 100; i++) {
        store.insert({
            gender: randomize2('male', 'female'),
            first_name: Faker.name.firstName(),
            middle_name: Faker.name.firstName(),
            last_name: Faker.name.lastName(),
            family_name: Faker.name.lastName(),
            father_name: Faker.name.firstName(),
            mather_name: Faker.name.firstName(),
            birth_date: Faker.date.past().toISOString().slice(0, 10),
            birth_city: Faker.address.city(),
            education: randomize3('primary', 'secondary', 'higher'),
            citizenship: randomize3('polish', 'english', 'german'),
            nationality: randomize3('polish', 'english', 'german'),
            identity_document_type: randomize2('id', 'passport'),
            identity_document_number: Faker.random.number() + '',
            identity_document_approved_by: randomize2('Urząd Miasta w Gdańsku', 'Urząd Miasta w Krakowie'),
            address_street_name: Faker.address.streetName(),
            address_street_number: ('' + Faker.random.number())[0],
            address_appartment_number: ('' + Faker.random.number())[0],
            address_city: Faker.address.city(),
            address_zip_code: Faker.random.number() + '-' + Faker.random.number(),
            address_country: randomize3('poland', 'england', 'germany'),
            pesel: Faker.random.number() + '',
            nip: Faker.random.number() + '',
            regon: Faker.random.number() + '',
            phone_number: Faker.phone.phoneNumber(),
            email_address: Faker.internet.email()
        })
    }
}
