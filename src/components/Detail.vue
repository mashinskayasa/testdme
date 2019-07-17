<template>
    <div>
        <md-card>
            <md-card-media>
                <img :src="user.picture.medium" alt="People">
            </md-card-media>

            <md-card-header>
                <div class="md-title">{{user.name.last}} {{user.name.first}}</div>
            </md-card-header>


            <md-card-content>
                {{user.email}}
                {{user.cell}}
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Detail",
        computed: {
            ...mapGetters(['getUserById']),
            user: function () {
                return this.getUserById(this.$route.params.id)
            }
        }
    }
</script>

<style scoped>
    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
</style>
