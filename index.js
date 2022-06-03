"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.codecademy.com/courses/learn-typescript/projects/restaurant-orders
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below: //Q3 - Q5
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
    }
}
/// Add your getOrders() function below: //Q6 - Q10
function getOrders(price, orders) {
    let filteredOrders = [];
    for (let i = 0; i < orders.length; i++) {
        const result = orders[i].filter((order) => order.price <= getMaxPrice(price));
        filteredOrders.push(result);
    }
    // console.log(filteredOrders);
    return filteredOrders;
}
// getOrders(PriceBracket.High, orders);
/// Add your printOrders() function below: Q12 - Q15
// function printOrders(restaurants: Restaurant[], filteredOrders: Order[][]) {
//   orders.forEach((order, index) => {
//     if(order.length > 0) {
//       console.log(`${restaurants[index].name}`)
//       order.forEach(item => {
//         console.log(`- ${item.name}: ${item.price}`)
//       });
//     }
//   });
// }
function printOrders(restaurants, orders) {
    restaurants.forEach((restaurant, index) => {
        if (orders[index].length > 0) {
            console.log(restaurant.name);
            orders[index].forEach((order) => {
                console.log(`- ${order.name}: $${order.price}`);
            });
            // const restOrders: Order[][] = getOrders(restaurant.priceBracket, orders);
            // restOrders.forEach((order, i) => {
            //   console.log(`- Order ${order[i].name}: $${order[i].price}`)
            // })
            // const result = orders[index].forEach((order : Order) => {
            //   order.price <= getMaxPrice(restaurant.priceBracket);
            // });
        }
    });
}
/// Main
// Q11 Q12
const elligibleOrders = getOrders(orders_1.PriceBracket.High, orders_1.orders);
console.log(elligibleOrders);
printOrders(restaurants_1.restaurants, elligibleOrders);
