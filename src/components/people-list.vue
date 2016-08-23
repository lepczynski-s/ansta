<template>

    <ul>
        <li v-for="person in list">{{ person.first_name }}{{ person.last_name }}</li>
    </ul>

</template>

<script>
export default {

    props: {
        list: {
            type: Array,
            required: true
        }
    }

}
</script>

<style>
</style>
