<template>
    <div>
        <h1 class="title">Профили</h1>
        
        <!-- Список профилей -->
        <div class="box profile" v-for="profile in profiles" :key="profile.id">
            <!-- Выбранный профиль -->
            <span
                v-show="profile.selected" 
                class="tag is-primary is-light selected-profile">Текущий профиль</span>
            
            <div class="content">
                <table class="profile-settings table is-bordered is-striped">
                    <tbody>
                        <tr>
                            <td>Имя профиля</td>
                            <td>{{ profile.name }}</td>
                        </tr>
                        <tr>
                            <td>Кол-во раундов</td>
                            <td>{{ profile.roundsCount }}</td>
                        </tr>
                        <tr>
                            <td>Время раунда</td>
                            <td>{{ profile.roundTime }}</td>
                        </tr>
                        <tr>
                            <td>Время перерыва</td>
                            <td>{{ profile.restTime }}</td>
                        </tr>
                        <tr>
                            <td>Время подготовки</td>
                            <td>{{ profile.preparationTime }}</td>
                        </tr>
                        <tr>
                            <td>Цвет фона раунда</td>
                            <td>{{ profile.backgroundOfRound }}</td>
                        </tr>
                        <tr>
                            <td>Цвет фона перерыва</td>
                            <td>{{ profile.backgroundOfBreak }}</td>
                        </tr>
                        <tr>
                            <td>Цвет фона конца раунда</td>
                            <td>{{ profile.backgroundOfRoundEnding }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="buttons">
                <button 
                    v-show="!profile.selected"
                    v-on:click="selectProfile(profile.id)"
                    class="button is-primary is-fullwidth block">Выбрать</button>
                <router-link 
                    :to="{ name: 'settings', params: { id: profile.id } }" 
                    class="button is-primary is-fullwidth block">Настройки</router-link>
            </div>
        </div>

        <!-- Кнопки -->
         <!-- <div class="buttons">
            <button v-on:click="createNewProfile" class="button is-success is-large is-fullwidth block">Добавить новый профиль</button>
        </div> -->
    </div>
</template>

<script>
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
    .profile-settings tr td:first-child {
        width: 20%;
        font-weight: bold;
    }
</style>