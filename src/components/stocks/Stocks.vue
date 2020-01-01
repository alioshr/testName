<template>
    <div class="d-flex flex-wrap justify-content-sm-around">
        <div v-for="share in stocks" :key="share.id" :share="share">
            <div class="wrapper">
                <div class="stock-title">
                    <h4 class="box-headers">{{share.id}}</h4>
                    <p class="box-headers" style="font-size: 13px">(Price: {{share.price}} EUR)</p>
                </div>
                <div class="stock-content">
                    <input type="text"
                           class="mr-auto"
                           placeholder="How many shares?"
                           v-model.number="share.quantity">
                    <button @click="buyShares(share)"
                            :class="{danger: insufficientFunds(share)}"
                            :disabled=" insufficientFunds(share) ||share.quantity <= 0 || !Number.isInteger(share.quantity)">
                        {{insufficientFunds(share) ? 'Insufficient funds!' : 'Buy'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['stocks', 'funds']),
        },
        methods: {
            buyShares(share) {
                const order = {
                    stockID: share.id,
                    stockPrice: share.price,
                    quantity: share.quantity
                };
                console.log(order);
                this.$store.dispatch('buyShares', order);
                this.quantity = 0;
            },
            insufficientFunds(share){
                return share.quantity * share.price > this.funds
            }
        }
    }
</script>
<style scoped>

    .danger{
        border: solid red 1px;
        background-color: indianred;
        color: yellow;
    }

    .wrapper {
        border: solid lightgray 1px;
        width: 500px;
        margin-top: 20px;
        border-radius: 5px;
        box-shadow: 3px 3px 5px 6px #ccc;
    }

    .stock-title {
        background-color: lightskyblue;
        color: royalblue;
        display: flex;
        flex-wrap: wrap;
        padding: 7px 0 0 20px;
    }

    .box-headers {
        display: inline-block;
        margin: 0;
        padding: 10px -1px 10px 10px;
    }

    p {
        align-self: flex-end;
    }

    .stock-content {
        display: flex;
    }

    input {
        margin: 10px;
        padding: 10px;
    }

    button {
        background-color: royalblue;
        color: white;
        padding: 0 20px;
        border-radius: 5px;
        justify-self: center;
        margin: 10px;
    }

    ::placeholder {
        font-size: 15px;
    }

</style>