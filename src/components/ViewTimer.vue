<template>
  <div id="timer-container">
    <div id="timer-component">
      <!-- <TimerSession> -->
        <button v-for="tab in tabs" :key="tab" @click="selected = tab;">
          {{ tab }}
        </button>
        <component :is="selected"></component>
      <!-- </TimerSession> -->
      <StartButton
        ButtonType="start-btn"
        ButtonText="START"
        ButtonState="none"
      ></StartButton>
    </div>
  </div>
</template>

<script>
//import TimerSession from "./TimerSession";
import Work from "./Work-tab";
import ShortBreak from "./Shortbreak-tab";
import LongBreak from "./Longbreak-tab";
import StartButton from "./Button";
export default {
  name: "ViewTimer",
  data: function() {
    return {
      tabs: ["Work", "ShortBreak", "LongBreak"],
      selected: "Work"
    };
  },
  components: {
    Work,
    ShortBreak,
    LongBreak,
    StartButton
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