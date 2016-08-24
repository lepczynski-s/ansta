<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            Numery indentyfikacyjne
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="pesel" class="control-label">PESEL</label>
                        <input type="text" id="pesel" class="form-control" value="{{ person.pesel }}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="nip" class="control-label">NIP</label>
                        <input type="text" id="nip" class="form-control" value="{{ person.nip }}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="regon" class="control-label">REGON</label>
                        <input type="text" id="regon" class="form-control" value="{{ person.regon }}">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        person: {
            type: Object,
            required: true
        }
    }

}
</script>

<style>
</style>
