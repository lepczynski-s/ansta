<template>
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">

                <div class="navbar-header">

                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <a class="navbar-brand" v-link="{ path: '/' }">Example</a>

                </div>

                <div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;">

                    <ul class="nav navbar-nav">
                        <li><a v-link="{ name: 'people', params: { page: '1' } }">Lista osób</a></li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                    </ul>

                </div>
                <!--/.nav-collapse -->
            </div>
            <!--/.container-fluid -->
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    ready() {
        // TODO: Remove it
        window.app = this
    }
}
</script>

<style lang="scss">
    $icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/";
    @import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';

    // Fix inconvenient scroll bahviour
    html {
        overflow-y: scroll;
    }

    // Basic application-wide styles
    body {
        padding: 20px 0 20px 0;
    }
</style>
