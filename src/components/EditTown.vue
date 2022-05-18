<template>
    <div id="edit-town">
        <Plot :StateEditing="StateEditing" :SelectedElement="SelectedElement"></Plot>
    </div>
</template>

<script>
import Plot from "./Plot";
export default {
    name: "EditTown",
    components: {
        Plot
    },
    props: {
        StateEditing: String,
        SelectedElement: Number,
    },
    mounted () {
        console.log(this.StateEditing)
    }
}
</script>


<style scoped>
#edit-town {
    top: 55px;
    position: fixed;
    height: 90%;
    width: 73%;
    background-color:#FAF0CA;
    border: none;
    border-radius: 5px;
}
</style>
