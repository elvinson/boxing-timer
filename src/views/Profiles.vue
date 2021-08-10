<template>
    <div>
        <h1 class="title">Профили</h1>
        
        <!-- Список профилей -->
        <div class="box profile" v-for="profile in profiles" :key="profile.id">
            <!-- Выбранный профиль -->
            <span
                v-show="profile.selected" 
                class="tag is-primary is-light selected-profile">Выбран</span>

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

            <!-- Кнопки управления профилем -->
            <div class="buttons">
                <button v-on:click="deleteProfile(profile.id)" class="button is-danger is-fullwidth block">Удалить</button>
                <button v-on:click="selectProfile(profile.id)" class="button is-primary is-fullwidth block">Выбрать</button>
            </div>
        </div>

        <!-- Кнопки -->
         <div class="buttons">
            <button v-on:click="createNewProfile" class="button is-success is-large is-fullwidth block">Добавить новый профиль</button>
        </div>
    </div>
</template>

<script>
    // import { mapState } from 'vuex';

    export default {
        computed: {
            profiles() {
                return this.$store.state.profiles;
            }
        },
        methods: {
            deleteProfile(profileId) {
                // Если остался один не давать удалять
                // Если нет выбранного выбрать предпоследний
                this.$store.dispatch('deleteProfile', { profileId });
            },
            selectProfile(profileId) {
                this.$store.dispatch('selectProfile', { profileId });
            },
            createNewProfile() {
                const id = this.$store.getters.profilesCount + 1;
                const profile = {                     
                    id,
                    name: "",
                    roundsCount: 0,
                    roundTime: 0,
                    restTime: 0,
                    preparationTime: 0,
                    background: '#000000',
                    backgroundOfRound: '',
                    backgroundOfRoundEnding: '',
                    backgroundOfBreak: '',
                    selected: false
                };

                this.$store.dispatch('createProfile', { profile });
            }
        }
    }
</script>

<style scoped>
    .profile {
        position: relative;
    }
    .selected-profile {
        position: absolute;
        right: 1.25rem;
    }
</style>