<template>
    <div>
        <h1>{{ person.first_name }} {{ person.last_name }}</h1>

        <div class="row">

            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Dane osobowe
                    </div>
                    <div class="panel-body">
                        <div class="form-group">
                            <label for="first_name" class="control-label">Imię</label>
                            <input type="text" id="first_name" class="form-control" value="{{ person.first_name }}">
                        </div>
                        <div class="form-group">
                            <label for="middle_name" class="control-label">Drugie imię</label>
                            <input type="text" id="middle_name" class="form-control" value="{{ person.middle_name }}">
                        </div>
                        <div class="form-group">
                            <label for="last_name" class="control-label">Nazwisko</label>
                            <input type="text" id="last_name" class="form-control" value="{{ person.last_name }}">
                        </div>
                        <div class="form-group">
                            <label for="family_name" class="control-label">Nazwisko rodowe</label>
                            <input type="text" id="family_name" class="form-control" value="{{ person.family_name }}">
                        </div>
                        <div class="form-group">
                            <label for="gender" class="control-label">Płeć</label>
                            <select class="form-control" id="gender" v-model="person.gender">
                                <option value="male">Męska</option>
                                <option value="female">Żeńska</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="birth_date" class="control-label">Data urodzenia</label>
                            <input type="text" id="birth_date" class="form-control" value="{{ person.birth_date }}">
                        </div>
                        <div class="form-group">
                            <label for="birth_city" class="control-label">Miejsce urodzenia</label>
                            <input type="text" id="birth_city" class="form-control" value="{{ person.birth_city }}">
                        </div>
                        <div class="form-group">
                            <label for="father_name" class="control-label">Imię ojca</label>
                            <input type="text" id="father_name" class="form-control" value="{{ person.father_name }}">
                        </div>
                        <div class="form-group">
                            <label for="mather_name" class="control-label">Imię matki</label>
                            <input type="text" id="mather_name" class="form-control" value="{{ person.mather_name }}">
                        </div>
                        <div class="form-group">
                            <label for="education" class="control-label">Wykształcenie</label>
                            <select class="form-control" id="education" v-model="person.education">
                                <option value="primary">Podstawowe</option>
                                <option value="secondary">Średnie</option>
                                <option value="higher">Wyższe</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <div class="panel panel-default custom-margin">
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
            </div>

        </div>
    </div>
</template>

<script>
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
                (e, data) => this.person = data
            )
        }
    },

    data() {
        return {
            person: {}
        }
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
