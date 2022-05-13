<template>
    <div id="scale-container">
        <div id="grid-container">
            <PlotCell
                v-for="(cell, index) in this.cells_array"
                :key="index"
                :Index="index"
                :GridSize="grid_size"
                :Element="cell"
                @click="placeElement(index)"
            ></PlotCell>
        </div>
    </div>
</template>

<script>
import PlotCell from "./PlotCell";
export default {
    name : "PlotClass",
    props: {
        StateEditing: String,
        SelectedElement: Number,
    },
    components: {
        PlotCell,
    },
    data: function() {
        return {
            grid_size: 5,
            cells_array: [],
        }
    },
    mounted() {
        for (let i = 0; i < Math.pow(this.grid_size, 2); i++) {
            this.cells_array.push(-1)
        }
    },
    methods : {
        placeElement(cell_id) {
            this.cells_array[cell_id] = this.SelectedElement;
        }
    }
};
</script>

<style scoped>
#scale-container {
    width: 708px;
    height: 1416px;
    transform-origin: top left;
    transform: scaleY(0.5);
    margin: auto;
}

#grid-container {
    width: 500px;
    height: 500px;
    transform-origin: top left;
    transform: rotate(45deg);
    margin-left: 50%;
    margin-top: 30%;
    border: solid;
    border-width: 2px;
    border-color: black;
}
</style>
