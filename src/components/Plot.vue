<template>
    <div v-if="cells_array" id="scale-container">
        <div id="grid-container" :target="StateEditing">
            <PlotCell
                v-for="(cell, index) in this.cells_array"
                :key="index"
                :Index="cell.id"
                :GridSize="grid_size"
                :Element="cell.element_id"
                :StateEditing="StateEditing"
                @click="placeElement(cell.id, this.SelectedElement, true)"
            ></PlotCell>
        </div>
    </div>
</template>

<script>
import PlotCell from "./PlotCell";
export default {
    name: "PlotClass",
    props: {
        StateEditing: String,
        SelectedElement: Number,
    },
    components: {
        PlotCell,
    },
    data: function () {
        return {
            grid_size: 5,
            cells_array: [],
        };
    },
    mounted() {
        fetch("http://localhost:3000/plot_array")
            .then((res) => res.json())
            .then((data) => (this.cells_array = data))
            .catch((err) => console.log(err.message));
    },
    methods: {
        placeElement(cell_id, element_id, log) {
            if (this.StateEditing == "disabled") {
                return NaN;
            }
            for (let i = 0; i < Math.pow(this.grid_size, 2); i++) {
                if (this.cells_array[i].id == cell_id) {
                    if (log == true) {
                        this.$emit(
                            "changeLog",
                            cell_id,
                            this.cells_array[i].element_id,
                            element_id
                        );
                    }
                    this.cells_array[i].element_id = element_id;
                }
            }
        },
        savePlot() {
            for (let i = 0; i < Math.pow(this.grid_size, 2); i++) {
                fetch("http://localhost:3000/plot_array/" + i, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id: i,
                        element_id: this.cells_array[i].element_id,
                    }),
                })
                    .then((res) => {
                        if (res.status !== 200) {
                            throw new Error(
                                `There was an error with status code ${res.status}`
                            );
                        }
                        return res.json();
                    })
                    .catch((err) => console.log(err.message));
            }
        },
    },
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
    margin-top: 10%;
    border: 5px solid #eee7cd;
    background: #fcf4d5;
}

#grid-container[target="disabled"] {
    width: 500px;
    height: 500px;
    transform-origin: top left;
    transform: rotate(45deg);
    margin-left: 50%;
    margin-top: 20%;
    border: 5px solid #eee7cd;
    background: #fcf4d5;
}
</style>
