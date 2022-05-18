<template>
    <div v-if="cells_array" id="scale-container">
        <div id="grid-container" :target="StateEditing">
            <PlotCell
                v-for="(cell, index) in this.cells_array"
                :key="index"
                :Index="index"
                :GridSize="grid_size"
                :Element="cell"
                :StateEditing="StateEditing"
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
            cells_array: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/plot_array')
            .then(res => res.json())
            .then(data => this.cells_array = data)
            .catch(err => console.log(err.message));
    },
    beforeUnmount() {
        var data = new FormData();
        data.append( "plot_array", JSON.stringify( this.cells_array ) );
        fetch('http://localhost:3000/plot_array', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: data
            })
            .then(res => res.json())
            .then(data => alert( JSON.stringify( data ) ))
            .catch(err => console.log(err.message));
    },
    methods : {
        placeElement(cell_id) {
            if(this.StateEditing == "disabled"){return NaN}
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

#grid-container[target="enabled"] {
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

#grid-container[target="disabled"] {
    width: 500px;
    height: 500px;
    transform-origin: top left;
    transform: rotate(45deg);
    margin-left: 50%;
    margin-top: 30%;
}
</style>
