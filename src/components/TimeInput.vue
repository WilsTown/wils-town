<template>
    <input type="tel" v-mask="['#:##','##:##', '###:##', '####:##']" v-model="time_val" id="time">
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
    name: "TimeInputClass",
    directives: {mask},
    data: function () {
        return {
            time_val: "0:00",
            time_raw: 0,
        }
    },
    watch: {
        time_val: {
            handler(val) {
                if (val.length > 6) {
                    this.time_val = this.time_val.slice(1,);
                } else if (val.length == 6 && val.slice(0,2) == "00") {
                    this.time_val = this.time_val.slice(2,);
                } else if (val.length == 5 && val.slice(0,1) == "0") {
                    this.time_val = this.time_val.slice(1,);
                } else if (val.length < 4) {
                    this.time_val = "0".concat(this.time_val);
                }
                this.time_raw = Number(this.time_val.slice(0,this.time_val.indexOf(':'))) * 60 + Number(this.time_val.slice(this.time_val.indexOf(':')+1,));
                this.$emit('update', this.time_raw);
            }
        }
    },
    mounted() {
        
    }
};
</script>

<style scoped>
#time {
    color: #fcf4d5;
    border: none;
    outline: none;
    background: none;
    text-align: center;
    width: 100%;
}
</style>