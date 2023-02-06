const { h } = require("vue");

require("./base");

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import PageHome from './pages/PageHome';
import PagePosts from './pages/PagePosts';
import PageSinglePost from './pages/PageSinglePost';
import PageAbout from './pages/PageAbout';
import Page404 from './pages/Page404';

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: PageHome,
        props: true,
    },
    {
        path: "/posts",
        name: "posts",
        component: PagePosts,
        props: true,
    },
    {
        path: "/posts/:slug",
        name: "singlePost",
        component: PageSinglePost,
        props: true, // passa i valori della rotta come props, quindi ci permette di poter estrarre il valore dell'indirizzo, del link tramite props classice di vue, altrimenti dovremmo fare un giro più lungo per richiamarle ogni volta. Possiamo passare anche più di un valore, in questo caso abbiamo passato solo ":slug", ma possiamo aggiungerne altri, semplicemente dividendole con lo "/" e poi mettendo sempre i ":" prima del nuovo valore. Ad esempio: "/posts/:slug/:author"
    },
    {
        path: "/about",
        name: "about-us",
        component: PageAbout,
        props: true,
    },
    {
        path: "*",
        name: "page404",
        component: Page404,
        props: true,
    },
];

const router = new VueRouter({
    // chiamandola router possiamo usare l'abbreviazione sotto quando instanziamo la new Vue.
    mode: "history", // toglie l'# dagli indirizzi ma si deve modificare il web.php per "acchiappare" tutti gli indirizzi e essere mandati alla home per poi essere reindirizzati dal vueRouter alla pagina giusta, se esistente.
    routes, //È sempre un oggetto, questa è solo una abbreviazione che sta per "routes = routes", l'importante è che ovviamente la variabile che richiamiamo abbia lo stesso nome della chiave, difatti il nostro array di rotte lo abbiamo chiamato "routes"
});

new Vue({
    el: '#root',
    render: h => h(App),
    router //È sempre un oggetto, come sopra,  questa è solo una abbreviazione che sta per "router = router", l'importante è che ovviamente la variabile che richiamiamo abbia lo stesso nome della chiave, difatti sopra dove instanziamo il new VueRouter l'abbiamo chiamata uguale.
})
