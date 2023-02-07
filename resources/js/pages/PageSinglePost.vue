<template>
    <div v-if="post">
        <h1>{{post.title}}</h1>

        <img :src="post.image" :alt="post.title">

        <p>
            {{ post.content }}
            <!-- Lo slug del post è: {{ slug }}
            Grazie al fatto che abbiamo passato i valori tramite props, basta scrivere così, altrimenti avremmo dovuto scrivere:
            {{ $route.params.slug }} -->
        </p>
    </div>
</template>

<script>
export default {
    props: [
        'slug', // avendo messo "props:true" nel file js dove specifichiamo le rotte, nella rotta specifica, possiamo prendere i valori anche dell'indirizzo, del link semplicemente tramite props. Si possono aggiungere anche più "valori" e poi richiamarli qui con lo stesso nome per ottenerne il valore.
    ],
    data(){
        return {
            post: null,
        }
    },
    created(){
        axios.get('/api/posts/' + this.slug).then(response => this.post = response.data.results);
        //questo this.slug è possibile prenderlo grazie alla props che abbiamo fatto
    }
}
</script>

<style>

</style>
