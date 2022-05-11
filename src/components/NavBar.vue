<template>
    <div class="nav-bar" id="view-timer">
        <NavButton
            ButtonType="nav-btn"
            IconClass="fa fa-clock-o fa-2x"
            IconState="nav-active"
            @click="NavTimer"
        ></NavButton>
        <NavButton
            ButtonType="nav-btn"
            IconClass="fa fa-map-o fa-2x"
            IconState="none"
            @click="NavTown"
        ></NavButton>
        <NavButton
            ButtonType="nav-btn"
            IconClass="fa fa-paint-brush fa-2x"
            IconState="none"
            @click="NavInventory"
        ></NavButton>
        <NavButton
            ButtonType="nav-btn"
            IconClass="fa fa-gear fa-2x"
            IconState="none"
            @click="NavSettings"
        ></NavButton>
    </div>
</template>

<script>
import NavButton from "./Button";
export default {
    name: "NavBar",
    components: {
        NavButton,
    },
    methods : {
        NavTimer() {
            this.$emit('navigate', "ViewTimer");
        },
        NavTown() {
            this.$emit('navigate', "ViewTown");
        },
        NavInventory() {
            this.$emit('navigate', "ViewInventory");
        },
        NavSettings() {
            this.$emit('navigate', "ViewSettings");
        }
    }
};
</script>


<style scoped>
.nav-bar {
    height: 40px;
}

#view-timer {
    background-color: #b45a43;
}

#view-town {
    background-color: #dc9e00;
}

#icon {
    height: 10px;
    width: 10px;
}
</style>