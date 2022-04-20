<template>
    <div id="timer-container">
        <div id="timer-component">
            <!-- <TimerSession> -->
            <div id="top-buttons">
                <!-- SESSION SELECTION BUTTONS -->
                <TimerButton
                    ButtonType="sesh-btn"
                    ButtonText="Work"
                    :ButtonState="work_state"
                ></TimerButton>
                <TimerButton
                    ButtonType="sesh-btn"
                    ButtonText="Short Break"
                    :ButtonState="short_break_state"
                ></TimerButton>
                <TimerButton
                    ButtonType="sesh-btn"
                    ButtonText="Long Break"
                    :ButtonState="long_break_state"
                ></TimerButton>
            </div>
            <!-- MAIN TIMER -->
            <Time :TimeRaw="time_count"></Time>
            <!-- ADDITIONAL SESSION SETTINGS -->
            <div id="line"></div>
            <div id="timer-settings">
                <span id="timer-settings">Timer</span>
                <ToggleButton></ToggleButton>
                <span id="timer-settings">Stopwatch</span>
            </div>
            <div>
                <form>
                    <label id="timeblocks">Timeblocks</label>
                    <input type="number" id="timeblock-input" />
                </form>
            </div>
            <StartButton
                ButtonType="start-btn"
                ButtonText="START"
                ButtonState="none"
            ></StartButton>
        </div>
    </div>
</template>

<script>
//import Work from "./Work-tab";
//import ShortBreak from "./Shortbreak-tab";
//import LongBreak from "./Longbreak-tab";
import StartButton from "./Button";
import TimerButton from "./Button";
import ToggleButton from "./ToggleButton";
import Time from "./Time";
export default {
    name: "ViewTimer",
    data: function () {
        return {
            tabs: ["Work", "ShortBreak", "LongBreak"],
            selected: "Work",

            // TIMER VARIABLES
            time_count: 5,
            work_period: 5,
            short_break_period: 5,
            long_break_period: 5,
            work_state: "sesh-active",
            short_break_state: "none",
            long_break_state: "none",
            curr_block: 1,
            total_time: 0,
        };
    },
    components: {
        //Work,
        //ShortBreak,
        //LongBreak,
        StartButton,
        TimerButton,
        ToggleButton,
        Time,
    },
    watch: {
        time_count: {
            handler(val) {
                if (val > 0) {
                    setTimeout(() => {
                        this.time_count--;
                        console.log(
                            "Total Time Elapsed : " + this.total_time++
                        );
                    }, 1000);
                    //sesh-change
                } else if (val == 0) {
                    this.curr_block++;
                    if (this.curr_block % 6 == 0) {
                        this.work_state = "none";
                        this.short_break_state = "none";
                        this.long_break_state = "sesh-active";
                        this.time_count = this.long_break_period;
                    } else if (this.curr_block % 2 == 0) {
                        this.work_state = "none";
                        this.short_break_state = "sesh-active";
                        this.long_break_state = "none";
                        this.time_count = this.short_break_period;
                    } else {
                        this.work_state = "sesh-active";
                        this.short_break_state = "none";
                        this.long_break_state = "none";
                        this.time_count = this.work_period;
                    }
                }
            },
            immediate: true,
        },
    },
};
</script>

<style scoped>
#timer-container {
    position: absolute;
    top: 40px;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: #e76f51;
}

#timer-component {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 5%;
    bottom: 20%;

    background: #af4b32;
    border-radius: 25px;

    color: #fcf4d5;
    font-size: 20px;
    font-weight: bold;
}

#top-buttons {
    position: inline;
}


#time {
    font-size: 170px;
    font-style: Roboto;
    font-weight: normal;
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

#line {
    width: 400px;
    height: 3px;
    background: #6b4e47;
    border-radius: 2px;
    margin: auto;
    margin-block: 0.2rem;
}
</style>