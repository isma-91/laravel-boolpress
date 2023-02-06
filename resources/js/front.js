const { h } = require("vue");

require("./base");

import Vue from 'vue';
import App from './App.vue'; // si mette il ./ prima di App perchè altrimenti did efault senza mettere niente lo andrebbe a cercare nella cartella node modules.
import VueRouter from 'vue-router';

Vue.use(VueRouter);

new Vue({
    el: '#root',
    render: h => h(App),
})
