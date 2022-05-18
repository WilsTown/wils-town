<template>
    <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
    </label>
</template>

<script>
export default {
    name: "ToggleButton",
};
</script>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    border-style: solid;
    border-color: #fcf4d5;
    border-radius: 34px;
    border-width: 0.5vh;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: #00000000;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #fcf4d5;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>