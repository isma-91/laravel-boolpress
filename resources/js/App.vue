<template>
    <div>
        <div class="container">
            <h1  class="text-center m-4">Post FrontOffice</h1>
            <ul>
                <!-- <li v-for="post in arrPosts" :key="post.id">{{ post.title }}</li> -->
                <div class="row g-3">
                    <div v-for="post in arrPosts" :key="post.id" class="col-sm-6 col-md-4">
                        <div class="card h-100">
                            <img :src="post.image" :alt="post.title">
                            <div class="card-body d-flex flex-column">
                                <h4 class="card-title">{{ post.title }}</h4>
                                <p class="card-text flex-grow-1">{{ post.excerpt }}</p>
                                <a :href="'/posts/' + post.slug" class="btn btn-primary"> Leggi</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            arrPosts: [],
        };
    },
    created() {
        axios.get('/api/posts')
        .then(response => this.arrPosts = response.data.results);
    }
}
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
</style>>
