<template>
  <div id=time>{{TimeRaw}}</div>
</template>

<script>
export default {
  name: "TimeClass",
  props:{
    TimeRaw: Number,
  },
};
</script>