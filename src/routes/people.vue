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

                    <!-- People records table -->
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

                    <!-- Pages navigation -->
                    <div class="panel-footer">
                        <div class="row">
                            <div class="col-md-5 clearfix">
                                <p>Suma znalezionych rekorów: {{ resultsCount }}</p>
                            </div>
                            <div class="col-md-7 clearfix">
                                <nav aria-label="Przejdź do strony wyników">
                                    <ul class="pagination">
                                        <!-- Previous page navigation -->
                                        <li :class="{ disabled: !previousPage }">
                                            <a aria-label="Poprzednia strona" v-link="{ name: 'people', params: { page: previousPage } }">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>

                                        <!-- Page navigation buttons -->
                                        <li v-for="index in pagesCount" v-link-active><a v-link="{ name: 'people', params: { page: index + 1 } }">{{ index + 1 }}</a></li>

                                        <!-- Next page navigation -->
                                        <li :class="{ disabled: !nextPage }">
                                            <a aria-label="Następna strona" v-link="{ name: 'people', params: { page: nextPage } }">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
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
            return (this.activePage - 1 >= 1) ? this.activePage - 1 : null
        },

        // Next page number
        nextPage() {
            return (this.activePage + 1 <= this.pagesCount) ? this.activePage + 1 : null
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
    }

}
</script>

<style lang="scss" scoped>
    h1 {
        padding: 25px 0 25px;
    }

    // Table styles
    table.table {
        tbody tr {
            cursor: pointer;
        }
    }

    // Footer & pagination styles
    .panel-footer {
        p {
            float: left;
            margin: 0;
            padding-top: 8px;
        }

        ul.pagination {
            float: right;
            margin: 0;
        }
    }

    @media screen and (max-width: 991px) {
        .panel-heading {
            input {
                margin-bottom: 10px;
            }
        }

        .panel-footer {
            text-align: center;

            p {
                float: none;
            }
            ul.pagination {
                float: none;
            }
        }
    }
</style>
