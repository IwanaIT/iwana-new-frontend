import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// ------------ css ----------
import './assets/css/bootstrap.min.css';
import './assets/css/themify-icons.css';
import './assets/css/animate.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';

import VueScrollTo from 'vue-scrollto';
import VueYoutube from 'vue-youtube';
import { gsap } from 'gsap';
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

import jQuery from 'jquery';
window.$ = jQuery;

import 'jquery.mb.ytplayer';



Vue.use(VueScrollTo);
Vue.use(VueYoutube);

gsap.registerPlugin(CSSRulePlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
