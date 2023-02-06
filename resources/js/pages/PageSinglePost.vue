<template>
    <div>
        <h1>SinglePostPage</h1>

        <p>
            Lo slug del post è: {{ slug }}
            <!-- Grazie al fatto che abbiamo passato i valori tramite props, basta scrivere così, altrimenti avremmo dovuto scrivere:
            {{ $route.params.slug }} -->
        </p>
    </div>
</template>

<script>
export default {
    props: [
        'slug', // avendo messo "props:true" nel file js dove specifichiamo le rotte, nella rotta specifica, possiamo prendere i valori anche dell'indirizzo, del link semplicemente tramite props. Si possono aggiungere anche più "valori" e poi richiamarli qui con lo stesso nome per ottenerne il valore.
    ],
}
</script>

<style>

</style>
