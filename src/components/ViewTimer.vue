<template>
  <div id="timer-container">
    <div id="timer-component">
      <TimerSession></TimerSession>
      <StartButton
        ButtonType="start-btn"
        ButtonText="START"
        ButtonState="none"
      ></StartButton>
    </div>
  </div>
</template>

<script>
import TimerSession from "./TimerSession";
import StartButton from "./Button";
export default {
  name: "ViewTimer",
  components: {
    TimerSession,
    StartButton,
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
}
</style>