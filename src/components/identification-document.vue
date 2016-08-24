<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            Dokument tożsamości
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="identity_document_type" class="control-label">Rodzaj</label>
                        <select class="form-control" id="identity_document_type" v-model="person.identity_document_type">
                            <option value="id">Dowód osobisty</option>
                            <option value="passport">Paszport</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="identity_document_number" class="control-label">Numer</label>
                        <input type="text" id="identity_document_number" class="form-control" value="{{ person.identity_document_number }}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="identity_document_approved_by" class="control-label">Wydany przez</label>
                        <input type="text" id="identity_document_approved_by" class="form-control" value="{{ person.identity_document_approved_by }}">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="nationality" class="control-label">Narodowość</label>
                        <select class="form-control" id="nationality" v-model="person.nationality">
                            <option value="polish">Polska</option>
                            <option value="english">Angielska</option>
                            <option value="german">Niemiecka</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="citizenship" class="control-label">Obywatelstwo</label>
                        <select class="form-control" id="citizenship" v-model="person.citizenship">
                            <option value="polish">Polskie</option>
                            <option value="english">Angielskie</option>
                            <option value="german">Niemieckie</option>
                        </select>
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
