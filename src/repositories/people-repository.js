// --------------------------------
// In-memory people repository
// --------------------------------

import Datastore from 'nedb'

export default class PeopleRepository {

    constructor() {
        this.store = new Datastore()
    }

    count(filtering, callback) {
        this.store.count(filtering)
        .exec(callback)
    }

    obtain(id, callback) {
        this.store.findOne({_id: id})
        .exec(callback)
    }

    find(filtering, items, page, callback) {
        this.store.find(filtering)
        .sort({last_name: 1, first_name: 1})
        .skip(items * (page - 1))
        .limit(items)
        .exec(callback)
    }

}
