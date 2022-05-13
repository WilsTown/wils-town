<template>
    <div class="main-container">
        <div class="item-container" :id="EditOption">
            <div v-for="item in items" :key="item" class="item" :id="ItemID">
                <img :src="item" id="item-img" />
                <div id="item-description"> 
                    ITEM NAME <br>
                    Item description <br>
                    Cost: 100 coins <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StoreItems",
    components: {},
    props: {
        ItemID: String,
        EditOption: String,
    },

    data: function () {
        return {
            items: [
                
                "buildings/Layer 15.png",
                "buildings/Layer 16.png",
                "buildings/Layer 17.png",
                "buildings/Layer 18.png",
                "buildings/Layer 19.png",
                "buildings/Layer 20.png",
            ],
        };
    },
};
</script>

<style scoped>
.main-container {
    position: absolute;
    top: 7px;
    display: flex;
    justify-content: center;
    width: 350px;
    height: 600px;
}

.item-container {
    display: flex;
    justify-content: flex-start;
    align-content: space-evenly;

    background: #607896;
    width: inherit;
    height: inherit;

    padding: 1rem;
}

#inventory-option {
    flex-direction: column;
    flex-wrap: wrap;
}

#store-option {
    flex-direction: column;
    flex-wrap: wrap;
}

#item-description{
    display: flex;
    text-align: left;
    padding-left: 20px;
    font-size: 10px;
    font-family: Helvetica, sans-serif;
    font-weight: normal;
}

.item {
    display: flex;
    background: #b4bfce;
    color: #0d3b66;
    height: 5rem;
    border-radius: 5px;
}



.item:hover {
    background: #506b8b;
    color: #f1faee;
}

#inventory-item {
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 5rem;
    margin-block: 0.25rem;
    margin-inline: 0.5rem;
}

#store-item {
    width: 5rem;
    margin: 0.25rem;
}

#item-img {
    height: 3.5rem;
    position: absolute;
    left: 20%;
}
</style>


