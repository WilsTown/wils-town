<template>
    <div id="menu-container">
        <TownElement
            v-for="(element, index) in ownedElements"
            :key="element.src"
            :ID="element.id"
            :ImageSource="element.src"
            :Index="index"
            @click="elementSelect(element.id)"
        ></TownElement>
    </div>
</template>

<script>
import TownElement from "./TownElement";
export default {
    name: "TownElementMenuClass",
    components : {
        TownElement,
    },
    data: function(){
        return {
            selected_element: -1,
            elements_array: [
                {
                    src: "./buildings/Layer 2.png",
                    owned: true,
                    id: 1,
                },
                {
                    src: "./buildings/Layer 3.png",
                    owned: true,
                    id: 2,
                },
                {
                    src: "./buildings/Layer 4.png",
                    owned: true,
                    id: 3,
                },
                {
                    src: "./buildings/Layer 5.png",
                    owned: true,
                    id: 4,
                },
                {
                    src: "./buildings/Layer 6.png",
                    owned: true,
                    id: 5,
                },
                {
                    src: "./buildings/Layer 7.png",
                    owned: false,
                    id: 6,
                },
            ]
        }
    },
    computed: {
        ownedElements: function() {
            let filtered_array = [];
            for (let element of this.elements_array) {
                element.owned ? filtered_array.push(element) : NaN;
            }
            return filtered_array
        }
    },
    methods: {
        elementSelect(element_id){
            this.$emit("elementSelected", element_id);
        }
    },
}
</script>

<style scoped>
#menu-container {
    top: 10px;
}
</style>>

