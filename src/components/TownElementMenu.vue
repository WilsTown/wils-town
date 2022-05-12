<template>
    <div id="menu-container">
        <TownElement
            v-for="(element, index) in ownedElements"
            :key="element.src"
            :ImageSource="element.src"
            :Index="index"
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
            elements_array: [
                {
                    src: "./buildings/Layer 2.png",
                    owned: true,
                },
                {
                    src: "./buildings/Layer 3.png",
                    owned: true,
                },
                {
                    src: "./buildings/Layer 4.png",
                    owned: true,
                },
                {
                    src: "./buildings/Layer 5.png",
                    owned: true,
                },
                {
                    src: "./buildings/Layer 6.png",
                    owned: true,
                },
                {
                    src: "./buildings/Layer 7.png",
                    owned: false,
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
}
</script>

<style scoped>
#menu-container {
    top: 10px;
}
</style>>

