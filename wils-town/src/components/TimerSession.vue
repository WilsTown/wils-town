<template>
  <div id="timer-sesh-container">
    <div id="top-buttons">
      <!-- SESSION SELECTION BUTTONS -->
      <TimerButton
        ButtonType="sesh-btn"
        ButtonText="Work"
        ButtonState="sesh-active"
      ></TimerButton>
      <TimerButton
        ButtonType="sesh-btn"
        ButtonText="Short Break"
        ButtonState="none"
      ></TimerButton>
      <TimerButton
        ButtonType="sesh-btn"
        ButtonText="Long Break"
        ButtonState="none"
      ></TimerButton>
    </div>

    <!-- MAIN TIMER -->
    <div id="time">25:00</div>

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

    <!-- START BUTTON -->
  </div>
</template>

<script>
import TimerButton from "./Button";
import ToggleButton from "./ToggleButton";
export default {
  name: "TimerSession",
  components: {
    TimerButton,
    ToggleButton,
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
  margin: 1rem;
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
