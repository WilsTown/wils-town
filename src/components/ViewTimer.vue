<template>
    <div id="timer-container">
        <div id="timer-sesh-container">
            <div class="timer-component" :id="timer_bg">
                <!-- SESSION SELECTION BUTTONS -->

                <div id="top-buttons">
                    <TimerButton
                        ButtonType="sesh-btn"
                        ButtonText="Work"
                        :ButtonState="work_state"
                        @click="showWork"
                    ></TimerButton>
                    <TimerButton
                        ButtonType="sesh-btn"
                        ButtonText="Short Break"
                        :ButtonState="short_break_state"
                        @click="showShort"
                    ></TimerButton>
                    <TimerButton
                        ButtonType="sesh-btn"
                        ButtonText="Long Break"
                        :ButtonState="long_break_state"
                        @click="showLong"
                    ></TimerButton>
                </div>

                <!-- MAIN TIMER -->
                <transition name="component-fade" mode="out-in">
                    <Time v-if="time_runs" :TimeRaw="time_count"></Time>
                    <TimeInput
                        v-else-if="
                            work_state == 'work-sesh-active' &&
                            user_stats.work_default
                        "
                        @update="periodUpdate"
                        :SavedPeriod="work_period"
                    ></TimeInput>
                    <TimeInput
                        v-else-if="
                            short_break_state == 'sbreak-sesh-active' &&
                            user_stats.short_default
                        "
                        @update="periodUpdate"
                        :SavedPeriod="short_break_period"
                    ></TimeInput>
                    <TimeInput
                        v-else-if="
                            long_break_state == 'lbreak-sesh-active' &&
                            user_stats.long_default
                        "
                        @update="periodUpdate"
                        :SavedPeriod="long_break_period"
                    ></TimeInput>
                </transition>
                <!-- ADDITIONAL SESSION SETTINGS -->
                <div class="line" :id="line_bg"></div>
                <div v-if="time_runs == false">
                    <div id="timer-settings">
                        <span id="timer-settings">Timer</span>
                        <ToggleButton
                            @toggleMode="toggleMode"
                            :toggleDisable="time_runs"
                        ></ToggleButton>
                        <span id="timer-settings">Stopwatch</span>
                    </div>
                    <div>
                        <form>
                            <label id="timeblocks">Timeblocks</label>
                            <input
                                type="number"
                                id="timeblock-input"
                                v-model="timer_blocks"
                            />
                        </form>
                    </div>
                </div>
                <div
                    v-else-if="time_runs && work_state == 'work-sesh-active'"
                    class="encouragements"
                >
                    time to focus!
                </div>
                <div
                    v-else-if="
                        time_runs && short_break_state == 'sbreak-sesh-active'
                    "
                    class="encouragements"
                >
                    time to rest for a bit
                </div>
                <div
                    v-else-if="
                        time_runs && long_break_state == 'lbreak-sesh-active'
                    "
                    class="encouragements"
                >
                    finally! sit back and relax
                </div>
            </div>

            <!-- START BUTTON -->
            <StartButton
                ButtonType="start-btn"
                :ButtonText="start_stop"
                ButtonState="none"
                @click="toggleTime"
            ></StartButton>
        </div>
    </div>
</template>

