<template>
    <div id="scale-container">
        <div id="grid-container">
            <GridCell
                v-for="(cell) in this.cells_array"
                :key="cell.id"
                :Index="cell.id"
                :GridSize="grid_size"
            ></GridCell>
        </div>
    </div>
</template>

<script>
import GridCell from "./GridCell";
export default {
    name : "GridClass",
    components: {
        GridCell,
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
    transform: scaleY(0.5);
}

#grid-container {
    width: 500px;
    height: 500px;
    transform: rotate(45deg);
    border: solid;
    border-width: 2px;
}
</style>
