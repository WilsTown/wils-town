<template>
    <div class='grid-cell' ></div>
</template>

<script>
export default{
    name: "GridCellClass",
    props: {
        Index: Number,
        GridSize: Number,
    },
    data: function() {
        return {
            top: 0,
            left: 0,
        }
    },
    mounted() {
        this.top = this.Index % this.GridSize;
        this.left = Math.floor(this.Index / this.GridSize)
    }
}
</script>


<style scoped>
.grid-cell {
    width: 98px;
    height: 98px;
    position: absolute;
    top: calc(100px * v-bind(top));
    left: calc(100px * v-bind(left));
    border: dashed;
    border-width: 1px;
    border-color: black;
}

.grid-cell:hover {
    background-color: #81b8dd;
}
</style>