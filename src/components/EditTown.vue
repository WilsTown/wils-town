<template>
    <div id="edit-town">
        <div v-if="StateEditing == 'enabled'" id="edit-buttons-container">
            <EditButton
                IconClass="fa fa-wrench"
                ButtonType="edit-town-btn"
                @click="editBuild"
            ></EditButton>
            <EditButton
                IconClass="fa fa-trash"
                ButtonType="edit-town-btn"
                @click="editRemove"
            ></EditButton>
            <EditButton
                IconClass="fa fa-undo"
                ButtonType="edit-town-btn"
                @click="editUndo"
            ></EditButton>
            <EditButton
                IconClass="fa fa-undo"
                style="transform: scaleX(-1)"
                ButtonType="edit-town-btn"
                @click="editRedo"
            ></EditButton>
            <EditButton
                IconClass="fa fa-save"
                ButtonType="edit-town-btn"
                @click="saveTown"
            ></EditButton>
        </div>
        <div id="plot-container">
            <Plot
                ref="Plot"
                :StateEditing="StateEditing"
                :SelectedElement="edit_state == 'build' ? SelectedElement : -1"
                @changeLog="changeLog"
            ></Plot>
        </div>
    </div>
</template>

<script>
import EditButton from "./Button";
import Plot from "./Plot";
export default {
    name: "EditTown",
    components: {
        Plot,
        EditButton,
    },
    props: {
        StateEditing: String,
        SelectedElement: Number,
    },
    data() {
        return {
            edit_history: [],
            edit_state: "build",
            revert_index: 0,
        };
    },
    mounted() {
        //console.log(this.StateEditing)
    },
    methods: {
        editBuild() {
            this.edit_state = "build";
        },
        editRemove() {
            this.edit_state = "remove";
        },
        editUndo() {
            if (this.revert_index == 0) {
                return NaN;
            }
            this.$refs.Plot.placeElement(
                this.edit_history[this.revert_index - 1].id,
                this.edit_history[this.revert_index - 1].prev,
                false
            );
            this.revert_index--;
        },
        editRedo() {
            if (this.revert_index == this.edit_history.length) {
                return NaN;
            }
            this.revert_index++;
            this.$refs.Plot.placeElement(
                this.edit_history[this.revert_index - 1].id,
                this.edit_history[this.revert_index - 1].new,
                false
            );
        },
        saveTown() {
            this.$refs.Plot.savePlot();
        },
        changeLog(cell_id, prev_element, new_element) {
            if (this.revert_index < this.edit_history.length) {
                this.edit_history.splice(this.revert_index);
            }
            this.edit_history.push({
                id: cell_id,
                prev: prev_element,
                new: new_element,
            });
            this.revert_index++;
            if (this.edit_history.length > 10) {
                this.edit_history.shift();
                this.revert_index--;
            }
        },
    },
};
</script>


<style scoped>
#edit-town {
    top: 50px;
    position: fixed;
    height: 90%;
    width: 69%;
    background-color: #f3dfc2;
    border: none;
    border-radius: 5px;
}

#edit-buttons-container {
    /* position: absolute; */
    display: flex;
    align-content: flex-start;
    justify-content: flex-end;
    align-self: center;
    width: 98%;
    height: 50px;
    margin: 10px;
}
</style>
