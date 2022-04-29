<template>
    <div id="timer-container">
        <!-- <TimerSession> -->
        <TimerSession></TimerSession>
    </div>
</template>

<script>
import TimerSession from "./TimerSession";
export default {
    name: "ViewTimer",
    data: function () {
        return {
            tabs: ["Work", "ShortBreak", "LongBreak"],
            selected: "Work",
        };
    },
    components: {
        TimerSession,
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
</style>