<template>
  <div id=time>{{Math.floor(TimeRaw/60)}}:{{((TimeRaw%60<10)? '0'+(TimeRaw%60) : (TimeRaw%60))}}</div>
</template>

<script>
export default {
  name: "TimeClass",
  props:{
    TimeRaw: Number,
  },
};
</script>