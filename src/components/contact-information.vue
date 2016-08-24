<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            Dane kontaktowe
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="phone_number" class="control-label">Numer telefonu</label>
                        <input type="text" id="phone_number" class="form-control" value="{{ person.phone_number }}">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="email_address" class="control-label">Adres e-mail</label>
                        <input type="text" id="email_address" class="form-control" value="{{ person.email_address }}">
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
