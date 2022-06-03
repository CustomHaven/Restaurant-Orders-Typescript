// https://www.codecademy.com/courses/learn-typescript/projects/restaurant-orders
import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below: //Q3 - Q5
function getMaxPrice(price: PriceBracket) {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case  PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
     return 30.0;
  }
}
/// Add your getOrders() function below: //Q6 - Q10
function getOrders(price: PriceBracket, orders: Order[][]) {
  let filteredOrders : Order[][] = [];

  for (let i = 0; i < orders.length; i++) {
    const result = orders[i].filter((order: Order) => order.price <= getMaxPrice(price));
    filteredOrders.push(result);
  }
  // console.log(filteredOrders);
  return filteredOrders;
}



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

function printOrders(restaurants:Restaurant[], orders:Order[][]) {
  restaurants.forEach((restaurant:Restaurant, index:number) => {
    if (orders[index].length > 0) {
      console.log(restaurant.name);

      orders[index].forEach((order) => {
        console.log(`- ${order.name}: $${order.price}`)
      })

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
const elligibleOrders = getOrders(PriceBracket.High, orders);
console.log(elligibleOrders);
printOrders(restaurants, elligibleOrders);
