<template>
	<div class="nav-bar" id="view-timer">
		<NavButton
			ButtonType="nav-btn"
			IconClass="fa fa-clock-o fa-2x"
			IconState="nav-active"
		></NavButton>
		<NavButton
			ButtonType="nav-btn"
			IconClass="fa fa-map-o fa-2x"
			IconState="none"
		></NavButton>
		<NavButton
			ButtonType="nav-btn"
			IconClass="fa fa-paint-brush fa-2x"
			IconState="none"
		></NavButton>
		<NavButton
			ButtonType="nav-btn"
			IconClass="fa fa-gear fa-2x"
			IconState="none"
		></NavButton>
	</div>
</template>

<script>
import NavButton from "./Button";
export default {
	name: "NavBar",
	components: {
		NavButton,
	},
};
</script>


<style scoped>
.nav-bar {
	height: 40px;
}

#view-timer {
	background-color: #b45a43;
}

#view-town {
	background-color: #dc9e00;
}

#icon {
	height: 10px;
	width: 10px;
}
</style>