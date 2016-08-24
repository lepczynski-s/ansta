<template>
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
                    <option value="male">Mężczyzna</option>
                    <option value="female">Kobieta</option>
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
