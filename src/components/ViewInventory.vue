<template>
    <div id="view-inventory-container">
        <div id="left-inventory">
            <img id="inventory" src="disp-inventory.png" />  
            <div id="inventory-name"> 
                <div id="top-buttons">
                    <InventoryButton
                    ButtonType="inv-btn"
                    ButtonText="Inventory"
                    :ButtonState="inventory_state">
                    </InventoryButton>
                    <StoreButton
                    ButtonType="store-btn"
                    ButtonText="Store"
                    :ButtonState="store_state">
                    </StoreButton>
                </div>
            </div>
        </div>
        <img id="town" src="town-edit.png" />
        <Grid></Grid>
    </div>
</template>

<script>
import InventoryButton from "./Button";
import StoreButton from "./Button";
import Grid from "./Grid";
export default {
    name: "ViewInventory",
    components: {
        InventoryButton,
        StoreButton,
        Grid,
    },
    data() {
        return {
            inventory_state: "inv-active",
            store_state: "none",
            
        };
    },
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
#inventory-name{
    background-color: #2C4C72;
    width: 350px;
    position: fixed;
    z-index: 1;
    height: 8%;
    top: 40px;
    left: 0;
}
#left-inventory {
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 350px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 40px; /* Stay at the top */
    left: 0;

    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    background-color: #607896;

}
#top-buttons {
    position: fixed;
    top: 50px;
    
}

#town {
    height: 95%;
    padding: 4%;
}

#inventory {
    height: 80%;
    position: fixed;
    left: 0;
    top: 80px;
    width: 350px;
    
    
}
</style>