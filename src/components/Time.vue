<template>
    <div id="time">{{formattedTime}}</div>
</template>

<script>
export default {
    name: "TimeClass",
    props: {
        TimeRaw: Number,
    },
    computed: {
        formattedTime: function() {
            return String(Math.floor(this.TimeRaw / 60)).concat(":", this.TimeRaw % 60 < 10 ? "0" + (this.TimeRaw % 60) : this.TimeRaw % 60)
        }
    }
};
</script>