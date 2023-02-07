<template>
    <div>
        <NavBar />

        <main>
            <div class="container">
                <router-view></router-view>
            </div>
        </main>

        <Footer />
    </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default {
    name: 'App',
    components: {
        NavBar,
        Footer,
    },
}
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
</style>>
