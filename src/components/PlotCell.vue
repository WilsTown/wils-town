<template>
    <div class="grid-cell" :target="StateEditing">
        <div v-if="Element != -1" class="rev-rotate-container">
            <div class="rev-scale-container">
                <img class="element-img" :src="getImg()" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GridCellClass",
    props: {
        StateEditing: String,
        Index: Number,
        GridSize: Number,
        Element: Number,
    },
    data: function () {
        return {
            top: 0,
            left: 0,
            img_src: "",
        };
    },
    mounted() {
        this.top = this.Index % this.GridSize;
        this.left = Math.floor(this.Index / this.GridSize);
    },
    methods: {
        getImg() {
            return "./buildings/Layer " + String(this.Element + 1) + ".png";
        },
    },
};
</script>


<style scoped>
.grid-cell[target="enabled"] {
    width: 98px;
    height: 98px;
    position: absolute;
    top: calc(100px * v-bind(top));
    left: calc(100px * v-bind(left));
    border: 2px dashed #d4caa5;
}

.grid-cell:hover[target="enabled"] {
    background-color: #81b8dd;
}

.grid-cell[target="disabled"] {
    width: 98px;
    height: 98px;
    position: absolute;
    top: calc(100px * v-bind(top));
    left: calc(100px * v-bind(left));
    border-width: 1px;
}

.rev-scale-container {
    width: 98px;
    height: 98px;
    transform: scaleY(2);
}

.rev-rotate-container {
    position: absolute;
    top: -10px;
    left: -70px;
    width: 98px;
    height: 98px;
    transform: rotate(-45deg);
    pointer-events: none;
}

.element-img {
    max-width: 98px;
    max-height: 98px;
    position: absolute;
    bottom: 0px;
}
</style>