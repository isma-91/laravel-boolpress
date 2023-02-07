<template>
    <div>
        <h1>HomePage</h1>
        <div class="grid">
            <div v-for="post in arrRandom" :key="post.id" class="content">
                <router-link :to="{ name: 'singlePost', params: { slug: post.slug } }">
                    <img :src="post.image" :alt="post.title">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arrRandom: null,
        }
    },
    created(){
        axios.get('api/posts/homegrid').then(r => this.arrRandom = r.data.results);
    }
}
</script>

<style lang="scss" scoped>
    .grid{
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
    .content {
        width: calc((100% - 1.5rem * 2) / 3);
        border-radius: 30px;
        overflow: hidden;
    }

    .content img {
        width: 100%;
        object-fit: cover;
    }
</style>
