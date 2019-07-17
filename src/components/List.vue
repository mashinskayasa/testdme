<template>
    <div>
        <md-table>
            <md-table-row>
                <md-table-head>Фото</md-table-head>
                <md-table-head>
                    <span @click="sortBy('lastName')">ФИО</span>
                    <input @keyup.enter="search('lastName')" v-model='searchName' type="text"/>
                </md-table-head>
                <md-table-head>
                    <span @click="sortBy('dob')">Дата рождения</span>
                    <input @keyup.enter="search('dob')" v-model='searchDob' type="text"/>
                </md-table-head>
                <md-table-head></md-table-head>
            </md-table-row>
            <md-table-row class="telpost" v-for="user in getUsers" :key="user.login.uuid">
                <md-table-cell>
                    <img :src="user.picture.thumbnail"/>
                </md-table-cell>
                <md-table-cell>{{user.name.last}} {{user.name.first}}</md-table-cell>
                <md-table-cell>{{user.dob.date | formatDate}}</md-table-cell>
                <md-table-cell>
                    <router-link :to="{ name: 'users', params: { id: user.login.uuid }}">user</router-link>
                </md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from "vuex";

    export default {
        name: "List",
        data() {
            return {
                searchName: null,
                searchDob: null
            }
        },
        computed: mapGetters(["getUsers"]),
        methods: {
            ...mapActions(["fetchUsers"]),
            ...mapMutations(['sortUsersByLastName', 'sortUsersByDob', 'filterUsersByLastName', 'filterUsersByDob']),
            sortBy(key) {
                if (key === 'lastName') {
                    this.sortUsersByLastName()
                } else if (key === 'dob') {
                    this.sortUsersByDob()
                }
            },
            search(key) {
                if (key === 'lastName') {
                    this.filterUsersByLastName(this.searchName)
                } else if (key === 'dob') {
                    this.filterUsersByDob(this.searchDob)
                }
            }
        },
        async mounted() {
            this.fetchUsers(20);
        }
    }
</script>

<style scoped>

</style>
