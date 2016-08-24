<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            Adres zamieszkania
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="address_street_name" class="control-label">Ulica</label>
                        <input type="text" id="address_street_name" class="form-control" value="{{ person.address_street_name }}">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="address_street_number" class="control-label">Nr domu</label>
                        <input type="text" id="address_street_number" class="form-control" value="{{ person.address_street_number }}">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label for="address_appartment_number" class="control-label">Nr mieszkania</label>
                        <input type="text" id="address_appartment_number" class="form-control" value="{{ person.address_appartment_number }}">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="address_zip_code" class="control-label">Kod pocztowy</label>
                        <input type="text" id="address_zip_code" class="form-control" value="{{ person.address_zip_code }}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="address_city" class="control-label">Miasto</label>
                        <input type="text" id="address_city" class="form-control" value="{{ person.address_city }}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="address_country" class="control-label">Kraj</label>
                        <select class="form-control" id="address_country" v-model="person.address_country">
                            <option value="poland">Polska</option>
                            <option value="england">Anglia</option>
                            <option value="germany">Niemcy</option>
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
