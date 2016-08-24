<template>
    <div class="table-responsive">
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th width="5%">lp</th>
                    <th width="30%">Imię i nazwisko</th>
                    <th width="15%">Nr dokumentu</th>
                    <th width="15%">Pesel</th>
                    <th width="15%">NIP</th>
                    <th width="15%">REGON</th>
                    <th width="5%">Płeć</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in people" v-link="{ name: 'person', params: { id: person._id } }">
                    <td>{{ $index + 1 }}</td>
                    <td>{{ person.first_name }} {{ person.last_name }}</td>
                    <td>{{ person.identity_document_number }}</td>
                    <td>{{ person.pesel }}</td>
                    <td>{{ person.nip }}</td>
                    <td>{{ person.regon }}</td>
                    <td>{{ (person.gender === 'male') ? 'M' : 'K' }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

    props: {
        people: {
            type: Array,
            required: true
        }
    }

}
</script>

<style lang="scss" scoped>
    tbody tr {
        cursor: pointer;
    }
</style>
