<template>
    <div id="component-container">
        <div id="settings-container">
            <div id="top">
                <div id="title">Preferences</div>
                <!-- <img src="exit-button.png" id="exit" /> -->
            </div>
            <div id="line"></div>
            <div id="contents">
                <div class="item" id="inactive">
                    Consequences <i>(coming soon!)</i>
                </div>
                <div class="item" id="inactive">Coins Reduced</div>

                <div class="item">Set Default Timeblock</div>
                <div class="item" id="active">
                    Work
                    <TimeInput
                        id="input-box"
                        @update="workPeriodUpdate"
                        :SavedPeriod="work_period"
                    ></TimeInput>
                </div>
                <div class="item" id="active">
                    Short Break
                    <TimeInput
                        id="input-box"
                        @update="shortPeriodUpdate"
                        :SavedPeriod="short_break_period"
                    ></TimeInput>
                </div>
                <div class="item" id="active">
                    Long Break
                    <TimeInput
                        id="input-box"
                        @update="longPeriodUpdate"
                        :SavedPeriod="long_break_period"
                    ></TimeInput>
                </div>
            </div>
            <PrefButton
                ButtonType="save-btn"
                ButtonText="SAVE"
                id="save"
            ></PrefButton>
        </div>
    </div>
</template>

<script>
import PrefButton from "./Button";
import TimeInput from "./TimeInput";
export default {
    name: "SetPreferences",
    components: {
        PrefButton,
        TimeInput,
    },

    data: function () {
        return {
            work_period: 5,
            long_break_period: 5,
            short_break_period: 5,
        };
    },
    methods: {
        workPeriodUpdate(new_period) {
            this.work_period = new_period;
        },

        shortPeriodUpdate(new_period) {
            this.short_break_period = new_period;
        },

        longPeriodUpdate(new_period) {
            this.long_break_period = new_period;
        },
    },
    mounted() {
        fetch("http://localhost:3000/user_stats")
            .then((res) => res.json())
            .then((data) => {
                this.work_period = data.work_default;
                this.short_break_period = data.short_default;
                this.long_break_period = data.long_default;
            })
            .catch((err) => console.log(err.message));
    },
};
</script>

<style scoped>
#component-container {
    position: absolute;
    top: 40px;
    bottom: 0%;
    left: 0%;
    right: 0%;

    display: flex;
    align-content: center;
    justify-content: center;

    background: #866d99;
}

#settings-container {
    position: absolute;
    margin: 1rem;
    height: 540px;
    width: 450px;

    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    border-radius: 15px;
    background: #614b72;
    color: #fff9e4;
}

#top {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

#title {
    margin-inline: 1rem;
    margin-block: 0.5rem;
    font-size: 60px;
    font-weight: bold;
    order: 1;
}

#exit {
    height: 30px;
    order: 2;
    margin: 0.5rem;
}

#line {
    width: 420px;
    height: 2px;
    background: #fff9e4;
    border-radius: 2px;
    margin: auto;
    margin-block: 0.1rem;
    order: 2;
}

#contents {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: flex-start;
    margin: 1rem;
    order: 3;
}

.item {
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    background: #00000000;
    border-radius: 10px;

    padding: 0.7rem;
    margin: 0.4rem;
    width: 380px;

    color: #fcf4d5;
    font-weight: bold;
    font-size: 20px;
}

#active {
    background: #503c60;
}

#inactive {
    background: #675376;
    color: #9588a0;
}
#input-box {
    border: none;
    width: 5rem;
    background: #675376;
    color: #fcf4d5;
    border-radius: 5px;
}

#save {
    align-self: center;
    margin: 0.5rem;
    padding: 0.2rem;
    width: 10rem;
    height: 2.5rem;
    order: 5;
}
</style>

