<template>
    <div id="app">
        <!--<router-view/>-->
        <home/>
    </div>
</template>

<script>

    import Home from "./components/home";

    export default {
        name: 'app',
        components: {Home},
    }
</script>

<style>

</style>
