<template>
  <button :class="ButtonType" :id="ButtonState">
    {{ ButtonText }}
    <i :class="IconClass" :id="IconState"></i>
  </button>
</template>

<script>
export default {
  name: "ButtonClass",
  props: {
    ButtonType: String,
    ButtonText: String,
    ButtonState: String,
    IconClass: String,
    IconState: String,
  },
};
</script>


<style scoped>
/* N A V  B U T T O N */
.nav-btn {
  height: inherit;
  width: inherit;
  border: none;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #b45a43;
  color: #faf0ca;
}

.nav-btn:hover {
  background-color: #944532;
}

#nav-active {
  color: #f4d35e;
}

/* T I M E R  B U T T O N S */
.sesh-btn {
  height: 35px;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 25px;
  margin-inline: 40px;
  border: none;
  border-radius: 15px;

  font-family: Avenir;
  font-size: 20px;

  background: #af4b32;
  color: #fcf4d5;
}

.sesh-btn:hover {
  background: #6b4e4750;
  color: #fcf4d5;
}

#sesh-active {
  font-weight: bold;
  background: #6b4e47;
  color: #fcf4d5;
}

.start-btn {
  color: #e76f51;
  background: #fcf4d5;
  border: none;
  border-radius: 20px;

  padding-block: 0.5rem;
  padding-inline: 3rem;
  margin-block: 3rem;

  font-weight: bold;
  font-size: 30px;
}

.start-btn:hover {
  background: #ffea97;
}
</style>