<template>
    <div>   
        <h1 class="title">Настройка профиля #{{ profile.id }}</h1>

        <!-- Имя -->
        <div class="field">
            <label class="label">Имя</label>
            <div class="control">
                <input v-model="profile.name" class="input" placeholder="Text input">
            </div>
        </div>
        <!-- Кол-во раундов -->
        <div class="field">
            <label class="label">Кол-во раундов</label>
            <div class="control">
                <input v-model="profile.roundsCount" class="input" placeholder="Кол-во раундов">
            </div>
        </div>
        <!-- Время раунда -->
        <div class="field">
            <label class="label">Время раунда</label>
            <div class="control">
                <input v-model="profile.roundTime" class="input" placeholder="Время раунда">
            </div>
        </div>
        <!-- Время перерыва -->
        <div class="field">
            <label class="label">Время перерыва</label>
            <div class="control">
                <input v-model="profile.restTime" class="input" placeholder="Время перерыва">
            </div>
        </div>
        <!-- Время подготовки -->
        <div class="field">
            <label class="label">Время подготовки</label>
            <div class="control">
                <input v-model="profile.preparationTime" class="input" placeholder="Время подготовки">
            </div>
        </div>
        <!-- Цвет фона раунда -->
        <div class="field">
            <label class="label">Цвет фона раунда</label>
            <div class="control">
                <input v-model="profile.backgroundOfRound" class="input" placeholder="Цвет фона раунда">
            </div>
        </div>
        <!-- Цвет фона перерыва -->
        <div class="field">
            <label class="label">Цвет фона перерыва</label>
            <div class="control">
                <input v-model="profile.backgroundOfBreak" class="input" placeholder="Цвет фона перерыва">
            </div>
        </div>
        <!-- Цвет фона конца раунда  -->
        <div class="field">
            <label class="label">Цвет фона конца раунда</label>
            <div class="control">
                <input v-model="profile.backgroundOfRoundEnding" class="input" placeholder="Цвет фона конца раунда">
            </div>
        </div>

        <div class="buttons">
            <button v-on:click="deleteProfile(profile.id)" class="button is-danger is-fullwidth block">Удалить</button>
        </div>
    </div>
</template>

<script>
    // import ColorPicker from '../components/ColorPicker.vue'
    export default {
        // components: {
        //     ColorPicker
        // },
        props: {
            id: {
                required: true
            }
        },
        computed: {
            profile() {
                return this.$store.getters.getProfileById(this.id)
            }
        },
    }
</script>
          