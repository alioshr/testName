<template>
    <body>
    <div class="container">
        <app-header></app-header>
        <transition name="fade" mode="out-in">
            <router-view id="content"></router-view>
        </transition>
    </div>
    </body>
</template>
<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            appHeader: Header
        },
        created(){
            this.$store.dispatch('initStocks')
        }
    }
</script>
<style scoped>
    body {
        margin: 20px;
    }
    #content {
        margin: 0 15px 0 15px;
    }
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity .5s;
    }

    .fade-leave-active {
        transition: opacity .5s;
        opacity: 0;
    }

</style>