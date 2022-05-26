<template>
    <div>
        <!-- <SetPreferences v-if="settings == 'SetPreferences'"></SetPreferences> -->
        <NavBar @navigate="navView"></NavBar>

        <ViewTimer
            v-if="curr_view == 'ViewTimer'"
        ></ViewTimer>
        <ViewTown v-else-if="curr_view == 'ViewTown'"></ViewTown>
        <ViewInventory v-else-if="curr_view == 'ViewInventory'"></ViewInventory>
        <SetPreferences
            v-else-if="curr_view == 'SetPreferences'"
        ></SetPreferences>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ViewTimer from "./components/ViewTimer.vue";
import ViewInventory from "./components/ViewInventory.vue";
import ViewTown from "./components/ViewTown.vue";
import SetPreferences from "./components/SetPreferences.vue";

export default {
    name: "App",
    components: {
        NavBar,
        ViewTimer,
        ViewTown,
        ViewInventory,
        SetPreferences,
    },
    data: function () {
        return {
            curr_view: "ViewTimer",
        };
    },
    methods: {
        navView(selected_view) {
            this.curr_view = selected_view;
        },
    },
};
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
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
