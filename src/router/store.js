import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        activeNav: '',
        lang: '',
    },
    mutations: {
        navigate(state, nav) {
            state.activeNav = nav;
        },
        setlang(state, lang) {
            state.lang = lang;
            localStorage.setItem('LANGUAGE', JSON.stringify(lang));
        },
        initLang(state) {
            if (localStorage.getItem('LANGUAGE') == null) {
                state.lang = "简体中文";
            } else {
                state.lang = JSON.parse(localStorage.getItem('LANGUAGE'));
            }
        }
    },
    getters: {
        lang(state) {
            return state.lang;
        }
    }
});
