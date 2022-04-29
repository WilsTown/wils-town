<template>
    <div id="view-town-container">
        <img id="town" src="town.png" />
    </div>
</template>

<script>
export default {
    name: "ViewTown",
    components: {},
};
</script>

<style scoped>
#view-town-container {
    position: absolute;
    display: flex;
    top: 40px;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: #f4d35e;
    justify-content: center;
    align-items: center;
}

#town {
    height: 530px;
}
</style>