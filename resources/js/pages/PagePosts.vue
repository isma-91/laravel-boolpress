<template>
    <div>
        <div v-if="results">
            <h1>PostsIndexPage</h1>
            <div class="row g-3">
                <div v-for="post in results.data" :key="post.id" class="col-sm-6 col-md-4">
                    <div class="card h-100">
                        <img :src="post.image" :alt="post.title" class="card-img-top">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p class="card-text flex-grow-1">{{ post.excerpt }}</p>
                            <router-link :to="{ name: 'singlePost', params: { slug: post.slug } }" class="btn btn-primary">Visualizza</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="mt-4">
                <ul class="pagination">
                    <li
                        class="page-item"
                        :class="{disabled: results.current_page == 1}"
                        @click="changePage(results.current_page - 1)"
                    >
                    <!-- :class ci permette di impostare una classe dinamica, mettiamo come chiave la classe che vogliamo venga abilitata e dopo i 2 punti la/le condizione/i che vogliamo vengano rispettate per far sì che si abiliti la classe  -->
                        <span class="page-link" v-if="results.current_page > 1">Previous</span>
                    </li>

                    <!-- iteriamo per generare tanti bottoni quante sono il numero delle pagine che sappiamo grazie alle informazioni complete che abbiamo estrapolato con axios -->
                    <li
                        v-for="page in results.last_page"
                        :key="page"
                        class="page-item"
                        :class="{active: results.current_page == page}"
                        @click="changePage(page)"
                    >
                        <span class="page-link" href="">{{ page }}</span>
                    </li>

                    <li
                        class="page-item"
                        :class="{disabled: results.current_page == results.last_page}"
                        @click="changePage(results.current_page + 1)"
                    >
                        <span class="page-link" v-if="results.current_page < results.last_page">Next</span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // arrPosts: [], dopo aver fatto la pagination cambiamo il nome di questo array, perchè appunto la pagination non ci restituisce più un array ma un oggetto, così possiamo gestire più facilmente tutto il resto.
            results: null,
        }
    },
    methods: {
        changePage(page) {
            axios.get('/api/posts?page=' + page)
                .then(response => this.results = response.data.results);
            //Con la pagination axios ci restituisce un oggetto, per accedere all'array dei posts dovremmo scrivere response.data.results.data (il secondo data è quello che ci restituisce la pagination), perciò noi scriviamo solo response.data.results e lo buttiamo dentro un oggetto che inizializiamo nullo, così noi prendiamo tutte le informazioni che axios con la paginate ci restituisce invece di prendere solo l'array dei post. Dato che tutte le altre informazioni ci serviranno appunto per fare la pagination con questa funzione. Ci passiamo come argomento la pagina che conosciamo appunti grazie al fatto che abbiamo estrapolato tutte le informazioni anzichè solo l'array e così modifichiamo l'indirizzo web.
        }
    },
    created() {
        this.changePage(1);
        //per far sì che quando apriamo il sito ci ritroviamo nella prima pagina semplicemente chiamiamo il metodo che cambia le pagine e gli passiamo come argomento (1) così che carichi la pagina numero 1.
    }
    // created(){
    //     axios.get('/api/posts').then(response => this.arrPosts = response.data.results);
    // }, Questo created lo usavamo senza la pagination, ma con la pagination e il metodo che abbiamo fatto per cambiare pagina, la chiamata all'API la facciamo fare direttamente dal metodo che ne ha bisogno ogni volta per appunto cambiare pagina, mentre per far sì che quando apriamo il sito ci ritroviamo nella prima pagina nel "nuovo" create semplicemente chiamiamo il metodo che cambia le pagine e gli passiamo come argomento (1) così che carichi la pagina numero 1.
}
</script>

style <style lang="scss" scoped>
.pagination{
    cursor: pointer;
}
</style>
