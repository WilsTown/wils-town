<template>
    <div id="component-container">
        <div id="info-container">
            <div id="top">
                <div id="title">Welcome to Wil's Town!</div>
            </div>
            <div id="line"></div>
            <div id="contents">
                <div class="text subtitle">
                    Wil's Town is a City-Builder Game-Integrated Pomodoro Timer
                </div>
                <div class="item">
                    Navigate the different icons to start your personal
                    productivity app. Have fun!
                </div>
                <div class="item">
                    <i class="fa fa-clock-o" id="icon"></i>
                    <div class="text">
                        Pomodoro Timer. Personalize your sessions! Finish your
                        timeblocks and earn coins. Timer mode lets you work with
                        default timeblocks. Stopwatch mode lets you work for as
                        long as you can!
                    </div>
                </div>
                <div class="item">
                    <i class="fa fa-map-o" id="icon"></i>
                    <div class="text">
                        View Town. How productive have you been?
                    </div>
                </div>
                <div class="item">
                    <i class="fa fa-paint-brush" id="icon"></i>
                    <div class="text">
                        Edit Town. Customize your town for a more personal look!
                        You can rearrange your buildings or buy more from the
                        store.
                    </div>
                </div>
                <div class="item">
                    <i class="fa fa-gear" id="icon"></i>
                    <div class="text">
                        Set Preferences. Set default session durations. Want to
                        up your productivity game? Enabling the consequences
                        affects your coins if you don't finish your timeblocks.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ViewInfo",
};
</script>

<style scoped>
#component-container {
    position: absolute;
    top: 2.5rem;
    bottom: 0%;
    left: 0%;
    right: 0%;

    display: flex;
    align-content: center;
    justify-content: center;

    background: #866d99;
}

#info-container {
    position: absolute;
    margin: 2rem;
    height: 500px;
    width: 50rem;

    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    border-radius: 15px;
    background: #614b72;
    color: #fff9e4;
}

#top {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

#title {
    margin-inline: 1rem;
    margin-block: 0.5rem;
    font-size: 3rem;
    font-weight: bold;
    order: 1;
}

#line {
    width: 48rem;
    height: 2px;
    background: #fff9e4;
    border-radius: 2px;
    margin-inline: auto;
    margin-block: 0.1rem;
    order: 2;
}

#contents {
    display: flex;
    flex-flow: column nowrap;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    margin: 1rem;
    order: 3;
}

.text {
    display: flex;
    flex-flow: row nowrap;
    color: #fff9e4;
    font-size: 1rem;
    text-align: left;
    margin: 1rem 0 1rem 0;
}

.text.subtitle {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 0 1rem 0;
}

.item {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: #fff9e4;
    margin: 0 0 1rem 0;
    text-align: left;
}

#icon {
    font-size: 2rem;
    margin: 0 1.5rem;
    color: #f4d35e;
}
</style>

