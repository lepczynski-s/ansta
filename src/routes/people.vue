<template>
    <div>
        <h1>People list!</h1>

        <people-list :list="entities"></people-list>
    </div>
</template>

<script>
import PeopleList from '../components/people-list'

export default {

    ready() {
        this.fetchEntities()
    },

    methods: {
        fetchEntities() {
            this.$database.people.find({}, (e, data) => {
                this.entities = data
            })
        }
    },

    data() {
        return {
            entities: []
        }
    },

    components: {
        PeopleList
    }
}
</script>

<style>
</style>
