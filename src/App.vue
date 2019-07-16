<template>
  <div id="app">
    <table id="telpost" width="100%">
      <thead>
        <tr>
          <th>Фото</th>
          <th @click="sortBy('name.first')">ФИО</th>
          <th @click="sortBy('dob.date')">Дата рождения</th>
        </tr>
      </thead>
      <tr class="telpost" v-for="user in sortedUsers" :key="user.login.uuid">
        <td>
          <img :src="user.picture.thumbnail" />
        </td>
        <td>{{user.name.last}} {{user.name.first}}</td>
        <td>{{user.dob.date}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  computed: mapGetters(["sortedUsers", "filteredUsers"]),
  methods: {
    ...mapActions(["fetchUsers"]),
    sortBy(key) {
      
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
