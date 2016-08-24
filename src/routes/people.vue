<template>
    <div>
        <h1>Lista osób</h1>

        <div class="row">

            <div class="col-md-12">
                <div class="panel panel-default">
                    <!-- Records filtering & display count -->
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-md-9">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Wyszukaj po dowolnym polu..."
                                    v-model="search.filter"
                                    @input="fetchPeople(true) | debounce 250"
                                />
                            </div>
                            <div class="col-md-3">
                                <select class="form-control" v-model="display.count" @change="fetchPeople(true)">
                                    <option value="15">Pokaż 15 rekordów</option>
                                    <option value="25">Pokaż 25 rekordów</option>
                                    <option value="50">Pokaż 50 rekordów</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- People listing table -->
                    <people-table :people="people"></people-table>

                    <div class="panel-footer">
                        <!-- Pages navigation -->
                        <people-pagination
                            :results-count="resultsCount"
                            :pages-count="pagesCount"
                            :previous-page="previousPage"
                            :next-page="nextPage"
                        ></people-pagination>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import PeopleTable from '../components/people-table'
import PeoplePagination from '../components/people-pagination'

export default {

    route: {
        data () {
            return this.fetchPeople(false)
        }
    },

    methods: {
        // Refetch people list from database
        fetchPeople(redirect = false) {
            // Redirect to page 1 if results count changed
            if (redirect && this.activePage !== 1) {
                this.$router.go({ name: 'people', params: { page: 1 } })
            }

            // Get total results count
            this.$database.people.count(
                this.searchCriteria,
                (e, data) => this.display.results = data
            )

            // Get refetched people list
            return this.$database.people.find(
                this.searchCriteria,
                this.displayCount,
                this.$route.params.page,
                (e, data) => this.people = data
            )
        }
    },

    computed: {
        // Per page items count`
        displayCount() {
            return parseInt(this.display.count)
        },

        // Total results count
        resultsCount() {
            return parseInt(this.display.results)
        },

        // Currently displayed page number
        activePage() {
            return parseInt(this.$route.params.page)
        },

        // Total pages count
        pagesCount() {
            return parseInt((this.resultsCount + this.displayCount - 1) / this.displayCount)
        },

        // Previous page number
        previousPage() {
            return (this.activePage - 1 >= 1) ? this.activePage - 1 : 0
        },

        // Next page number
        nextPage() {
            return (this.activePage + 1 <= this.pagesCount) ? this.activePage + 1 : 0
        },

        // Current search / filter criteria
        searchCriteria() {
            // Default criteria
            var criteria = {}

            if (this.search.filter) {
                var regex = new RegExp(this.search.filter, 'i')

                // Regex filtering criteria
                criteria.$or = [
                    { first_name: regex },
                    { last_name: regex },
                    { identity_document_number: regex },
                    { pesel: regex },
                    { nip: regex },
                    { regon: regex }
                ]
            }

            return criteria
        }
    },

    // Vue component data schema
    data() {
        return {
            people: [],
            display: {
                count: '25',
                results: 0
            },
            search: {
                filter: ''
            }
        }
    },

    // Required components registration
    components: {
        PeopleTable,
        PeoplePagination
    }

}
</script>

<style lang="scss" scoped>
    h1 {
        padding: 25px 0 25px;
    }

    @media screen and (max-width: 991px) {
        .panel-heading {
            input {
                margin-bottom: 10px;
            }
        }
    }
</style>
