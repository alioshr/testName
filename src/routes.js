import Home from './components/Home.vue'

const Portfolio = resolve => {
    require.ensure(['./components/user/Portfolio.vue'], () => {
        resolve(require('./components/user/Portfolio.vue'))
    })
};

const Stocks = resolve => {
    require.ensure(['./components/stocks/Stocks.vue'], () => {
        resolve(require('./components/stocks/Stocks.vue'))
    })
};

export const routes = [
    {path: '', name: 'home', component: Home },
    {path: '/portfolio', name: 'portfolio', component: Portfolio},
    {path: '/stocks', name: 'stocks', component: Stocks},
    {path: '*', redirect: {name: 'home'}}
];