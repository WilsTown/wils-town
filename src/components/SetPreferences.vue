<template>
    <div id="component-container">
        <div id="settings-container">
            <div id="top">
                <div id="title">Preferences</div>
                <!-- <img src="exit-button.png" id="exit" /> -->
            </div>
            <div id="line"></div>
            <div id="contents"  v-if="user_stats.buffer">
                <div class="item" id="active">
                    Consequences
                    <ToggleButton class="toggle-btn"></ToggleButton>
                </div>
                <div class="item" id="inactive">Coins Reduced</div>

                <div class="item">Set Default Timeblock</div>
                <div class="item" id="active">
                    Work
                    <TimeInput
                        id="input-box"
                        @update="workPeriodUpdate"
                        :SavedPeriod="user_stats.work_default"
                    ></TimeInput>
                </div>
                <div class="item" id="active">
                    Short Break
                    <TimeInput
                        id="input-box"
                        @update="shortPeriodUpdate"
                        :SavedPeriod="user_stats.short_default"
                    ></TimeInput>
                </div>
                <div class="item" id="active">
                    Long Break
                    <TimeInput
                        id="input-box"
                        @update="longPeriodUpdate"
                        :SavedPeriod="user_stats.long_default"
                    ></TimeInput>
                </div>
            </div>
            <PrefButton
                ButtonType="save-btn"
                ButtonText="SAVE"
                id="save"
                @click="savePreferences"
            ></PrefButton>
        </div>
    </div>
</template>

<script>
import PrefButton from "./Button";
import TimeInput from "./TimeInput";
import ToggleButton from "./ToggleButton";
export default {
    name: "SetPreferences",
    components: {
        PrefButton,
        TimeInput,
        ToggleButton,
    },

    data: function () {
        return {
            user_stats: {},
        };
    },
    methods: {
        workPeriodUpdate(new_period) {
            this.user_stats.work_default = new_period;
        },

        shortPeriodUpdate(new_period) {
            this.user_stats.short_default = new_period;
        },

        longPeriodUpdate(new_period) {
            this.user_stats.long_default = new_period;
        },
        savePreferences(){
            fetch('http://localhost:3000/user_stats/', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.user_stats)
                })
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error(`There was an error with status code ${res.status}`)
                    }
                    return res.json()
                })
                .catch(err => console.log(err.message));
        }
    },
    mounted() {
        fetch("http://localhost:3000/user_stats")
            .then((res) => res.json())
            .then((data) => {
                this.user_stats = data;
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
    margin: 0.5rem;
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
    font-size: 45px;
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
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    margin: 0.5rem;
    order: 3;
}

.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #00000000;
    border-radius: 10px;

    padding: 0.7rem;
    margin: 0.4rem;
    width: 400px;

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
    height: 1.5rem;
    background: #675376;
    color: #fcf4d5;
    border-radius: 5px;

    text-align: center;
    font-size: 15px;
}

#save {
    align-self: center;
    margin: 0.5rem;
    padding: 0.2rem;
    width: 10rem;
    height: 2.5rem;
    order: 5;
}

.toggle-btn {
    transform: scale(0.7);
}
</style>

