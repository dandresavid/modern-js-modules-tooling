// importing module
// import {addToCart, totalPrice as price, qt} from './shoppingCart.js';

// addToCart('bread', 5)
// console.log(price, qt)

// console.log('importing module')

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

//Avoid this kind of mix, use mostly just default and do not use object specific imports
// import add, {addToCart, totalPrice as price, qt} from './shoppingCart.js';
// console.log(price);

// import add,{cart} from './shoppingCart.js';
// add('Pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// await in this case is bloacking the execution
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

/*
const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return { title: data.at(-1).title, text: data.at(-1).body}
}

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
const ShoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice =237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`)
    };

    const orderStock = function(product, quantity) {
        console.log(`${quantity} ${product} ordered form supplier`)
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    }
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //undefined
*/

// Export NodeJS
// export.addToCart = function (product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart`)
// };

//Import NodeJS
// const {addToCart} = require('./shoppingCart.js')

// Don't do this V
//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        { product: 'bread', quantity: 5},
        { product: 'pizza', quantity: 2},
    ],
    user: {loggedIn: true},
}
const stateClone = Object.assign({},state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if(module.hot) {
    module.hot.accept();
}

class Person{
    #greeting = 'Hey'
    constructor(name) {
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`)
    }
}

const jonas = new Person('Jonas');
console.log('Jonas' ?? null);

import 'core-js/stable';

// Polifilling async fuctions
import 'regenerator-runtime/runtime'

