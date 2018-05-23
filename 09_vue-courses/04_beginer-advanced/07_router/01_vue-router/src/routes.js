import ProductList from './ProductList.vue';
import Card from './Cart.vue';

export const routes = [
    { path: '', component: ProductList },
    { path: '/card', component: Card },
    { path: '*', component: { template: `<h1>Page not found</h1>`}}
]
