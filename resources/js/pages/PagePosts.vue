<template>
    <div>
        <h1>PostsIndexPage</h1>
        <div class="row g-3">
            <div v-for="post in arrPosts" :key="post.id" class="col-sm-6 col-md-4">
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
    </div>
</template>

<script>
export default {
    data(){
        return {
            arrPosts: [],
        }
    },
    created(){
        axios.get('/api/posts').then(response => this.arrPosts = response.data.results);
    }
}
</script>

<style>

</style>
