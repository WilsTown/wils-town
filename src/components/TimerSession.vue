<template>
    <div id="timer-sesh-container">
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
    </div>
</template>

<script>
import TimerButton from "./Button";
import ToggleButton from "./ToggleButton";
import Time from "./Time";
export default {
    name: "TimerSession",
    components: {
        TimerButton,
        ToggleButton,
        Time,
    },
    data() {
        return {
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
#timer-sesh-container {
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
