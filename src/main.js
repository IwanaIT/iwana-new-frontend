import Vue from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import Transitions from 'vue2-transitions'

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ApiService from "./services/api.service";
import PaisesService from "@/services/paises.service";

// ------------ css ----------
import './assets/css/bootstrap.min.css';
import './assets/css/themify-icons.css';
import './assets/css/animate.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

import VueScrollTo from 'vue-scrollto';
import VueYoutube from 'vue-youtube';
import {gsap} from 'gsap';
import {CSSRulePlugin} from "gsap/CSSRulePlugin";

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import jQuery from 'jquery';

window.$ = jQuery;

import 'jquery.mb.ytplayer';


import axios from "axios";

if (null == PaisesService.getPaises()) {
    axios.get('https://localhost:8000/api/frontend/public/paises/informacion').then(result => {
        PaisesService.savePaises(JSON.stringify(result.data.data));
    })
}


Vue.use(VueScrollTo);
Vue.use(VueYoutube);
Vue.use(Transitions);

gsap.registerPlugin(CSSRulePlugin);

Vue.config.productionTip = false
ApiService.init();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
