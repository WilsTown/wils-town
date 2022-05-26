<template>
    <div id="edit-container">
        <div id="left-window">
            <!-- <img id="inventory" src="disp-inventory.png" /> -->
            <div id="top-bar">
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
                <div id="cointainer">
                    <div id="coin-icon">
                        <i class="fa fa-money fa-2x"></i>
                    </div>
                    <div id="coin-text">
                        {{ coins }}
                    </div>
                </div>
            </div>
            <InventoryMenu
                v-if="inventory_state == 'inv-active'"
                @elementSelected="updateElementSelect"
            ></InventoryMenu>
            <StoreMenu
                v-else-if="store_state == 'inv-active'"
                @confirmBuy="confirmBuy"
                :Coins="coins"
            ></StoreMenu>
        </div>
        <div id="edit-town">
            <EditTown
                StateEditing="enabled"
                :SelectedElement="element_selected"
            ></EditTown>
        </div>
    </div>
</template>

<script>
import InventoryButton from "./Button";
import StoreButton from "./Button";
import EditTown from "./EditTown";
import InventoryMenu from "./InventoryMenu";
import StoreMenu from "./StoreMenu";
export default {
    name: "ViewInventory",
    components: {
        InventoryButton,
        StoreButton,
        EditTown,
        InventoryMenu,
        StoreMenu,
    },
    data() {
        return {
            tabs: ["Inventory", "Store"],
            selected: "Inventory",

            inventory_state: "inv-active",
            store_state: "none",

            element_selected: -1,
            coins: 0,
            user_stats: {},
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
        updateElementSelect(element_id) {
            this.element_selected = element_id;
        },
        confirmBuy(element_price) {
            this.coins = this.coins - element_price;
            fetch("http://localhost:3000/user_stats/", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    coins: this.coins,
                    work_default: this.user_stats.work_default,
                    short_default: this.user_stats.short_default,
                    long_default: this.user_stats.long_default,
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
        },
    },
    mounted() {
        fetch("http://localhost:3000/user_stats")
            .then((res) => res.json())
            .then((data) => {
                this.user_stats = data;
                this.coins = data.coins;
            })
            .catch((err) => console.log(err.message));
    },
};
</script>

<style scoped>
#edit-town {
    left: 375px;
}

#edit-container {
    position: absolute;
    top: 40px;
    bottom: 0%;
    left: 0%;
    right: 0%;
    background-color: #0d3b66;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

#left-window {
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

#top-bar {
    background-color: #2c4c72;
    width: 350px;
    position: fixed;
    z-index: 1;
    height: 50px;
    top: 40px;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

#top-buttons {
    display: flex;
    align-items: inherit;
    justify-content: inherit;
}

#cointainer {
    display: flex;
    flex-flow: row unwrap;
    justify-content: flex-start;
    align-items: center;
    margin-inline: 20px;
}

#coin-icon {
    color: #f4d35e;
    margin-right: 15px;
}

#coin-text {
    color: #f4d35e;
    font-family: Helvetica;
    font-size: 20px;
    font-weight: bold;
}

#town {
    height: 95%;
    width: calc(100% - 350px);
    left: 340px;
    position: relative;
}

#item-container {
    position: absolute;
    top: 40px;
}

#inventory {
    height: 80%;
    position: fixed;
    left: 0;
    top: 80px;
    width: 350px;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #506b8b;
}

::-webkit-scrollbar-thumb {
    background: #b4bfce;
}
</style>