<template>
    <div id="timer-container">
        <div id="timer-component">
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
            <Time v-if="time_runs" :TimeRaw="time_count"></Time>
            <TimeInput v-else-if="work_state == 'sesh-active'" @update="periodUpdate" :SavedPeriod="work_period"></TimeInput>
            <TimeInput v-else-if="short_break_state == 'sesh-active'" @update="periodUpdate" :SavedPeriod="short_break_period"></TimeInput>
            <TimeInput v-else-if="long_break_state == 'sesh-active'" @update="periodUpdate" :SavedPeriod="long_break_period"></TimeInput>

            <!-- ADDITIONAL SESSION SETTINGS -->
            <div id="line"></div>
            <div id="timer-settings">
                <span id="timer-settings">Timer</span>
                <ToggleButton @click="toggleMode"></ToggleButton>
                <span id="timer-settings">Stopwatch</span>
            </div>
            <div>
                <form>
                    <label id="timeblocks">Timeblocks</label>
                    <input type="number" id="timeblock-input" v-model="timer_blocks"/>
                </form>
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
//import Work from "./Work-tab";
//import ShortBreak from "./Shortbreak-tab";
//import LongBreak from "./Longbreak-tab";
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
            time_obj: undefined,
            time_count: 0,
            work_period: 5,
            short_break_period: 5,
            long_break_period: 5,

            work_state: "sesh-active",
            short_break_state: "none",
            long_break_state: "none",

            curr_block: 1,
            total_time: 0,
            start_stop: "START",
            time_runs : false,
            timer_blocks: 1,
            mode: "stopwatch",
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
            }
        },
        timer_blocks: {
            handler(val){
                if (val < 1) {
                    this.timer_blocks = 1;
                }
            }
        },
        curr_block: {
            handler(val){
                if (this.mode == "timer" && Math.floor((val-1)/6) == this.timer_blocks){
                    this.toggleTime();
                }
            }
        }
    },
    methods : {
        toggleTime(){
            if (this.time_runs == false) { 
                this.work_state = "sesh-active";
                this.short_break_state = "none";
                this.long_break_state = "none";
                this.time_count = this.work_period;
                this.time_obj = setInterval(() =>{
                    this.time_count--;
                    console.log(this.total_time++);
                }, 1000)
                this.start_stop = "STOP";
                this.time_runs = true;
            } else {
                this.time_count = this.work_period;
                clearInterval(this.time_obj);
                this.start_stop = "START";
                this.time_runs = false;
                console.log("Session stopped | Mode : " + this.mode + " | Total Elapsed Time : " + this.total_time + " | Total Time Blocks : " + Math.floor((this.curr_block-1)/6));
                this.total_time = 0;
            }
        },
        periodUpdate (new_period) {
            if (this.work_state == "sesh-active") {
                this.work_period = new_period;
            } else if (this.short_break_state == "sesh-active") {
                this.short_break_period = new_period;
            } else if (this.long_break_state == "sesh-active") {
                this.long_break_period = new_period;
            }
        },
        showWork () {
            if (this.time_runs == false){
                this.work_state = "sesh-active";
                this.short_break_state = "none";
                this.long_break_state = "none";
            }
            
        },
        showShort () {
            if (this.time_runs == false){
                this.work_state = "none";
                this.short_break_state = "sesh-active";
                this.long_break_state = "none";
            }
        },
        showLong () {
            if (this.time_runs == false){
                this.work_state = "none";
                this.short_break_state = "none";
                this.long_break_state = "sesh-active";
            }
        },
        toggleMode () {
            if (this.time_runs == false) {
                if (this.mode == "stopwatch") {this.mode = "timer"}
                else if (this.mode == "timer") {this.mode = "stopwatch"}
                console.log("Current mode : " + this.mode);
            }
        }
    },
    mounted () {
        console.log("Current mode : " + this.mode);
    }
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