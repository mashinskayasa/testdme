<template>
  <div>
    <md-card>
      <md-card-media>
        <img @click="isShowModal = true" :src="user.picture.medium" alt="People" />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{user.name.last}} {{user.name.first}}</div>
      </md-card-header>

      <md-card-content>
        <md-list>
          <md-subheader>Phone</md-subheader>
          <md-list-item>
            <md-icon class="md-primary">phone</md-icon>
            <div class="md-list-item-text">{{user.cell}}</div>
          </md-list-item>
          <md-subheader>Email</md-subheader>
          <md-list-item>
            <md-icon class="md-primary">email</md-icon>
            <div class="md-list-item-text">{{user.email}}</div>
          </md-list-item>
        </md-list>
      </md-card-content>

      <md-card-content>
        <md-button class="md-primary" @click="goBack()">goBack</md-button>
      </md-card-content>
    </md-card>
    <md-dialog :md-active.sync="isShowModal">
      <md-card>
        <md-card-media-cover>
          <md-card-media md-ratio="1:1">
            <img :src="user.picture.large" />
          </md-card-media>
          <md-card-area>
            <md-card-actions>
              <md-button @click="isShowModal = false" class="md-icon-button md-primary">
                <md-icon>close</md-icon>
              </md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </md-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Detail",
  data: () => ({
    isShowModal: false
  }),
  //components: { Modal },
  computed: {
    ...mapGetters(["getUserById"]),
    user: function() {
      return this.getUserById(this.$route.params.id);
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    showModal() {
      this.isShowModal = true;
    },
    hideModal() {
      this.isShowModal = false;
    }
  }
};
</script>

<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
