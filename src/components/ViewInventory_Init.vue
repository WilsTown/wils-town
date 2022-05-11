<template>
    <div id="view-inventory-container">

        <img id="inventory" src="inventory.png" /> 
        <img id="town" src="town-edit.png" /> 
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
    background-color: #0D3B66;
    justify-content: center;
    align-items: center;
}

#town {
    height: 95%;
    padding: 4%;
}
#inventory {
    height: 100%;
    position: fixed;
    left: 0;
    top: 40px;
    
    
}

</style>