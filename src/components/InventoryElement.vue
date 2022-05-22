<template>
    <div class="element-bg">
        <img :src="ImageSource" class="element-img"/>
    </div>
</template>

<script>
export default{
    name: "InventoryElementMenuItem",
    props: {
        ImageSource: String,
        Index: Number,
    },
    data: function() {
        return {
            top: 0,
            left: 0,
        }
    },
    mounted() {
        this.top = Math.floor(this.Index / 3)
        this.left = this.Index % 3;
    }
}
</script>

<style scoped>
.element-bg {
    background-color: #B4BFCE;
    border-radius: 10px;
    height: 90px;
    width: 90px;
    padding: 5px;
    position: absolute;
    margin-top: 80px;
    margin-left: 10px;
    top: calc(110px * v-bind(top));
    left: calc(110px * v-bind(left));
}

.element-bg:hover {
    background-color: #506B8B;
}

.element-img {
    height: 90px;
}
</style>
