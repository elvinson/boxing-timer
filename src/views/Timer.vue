<template>
    <div>
        <section class="section clock">
            <div class="time">{{ formattedTime }}</div>
            <!-- <div class="message">время пришло</div> -->
        </section>
        <div class="buttons">
            <button v-on:click="start" class="button is-danger is-large is-fullwidth block">БОЙ!</button>
            <button v-on:click="reset" class="button is-danger is-large is-fullwidth block">СБРОС</button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

    export default {
        data() {
            return {
                intervalId: null,
                timeInMs: 120000
            }
        },
        computed: { 
            ...mapState(['roundsCount', 'roundTime', 'restTime', 'preparationTime']),
            ...mapGetters(['selectedProfile']),
            formattedTime() {
                const minutes = Math.floor(this.timeInMs / 60000);
                const seconds = (this.timeInMs % 60000) / 1000;
                const formattedMinutes = String(minutes).length === 1 ? `0${minutes}` : minutes; 
                const formattedSeconds = String(seconds).length === 1 ? `0${seconds}` : seconds;
                return `${formattedMinutes}:${formattedSeconds}`;
            }
        },
        filters: {

        },
        methods: {
            start() {
                console.log("start");
                // const timeOfRound = this.roundsCount * this.roundTime;
                // const timeOfRest = (this.roundsCount - 1) * this.restTime;
                // this.timeInMs = timeOfRound + timeOfRest;
                this.intervalId = setInterval(() => {
                    this.timeInMs -= 1000;
                    if (this.timeInMs <= 0) {
                        clearInterval(this.intervalId);
                    }
                }, 1000);
            },
            reset() {
                console.log("reset");
                clearInterval(this.intervalId);
                this.timeInMs = 60000;
            },
            pause() {
                console.log("pause");
            }
        }
    }
</script>

<style scoped>
    .clock {
        text-align: center;
    }
    .time {
        font-size: 10em;
    }
    .message {
        font-size: 2em;
    }
</style>