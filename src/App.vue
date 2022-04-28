<template>
    <div>
        <NavBar></NavBar>
        <ViewTimer></ViewTimer>
        <!-- <ViewTown></ViewTown> -->
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ViewTimer from "./components/ViewTimer.vue";
// import ViewTown from "./components/ViewTown.vue";

export default {
    name: "App",
    components: {
        NavBar,
        ViewTimer,
        // ViewTown,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
}
</style>
