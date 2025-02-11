// Task 1

let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Notebook", price: 5, category: "Stationery"}
];

// function getProductsByCategory(products, category) {
//   return products.filter(product => product.category === category);  // => means such that
// };

// console.log(getProductsByCategory(products, "Electronics"));

// Task 2 - Array Methods

// function applyDiscount(products, discountRate) {
//     return products.map(product => ({
//         ...product,
//         price: product.price - (product.price * discountRate)
//     }

//     ));
// };

// console.log(applyDiscount(products, .10));


// Example of using the elipse below

// function sum3(x, y, z) {
//     return x + y + z;
// }

// let numbers = [1, 2, 4]

// console.log(sum3(...numbers));



// Task 3: Array Methods - Reduce

let sales = [250, 400, 150, 900, 1200];

function calculateTotalRevenue(sales) {
    return sales.reduce((total, sale)=>total+sale,0);
}

console.log(calculateTotalRevenue(sales));