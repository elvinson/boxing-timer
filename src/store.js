import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profiles: [
            {
                id: 1,
                name: "Классический бокс",
                roundsCount: 0,
                roundTime: 0,
                restTime: 0,
                preparationTime: 0,
                background: '#000000',
                backgroundOfRound: '',
                backgroundOfRoundEnding: '',
                backgroundOfBreak: '',
                selected: true
            }
        ]
    },
    mutations: {
        'SET_PROFILE'(state, profile) {
            state.profiles.push(profile);
        },
        'SELECT_PROFILE'(state, profileId) {
            /* eslint no-debugger: "off" */
            // debugger;
            for (const profile of state.profiles) {
                profile.selected = profile.id == profileId
            }
        },
        'DELETE_PROFILE'(state, profileId) {
            state.profiles = state.profiles.filter(profile => profile.id != profileId);
        },
    },
    actions: {
        createProfile({ commit }, payload) {
            commit('SET_PROFILE', payload.profile)
        },
        selectProfile({ commit }, payload) {
            commit('SELECT_PROFILE', payload.profileId);
        },
        deleteProfile({ commit }, payload) {
            commit('DELETE_PROFILE', payload.profileId);
        }
    },
    getters: {
        selectedProfile(state) {
            return state.profiles.filter(profile => profile.selected)[0];
        },
        profilesCount(state) {
            return state.profiles.length;
        }
    }
});