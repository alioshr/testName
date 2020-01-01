import Vue from 'vue'
import Vuex from 'vuex'

import stocks from "@/store/modules/stocks";
import portfolio from "@/store/modules/portfolio";
import * as actions from './action'

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
modules: {
    stocks,
    portfolio
}
});

