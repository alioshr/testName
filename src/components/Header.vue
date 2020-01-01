<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand"><a>Stock Trade</a></router-link>
        <div class="d-inline">
            <ul class="navbar-nav mr-auto">
                <router-link :to="{ name: 'portfolio'}"
                             tag="li" class="nav-item nav-link"><a
                             class="text-decoration-none">Portfolio</a></router-link>
            </ul>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link :to="{name: 'stocks'}"
                             tag="li" class="nav-item nav-link">
                    <a class="text-decoration-none">Stocks</a>
                </router-link>
            </ul>
        </div>
        <div class="collapse navbar-collapse end-day">
            <div class="navbar-nav ml-auto">
                <li class="nav-item nav-link"
                     @click="endDay">End Day</li>
            </div>
        </div>
        <div class="d-inline" @click="isDropping = !isDropping">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"
                       href="#"
                       role="button"
                       data-toggle="dropdown"
                       aria-haspopup="true"
                       aria-expanded="false">
                        Save & Load <span class="dropdown-toggle-no-caret"></span>
                    </a>
                    <!-- I must understand why it does not work below-->
                    <div class="dropdown-menu"
                         :class="{show: isDropping}"
                         aria-labelledby="navbarDropdown">
                        <a @click="saveData" class="dropdown-item " href="#">Save Data</a>
                        <a @click="loadData" class="dropdown-item" href="#">Load Data</a>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <strong class="navbar-text" style="color: dimgray">Funds: {{funds}}</strong>
        </div>
    </nav>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                isDropping: false
            }
        },
        computed: {
            ...mapGetters(['funds', 'stockPortfolio', 'stocks'])
        },
        methods: {
            ...mapActions({
                randomizeStocks : 'randomizeStocks',
                fetchData : 'loadData'
            }),
            endDay() {
                return this.randomizeStocks()
            },
            saveData() {
                const data = {
                    funds: this.funds,
                    stockPortfolio: this.stockPortfolio,
                    stocks: this.stocks
                };
                this.$http.put('data.json', data)
            },
            loadData(){
                this.fetchData()
            }
        }
    }

</script>
<style scoped>
    a {
        color: dimgray;
    }

    a:hover{
        color: black !important;
    }

    .end-day {
        cursor: pointer;
    }
</style>