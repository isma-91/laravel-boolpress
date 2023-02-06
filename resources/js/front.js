const { h } = require("vue");

require("./base");

import Vue from 'vue';
import App from './App.vue'; // si mette il ./ prima di App perchè altrimenti did efault senza mettere niente lo andrebbe a cercare nella cartella node modules.
import VueRouter from 'vue-router';
import PageHome from './pages/PageHome';
import PagePosts from './pages/PagePosts';
import PageSinglePost from './pages/PageSinglePost';
import PageAbout from './pages/PageAbout';

Vue.use(VueRouter);

const routes =
[
    {
        path:'/',
        name: 'home',
        component: PageHome,
    },
    {
        path:'/posts',
        name: 'posts',
        component: PagePosts,
    },
    {
        path:'/posts/:slug',
        name: 'singlePost',
        component: PageSinglePost,
    },
    {
        path:'/about',
        name: 'about-us',
        component: PageAbout,
    },
];

const router = new VueRouter({
    // chiamandola router possiamo usare l'abbreviazione sotto quando instanziamo la new Vue.
    // mode: "history", // toglie l'# dagli indirizzi ma si deve modificare
    routes, //È sempre un oggetto, questa è solo una abbreviazione che sta per "routes = routes", l'importante è che ovviamente la variabile che richiamiamo abbia lo stesso nome della chiave, difatti il nostro array di rotte lo abbiamo chiamato "routes"
});

new Vue({
    el: '#root',
    render: h => h(App),
    router //È sempre un oggetto, come sopra,  questa è solo una abbreviazione che sta per "router = router", l'importante è che ovviamente la variabile che richiamiamo abbia lo stesso nome della chiave, difatti sopra dove instanziamo il new VueRouter l'abbiamo chiamata uguale.
})
