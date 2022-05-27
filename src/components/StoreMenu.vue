<template>
    <div v-if="elements_array" id="menu-container">
        <StoreElement
            v-for="(element, index) in unownedElements"
            :key="element.src"
            :ID="element.id"
            :ImageSource="element.src"
            :Index="index"
            @click="buyElement(element.id, element.price, element.item_name)"
            :Name="element.item_name"
            :Desc="element.desc"
            :Price="element.price"
        ></StoreElement>
    </div>
</template>

<script>
import StoreElement from "./StoreElement";
export default {
    name: "StoreElementMenuClass",
    components: {
        StoreElement,
    },
    props: {
        Coins: Number,
    },
    data: function () {
        return {
            selected_element: -1,
            elements_array: [],
        };
    },
    computed: {
        unownedElements: function () {
            let filtered_array = [];
            for (let element of this.elements_array) {
                element.owned ? NaN : filtered_array.push(element);
            }
            return filtered_array;
        },
    },
    methods: {
        buyElement(element_id, element_price, element_name) {
            if (element_price > this.Coins) {
                alert("Not enough coins!");
                return;
            }
            if (confirm("Press confirm to buy " + element_name) == false) {
                return;
            }
            for (let i = 0; i < this.elements_array.length; i++) {
                if (this.elements_array[i].id != element_id) {
                    continue;
                }
                this.elements_array[i].owned = true;
                fetch("http://localhost:3000/elements_array/" + element_id, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.elements_array[i]),
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
            }
            this.$emit("confirmBuy", element_price);
        },
    },
    mounted() {
        fetch("http://localhost:3000/elements_array")
            .then((res) => res.json())
            .then((data) => (this.elements_array = data))
            .catch((err) => console.log(err.message));
    },
};
</script>

<style scoped>
#menu-container {
    top: 10px;
}
</style>>

