<template>
    <div class="d-flex flex-wrap justify-content-sm-around">
        <div v-for="share in stockPortfolio" :key="share.id">
            <div class="wrapper">
                <div class="stock-title">
                    <h4 class="box-headers">{{share.id}}</h4>
                    <p class=" box-headers" style="font-size: 13px"> (I have {{share.quantity}} shares)</p>
                </div>
                <div class="stock-content">
                    <input type="text"
                           class="mr-auto"
                           placeholder="Amount to sell here"
                           v-model="share.quantity">
                    <button @click="sellStock(share)"
                            :class="{danger: share.quantity > share.quantity}">
                        Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                intendedQuantity: 0
            }
        },
        computed: {
            ...mapGetters(['stockPortfolio', 'funds']),
        },
        methods: {
            ...mapActions({sellShares: 'sellStock'}),
            sellStock(share){
                const order = {
                    stockID: share.id,
                    stockPrice: share.price,
                    quantity: share.quantity
                };
                this.sellShares(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

    .danger {
        border: solid red 1px;
        background-color: indianred;
        color: yellow;
    }

    .wrapper {
        border: solid lightgray 1px;
        width: 500px;
        margin-top: 20px;
        border-radius: 5px;
        box-shadow: 3px 3px 5px 6px #ccc
    }

    .stock-title {
        background-color: #ffbf00;
        color: indianred;
        display: flex;
        flex-wrap: wrap;
        padding: 7px 0 0 20px;
    }

    .box-headers {
        display: inline-block;
        vertical-align: baseline;
        margin: 0;
        padding: 10px -1px 10px 10px;
    }

    .stock-content {
        display: flex;
    }

    p {
        align-self: flex-end;
    }

    input {
        margin: 10px;
        padding: 10px;
    }

    button {
        background-color: indianred;
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