<script>
import StartButton from "./Button";
import TimerButton from "./Button";
import ToggleButton from "./ToggleButton";
import Time from "./Time";
import TimeInput from "./TimeInput";
export default {
    name: "ViewTimer",
    data: function () {
        return {
            tabs: ["Work", "ShortBreak", "LongBreak"],
            selected: "Work",

            // TIMER VARIABLES
            user_stats: {},

            time_obj: undefined,
            time_count: 0,
            work_period: 5,
            short_break_period: 5,
            long_break_period: 5,

            work_state: "work-sesh-active",
            short_break_state: "none",
            long_break_state: "none",

            timer_bg: "work-bg",
            line_bg: "work-line",

            curr_block: 1,
            total_time: 0,
            start_stop: "START",
            time_runs: false,
            timer_blocks: 1,
            mode: "stopwatch",
            coins: 0,
        };
    },
    components: {
        StartButton,
        TimerButton,
        ToggleButton,
        Time,
        TimeInput,
    },
    watch: {
        time_count: {
            handler(val) {
                //sesh-change
                if (val == 0) {
                    this.curr_block++;
                    if (this.curr_block % 6 == 0) {
                        this.work_state = "none";
                        this.short_break_state = "none";
                        this.long_break_state = "lbreak-sesh-active";

                        this.time_count = this.long_break_period;
                    } else if (this.curr_block % 2 == 0) {
                        this.work_state = "none";
                        this.short_break_state = "sbreak-sesh-active";
                        this.long_break_state = "none";

                        this.time_count = this.short_break_period;
                    } else {
                        this.work_state = "work-sesh-active";
                        this.short_break_state = "none";
                        this.long_break_state = "none";

                        this.time_count = this.work_period;
                    }
                }
            },
        },
        timer_blocks: {
            handler(val) {
                if (val < 1) {
                    this.timer_blocks = 1;
                }
            },
        },
        curr_block: {
            handler(val) {
                if (
                    this.mode == "timer" &&
                    Math.floor((val - 1) / 6) == this.timer_blocks
                ) {
                    this.toggleTime();
                }
            },
        },
    },
    methods: {
        toggleTime() {
            if (this.time_runs == false) {
                this.timer_bg = "work-bg";
                this.line_bg = "work-line";

                this.work_state = "work-sesh-active";
                this.short_break_state = "none";
                this.long_break_state = "none";
                this.time_count = this.work_period;
                // console.log("SESSION STARTED\nMode : " + this.mode);
                this.time_obj = setInterval(() => {
                    this.time_count--;
                    this.total_time++;
                    // console.log(this.total_time);
                }, 1000);
                this.start_stop = "STOP";
                this.time_runs = true;
            } else {
                var coins_earned = 0;
                if (this.mode == "stopwatch") {
                    coins_earned = Math.floor(this.total_time / 5);
                } else if (this.mode == "timer") {
                    this.timer_blocks > Math.floor((this.curr_block - 1) / 6)
                        ? (coins_earned = Math.floor(this.total_time / (5 * 2)))
                        : (coins_earned = (this.total_time * 2) / 5);
                }
                this.coins = this.coins + coins_earned;
                this.overall_time = this.overall_time + this.total_time;

                fetch("http://localhost:3000/user_stats/", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        coins: this.coins,
                        work_default: this.user_stats.work_default,
                        short_default: this.user_stats.short_default,
                        long_default: this.user_stats.long_default,
                    }),
                })
                    .then((res) => {
                        if (res.status !== 200) {
                            throw new Error(
                                `There was an error with status code ${res.status}`
                            );
                        }
                        return res.json();
                    })
                    .catch((err) => console.log(err.message));

                this.time_count = this.work_period;
                clearInterval(this.time_obj);
                this.start_stop = "START";
                this.time_runs = false;
                // console.log(
                //     "SESSION STOPPED\nMode : " +
                //         this.mode +
                //         "\nTotal Elapsed Time : " +
                //         this.total_time +
                //         "\nTotal Time Blocks : " +
                //         Math.floor((this.curr_block - 1) / 6) +
                //         "\nCoins Earned : " +
                //         coins_earned +
                //         "\nTotal Coins : " +
                //         (this.Coins + coins_earned)
                // );
                alert(
                    "SESSION DONE!\nMode: " +
                        this.mode +
                        "\nTotal Elapsed Time : " +
                        this.total_time +
                        "\nTotal Time Blocks : " +
                        Math.floor((this.curr_block - 1) / 6) +
                        "\nCoins Earned : " +
                        coins_earned +
                        "\nTotal Coins : " +
                        this.coins
                );
                this.total_time = 0;
                this.curr_block = 1;
            }
        },
        periodUpdate(new_period) {
            if (this.work_state == "work-sesh-active") {
                this.work_period = new_period;
                this.timer_bg = "work-bg";
                this.line_bg = "work-line";
            } else if (this.short_break_state == "sbreak-sesh-active") {
                this.short_break_period = new_period;
                this.timer_bg = "sbreak-bg";
                this.line_bg = "sbreak-line";
            } else if (this.long_break_state == "lbreak-sesh-active") {
                this.long_break_period = new_period;
                this.timer_bg = "lbreak-bg";
                this.line_bg = "lbreak-line";
            }
        },
        showWork() {
            if (this.time_runs == false) {
                this.timer_bg = "work-bg";
                this.line_bg = "work-line";

                this.work_state = "work-sesh-active";
                this.short_break_state = "none";
                this.long_break_state = "none";
            }
        },
        showShort() {
            if (this.time_runs == false) {
                this.timer_bg = "sbreak-bg";
                this.line_bg = "sbreak-line";

                this.work_state = "none";
                this.short_break_state = "sbreak-sesh-active";
                this.long_break_state = "none";
            }
        },
        showLong() {
            if (this.time_runs == false) {
                this.timer_bg = "lbreak-bg";
                this.line_bg = "lbreak-line";

                this.work_state = "none";
                this.short_break_state = "none";
                this.long_break_state = "lbreak-sesh-active";
            }
        },
        toggleMode(modeBool) {
            if (this.time_runs == false) {
                if (modeBool) {
                    this.mode = "stopwatch";
                } else {
                    this.mode = "timer";
                }
                // console.log("Current mode : " + this.mode);
            }
        },
    },
    mounted() {
        fetch("http://localhost:3000/user_stats")
            .then((res) => res.json())
            .then((data) => {
                this.user_stats = data;
                this.coins = data.coins;
                this.work_period = data.work_default;
                this.short_break_period = data.short_default;
                this.long_break_period = data.long_default;
            })
            .catch((err) => console.log(err.message));
        // console.log("Current mode : " + this.mode);
    },
};
</script>

<style scoped>
#timer-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    top: 40px;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: #e76f51;
}

#timer-sesh-container {
    color: #fcf4d5;
    font-size: 20px;
    font-weight: bold;
}

.timer-component {
    position: -ms-page;
    background: #af4b32;
    border-radius: 4vh;
    margin-block: 4vh;
    /* margin-inline: 330px; */
    padding-block: 25px;

    width: 50vw;
    height: 60vh;
}

#work-bg {
    background: #af4b32;
}

#sbreak-bg {
    background: #f38569;
}

#lbreak-bg {
    background: #feaa94;
}

#work-line {
    background: #6b4e47;
}

#sbreak-line {
    background: #d65535;
}

#lbreak-line {
    background: #f38569;
}

#top-buttons {
    position: inline;
}

#time {
    font-size: 200px;
    font-style: Helvetica;
    font-weight: normal;
    padding: 0px;
}

#timer-settings {
    padding-inline: 4rem;
    padding-block: 0.5rem;
}

#timeblocks {
    padding-inline: 1rem;
}

#timeblock-input {
    width: 30px;
    height: 30px;
    background: #fcf4d5;
    border: none;
    border-radius: 5px;
}

.line {
    width: 400px;
    height: 3px;
    background: #6b4e47;
    border-radius: 2px;
    margin: auto;
    margin-block: 0.2rem;
}

.encouragements {
    font-style: italic;
    font-weight: normal;
    font-size: 30px;
    margin-block: 2rem;
}

.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity 0.5s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>