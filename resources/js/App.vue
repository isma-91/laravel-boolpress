<template>
    <div>

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
