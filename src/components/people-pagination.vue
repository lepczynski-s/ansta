<template>
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
</template>

<script>
export default {

    props: {
        resultsCount: {
            type: Number,
            required: true
        },

        pagesCount: {
            type: Number,
            required: true
        },

        previousPage: {
            type: Number,
            required: true
        },

        nextPage: {
            type: Number,
            required: true
        }
    }

}
</script>

<style lang="scss" scoped>
    p {
        float: left;
        margin: 0;
        padding-top: 8px;
    }

    ul.pagination {
        float: right;
        margin: 0;
    }

    @media screen and (max-width: 991px) {
        .row {
            text-align: center;
        }

        p {
            float: none;
        }
        ul.pagination {
            float: none;
        }
    }
</style>
