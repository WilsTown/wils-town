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
            elements_array: []
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
    mounted() {
        fetch('http://localhost:3000/elements_array')
            .then(res => res.json())
            .then(data => this.elements_array = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
#menu-container {
    top: 10px;
}
</style>>

