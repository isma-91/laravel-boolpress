<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
            <div class="container-fluid">
                <!--
                    Ricordarsi che per il link alle pagione fatte con il vue router DOBBIAMO usare "router-link" e non il classico "anchor", dopodichè,se abbiamo dato un nome alla rota con la chiave "name" nel vueRouter dobbiamo mettere i ":" prima del to, aprire le parentesi graffe e all'interno specificare il nome della rotta e non la rotta specifica come dovremmo fare con il to semplice senza ":". Praticamente con i 2 punti prende i comandi, senza prende la stringa stessa.
                -->
                <router-link :to="{name: 'home'}" class="navbar-brand">Boolpress</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{name: 'posts'}" class="nav-link">Posts</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: 'about-us'}" class="nav-link">About-us</router-link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
