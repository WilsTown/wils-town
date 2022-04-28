<template>
    <div id="view-inventory-container">
        <div id="left-inventory"> 
            Inventory
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewInventory",
    components: {},
};
</script>

<style scoped>
#view-inventory-container {
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
#left-inventory {
    height: 945px;
    width: 480px;
    position: left;
    top: 20px;
    border-radius: 0px;
    background-color: #607896;

}
</style>