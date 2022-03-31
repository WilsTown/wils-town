<template>
  <div id="timer-sesh-container">
    <div id="top-buttons">
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
    <Time :TimeRaw='TimeCount'></Time>
    <div id="line"></div>
    <div id="timer-settings">
      <span id="timer-settings">Timer</span>
      <ToggleButton></ToggleButton>
      <span id="timer-settings">Stopwatch</span>
    </div>
    <div>
      <form action="">
        <label for="" id="timeblocks">Timeblocks</label>
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
  data(){
    return{
      TimeCount: 300
    }
  },
  watch: {
    TimeCount:{
      handler(val){
        if(val>0){
          setTimeout(()=>{
            this.TimeCount--;
          }, 1000);
        }
      },
      immediate: true
    }
  }
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
  font-size: 150px;
  font-style: Roboto;
  font-weight: normal;
}

#timer-settings {
  padding-inline: 4rem;
  padding-block: 1.5rem;
}

#timeblocks {
  padding: 1rem;
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
  width: 500px;
  height: 5px;
  background: #6b4e47;
  border-radius: 2px;
  margin: auto;
}
</style>
