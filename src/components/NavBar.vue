<template>
    <div class="nav-bar" :id="nav_color">
        <NavButton
            ButtonType="nav-btn"
            IconClass="fa fa-clock-o"
            :IconState="timer_state"
            @click="NavTimer"
        ></NavButton>
        <NavButton
            ButtonType="nav-btn"
            IconClass="fa fa-map-o"
            :IconState="town_state"
            @click="NavTown"
        ></NavButton>
        <NavButton
            ButtonType="nav-btn"
            IconClass="fa fa-paint-brush"
            :IconState="edit_state"
            @click="NavInventory"
        ></NavButton>
        <NavButton
            ButtonType="nav-btn"
            IconClass="fa fa-gear"
            :IconState="settings_state"
            @click="NavSettings"
        ></NavButton>
        <NavButton
            ButtonType="nav-btn"
            IconClass="fa fa-info-circle"
            :IconState="info_state"
            @click="NavInfo"
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
    data: function () {
        return {
            timer_state: "nav-active",
            town_state: "none",
            edit_state: "none",
            settings_state: "none",
            info_state: "none",
            nav_color: "view-timer",
        };
    },
    methods: {
        NavTimer() {
            this.$emit("navigate", "ViewTimer");
            this.timer_state = "nav-active";
            this.town_state = "none";
            this.edit_state = "none";
            this.settings_state = "none";
            this.info_state = "none";
            this.nav_color = "view-timer";
        },
        NavTown() {
            this.$emit("navigate", "ViewTown");
            this.timer_state = "none";
            this.town_state = "nav-active";
            this.edit_state = "none";
            this.settings_state = "none";
            this.info_state = "none";
            this.nav_color = "view-town";
        },
        NavInventory() {
            this.$emit("navigate", "ViewInventory");
            this.timer_state = "none";
            this.town_state = "none";
            this.edit_state = "nav-active";
            this.settings_state = "none";
            this.info_state = "none";
            this.nav_color = "edit-town";
        },
        NavSettings() {
            this.$emit("navigate", "SetPreferences");
            this.timer_state = "none";
            this.town_state = "none";
            this.edit_state = "none";
            this.settings_state = "nav-active";
            this.info_state = "none";
            this.nav_color = "settings";
        },
        NavInfo() {
            this.$emit("navigate", "ViewInfo");
            this.timer_state = "none";
            this.town_state = "none";
            this.edit_state = "none";
            this.settings_state = "none";
            this.info_state = "nav-active";
            this.nav_color = "settings";
        },
    },
};
</script>


<style scoped>
.nav-bar {
    height: 2.5rem;
}

#view-timer {
    background-color: #b45a43;
}

#view-town {
    background-color: #dc9e00;
}

#edit-town {
    background-color: #0b3154;
}

#settings {
    background-color: #503c60;
}

#icon {
    height: 10px;
    width: 10px;
}
</style>