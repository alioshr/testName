<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <p>You may save and load your data</p>
        <p>Click on 'End Day' to begin a new day!</p>
        <hr>
        <!-- Got to add a getter here instead so "DRY" does not happen with the "EUR" assignment-->
        <h4>Your Funds: {{funds}}</h4>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['funds']),
        }
    }
</script>
<style scoped>
    div {
        border: solid dimgray 1px;
        padding: 10px;
    }
</style>