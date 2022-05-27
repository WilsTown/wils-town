<template>
    <div class="element-container">
        <img :src="ImageSource" class="element-img" />
        <div class="item-description">
            <div class="item-line" id="name">
                {{ Name }}
            </div>
            <div class="item-line" id="desc">
                {{ Desc }}
            </div>
            <div class="item-line" id="price">
                <i class="fa fa-money" id="money" /> {{ Price }}
            </div>

            <br />
        </div>
    </div>
</template>

<script>
export default {
    name: "StoreElementMenuItem",
    props: {
        ImageSource: String,
        Index: Number,
        Name: String,
        Desc: String,
        Price: Number,
    },
    data: function () {
        return {
            top: 0,
            left: 0,
        };
    },
    mounted() {
        this.top = this.Index;
    },
    updated() {
        this.top = this.Index;
    },
};
</script>

<style scoped>
.element-container {
    background-color: #b4bfce;
    border-radius: 10px;
    height: 95px;
    width: 310px;
    padding: 5px;
    position: absolute;
    margin-top: 60px;
    margin-left: 10px;
    top: calc(115px * v-bind(top));
}

.element-container:hover {
    background-color: #506b8b;
    color: #f1faee;
    transition: 0.3s;
}

.element-img {
    max-height: 85px;
    max-width: 85px;
    position: absolute;
    left: 20px;
    align-content: center;
}

.item-description {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 10px;
    left: 120px;
}

.item-line {
    text-align: left;
    font-size: 15px;
    margin: 0px 15px 5px 0px;
    font-family: Helvetica;
    font-weight: bold;
}

#name {
    text-decoration: underline;
}

#desc {
    font-weight: normal;
    font-style: italic;
    font-size: 13px;
}

#price {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: #c59a00;
}

#money {
    color: #c59a00;
    font-size: 20px;
    margin-right: 5px;
}
</style>
