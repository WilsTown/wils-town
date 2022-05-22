<template>
    <div class="element-bg">
        <img :src="ImageSource" class="element-img"/>
        <div class="item-description">
        </div>
    </div>
</template>

<script>
export default{
    name: "StoreElementMenuItem",
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
        this.top = Math.floor(this.Index / 1)
        this.left = this.Index % 1;
    }
}
</script>

<style scoped>
.element-bg {
    background-color: #B4BFCE;
    border-radius: 10px;
    height: 90px;
    width: 300px;
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
    position: absolute;
    left: 20px;
}

.item-description{
    display: flex;
    text-align: left;
    padding-left: 20px;
    font-size: 10px;
    font-family: Helvetica, sans-serif;
    font-weight: normal;
}
</style>
