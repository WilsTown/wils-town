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
    height: 7vh;
    width: inherit;

    border: none;
    padding-right: 20px;
    padding-left: 20px;
    background-color: #b45a4300;
    color: #faf0ca;
}

.nav-btn:hover {
    background-color: #1d1d1d34;
}

#nav-active {
    color: #f4d35e;
}

/* T I M E R  B U T T O N S */
.sesh-btn {
    height: 35px;
    padding-right: 20px;
    padding-left: 20px;
    margin-inline: 40px;
    border: none;
    border-radius: 15px;

    font-family: Avenir;
    font-size: 20px;

    background: #00000000;
    color: #fcf4d5;
}

.sesh-btn:hover {
    background: #6b4e472d;
    color: #fcf4d5;
}

#work-sesh-active {
    font-weight: bold;
    background: #6b4e47;
    color: #fcf4d5;
}

#sbreak-sesh-active {
    font-weight: bold;
    background: #d65535;
    color: #fcf4d5;
}

#lbreak-sesh-active {
    font-weight: bold;
    background: #f38569;
    color: #fcf4d5;
}

.start-btn {
    color: #e76f51;
    background: #fcf4d5;
    border: none;
    border-radius: 20px;

    padding-block: 0.5rem;
    padding-inline: 3rem;

    font-weight: bold;
    font-size: 30px;
}

.start-btn:hover {
    background: #ffea97;
}

/* I N V E N T O R Y  B U T T O N S */
.inv-btn {
    height: 35px;
    padding-right: 5px;
    padding-left: 5px;
    margin-inline: 25px;
    border: none;
    border-radius: 5px;

    font-family: Helvetica;
    font-size: 20px;
    font-weight: bold;

    background: #00000000;
    color: #efefec;
}

.inv-btn:hover {
    background: #223b5a;
    color: #efefec;
}

#inv-active {
    background: #607896;
    color: #efefec;
}

.inv-item {
    background: #b4bfce;
    color: #0d3b66;
    height: 4rem;
    width: 4rem;
}

/* S E T  P R E F E R E N C E S  B U T T O N S */
.save-btn {
    color: #614b72;
    background: #ebd5fc;
    border: none;
    border-radius: 15px;

    font-weight: bold;
    font-size: 20px;
}

.save-btn:hover {
    background: #c9a4e7;
}
</style>