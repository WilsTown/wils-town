<template>
    <svg
        width="12%"
        height="12%"
        viewBox="0 0 134 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="4"
            y="4"
            width="126"
            height="68"
            rx="34"
            stroke="#FCF4D5"
            stroke-width="8"
        />
        <ellipse cx="94.5" cy="38" rx="25.5" ry="25" fill="#FCF4D5" />
    </svg>
</template>

<script>
export default {
    name: "ToggleButton",
    prop: {
        size: String,
    },
};
</script>

<style scoped>
svg {
    margin: auto;
}
</style>