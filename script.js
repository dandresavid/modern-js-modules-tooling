// importing module
// import {addToCart, totalPrice as price, qt} from './shoppingCart.js';

// addToCart('bread', 5)
// console.log(price, qt)

// console.log('importing module')

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

//Avoid this kind of mix, use mostly just default.
// import add, {addToCart, totalPrice as price, qt} from './shoppingCart.js';
// console.log(price);

import add,{cart} from './shoppingCart.js';
add('Pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart)
