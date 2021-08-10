<template>
    <div>
        <section class="section clock">
            <div class="time">00:00</div>
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
                timeInMs: null
            }
        },
        computed: { 
            ...mapState(['roundsCount', 'roundTime', 'restTime', 'preparationTime']),
            ...mapGetters(['selectedProfile']),
        },
        filters: {

        },
        methods: {
            start() {
                console.log("start");
                // const timeOfRound = this.roundsCount * this.roundTime;
                // const timeOfRest = (this.roundsCount - 1) * this.restTime;
                // this.timeInMs = timeOfRound + timeOfRest;
            },
            reset() {
                console.log("reset");
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