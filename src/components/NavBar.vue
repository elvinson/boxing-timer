<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBoxingTimer">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navbarBoxingTimer">
            <div class="navbar-start">
                <div class="navbar-item">Бой: 00:00</div>
                <div class="navbar-item">Отдых: 00:00</div>
                <div class="navbar-item">Профиль: {{ profileName }}</div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link :to="{ name: 'timer' }" class="button is-primary">Таймер</router-link>
                        <router-link :to="{ name: 'profiles' }" class="button is-primary">Профили</router-link>
                        <router-link :to="{ name: 'settings' }" class="button is-primary">Настройки</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        computed: {
            profileName() {
                return this.$store.getters.selectedProfile['name'];
            }
        }
    }
</script>