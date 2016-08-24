<template>
    <div>
        <h1>{{ person.first_name }} {{ person.last_name }}</h1>

        <div class="row">

            <div class="col-md-4">
                <personal-information :person.sync="person"></personal-information>
            </div>

            <div class="col-md-8">
                <identification-numbers :person.sync="person" class="custom-margin"></identification-numbers>
                <identification-document :person.sync="person"></identification-document>
                <person-address :person.sync="person"></person-address>
                <contact-information :person.sync="person"></contact-information>
            </div>

        </div>
    </div>
</template>

<script>
import PersonalInformation from '../components/personal-information'
import IdentificationNumbers from '../components/identification-numbers'
import IdentificationDocument from '../components/identification-document'
import PersonAddress from '../components/person-address'
import ContactInformation from '../components/contact-information'

export default {

    route: {
        data() {
            this.fetchPerson()
        }
    },

    methods: {
        fetchPerson() {
            this.$database.people.obtain(
                this.$route.params.id,
                (e, data) => {
                    if (!data) {
                        this.$router.go({ name: 'people', params: { page: 1 } })
                    }
                    else {
                        this.person = data
                    }
                }
            )
        }
    },

    data() {
        return {
            person: {}
        }
    },

    // Required components registration
    components: {
        PersonalInformation,
        IdentificationNumbers,
        IdentificationDocument,
        PersonAddress,
        ContactInformation
    }

}
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 992px) {
        .custom-margin {
            margin-bottom: 36px;
        }
    }

    h1 {
        padding: 25px 0 25px 0;
    }
</style>
