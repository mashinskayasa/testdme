<template>
    <div id="app">
        <table id="telpost" width="100%">
            <thead>
            <tr>
                <th>Фото</th>
                <th>
                    <span @click="sortBy('lastName')">ФИО</span>
                    <input @keyup.enter="search('lastName')" v-model='searchName' type="text"/>
                </th>
                <th>
                    <span @click="sortBy('dob')">Дата рождения</span>
                    <input @keyup.enter="search('dob')" v-model='searchDob' type="text"/>
                </th>
            </tr>
            </thead>
            <tr class="telpost" v-for="user in getUsers" :key="user.login.uuid">
                <td>
                    <img :src="user.picture.thumbnail"/>
                </td>
                <td>{{user.name.last}} {{user.name.first}}</td>
                <td>{{user.dob.date | formatDate}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from "vuex";

    export default {
        name: "app",
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
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 60px auto;
        width: 400px;
    }

    .telpost {
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
</style>
