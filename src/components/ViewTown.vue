<template>
    <div id="view-town-container">
        "
        <EditTown StateEditing="disabled"></EditTown>
    </div>
</template>

<script>
import EditTown from "./EditTown.vue";
export default {
    name: "ViewTown",
    components: {
        EditTown,
    },
};
</script>

<style scoped>
#view-town-container {
    position: absolute;
    display: flex;
    top: 2.5rem;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: #f4d35e;
    justify-content: center;
    align-items: center;
}
</style>