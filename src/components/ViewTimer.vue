<template>
    <div id="timer-container">
        <div id="timer-component">
            <TimerSession></TimerSession>
        </div>
    </div>
</template>

<script>
import TimerSession from "./TimerSession";
export default {
    name: "ViewTimer",
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

#timer-component {
    position: absolute;
    left: 20%;
    right: 20%;
    top: 5%;
    bottom: 15%;

    background: #af4b32;
    border-radius: 30px;
}
</style>