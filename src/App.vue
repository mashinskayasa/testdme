<template>
    <div class="page-container" id="app">
        <md-app>
            <md-app-toolbar class="md-primary">
                <span class="md-title">Users list</span>
            </md-app-toolbar>
            <md-app-content>
                <router-view/>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    export default {
        name: "app",
    };
</script>

<style>

</style>
