<template>
    <div id="scale-container">
        <div id="grid-container">
            <PlotCell
                v-for="(cell) in this.cells_array"
                :key="cell.id"
                :Index="cell.id"
                :GridSize="grid_size"
            ></PlotCell>
        </div>
    </div>
</template>

<script>
import PlotCell from "./PlotCell";
export default {
    name : "PlotClass",
    props: {
        StateEdit: Boolean,
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
            let cell = {
                id: i,
            }
            this.cells_array.push(cell)
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
    margin-left: 50%;
    margin-top: 50%;
    transform: rotate(45deg);
    border: solid;
    border-width: 2px;
    border-color: black;
}
</style>
