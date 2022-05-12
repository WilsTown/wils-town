<template>
    <div id="inventory-container">
        <div id="left-inventory">
            <div id="inventory-name"> 
                <div id="top-buttons">
                    <InventoryButton
                        ButtonType="inv-btn"
                        ButtonText="Inventory"
                        :ButtonState="inventory_state"
                        @click="showInventory"
                    ></InventoryButton>
                    <StoreButton
                    ButtonType="inv-btn"
                    ButtonText="Store"
                    :ButtonState="store_state"
                    @click="showStore"
                    ></StoreButton>
                </div>
            </div>
            <TownElementMenu></TownElementMenu>
        </div>
        <div id="edit town" >
            <EditTown></EditTown>
        </div>
    </div>
</template>

<script>
import InventoryButton from "./Button";
import StoreButton from "./Button";
import EditTown from "./EditTown.vue";
export default {
    name: "ViewInventory",
    components: {
        InventoryButton,
        StoreButton,
        EditTown,
    },
    data() {
        return {
            tabs: ["Inventory", "Store"],
            selected: "Inventory", 

            inventory_state: "inv-active",
            store_state: "none", 
            
            
        }; 
    }, 
    methods: {
        showInventory() {
            this.inventory_state = "inv-active";
            this.store_state = "none";
        },
        showStore() {
            this.inventory_state = "none";
            this.store_state = "inv-active";
        },
        
    }
};
</script>

<style scoped>
#edit-town {
   
    left: 375px;

}
#inventory-container {
    position: absolute;
    top: 40px;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: #0D3B66;
    justify-content: center;
    align-items: center;
    overflow: hidden;

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
    width: calc(100% - 350px);
    left: 350px;
    position: relative;
}

#inventory {
    height: 80%;
    position: fixed;
    left: 0;
    top: 80px;
    width: 350px;
}
</style>