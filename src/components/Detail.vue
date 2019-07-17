<template>
    <p>{{user.name.last}}</p>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Detail",
        computed: {
            ...mapGetters(['getUserById']),
            user: () => {
                return this.getUserById(this.$route.params.id);
            }
        }
    }
</script>

<style scoped>

</style>
