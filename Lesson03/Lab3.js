// // //Bài 1
// // Function 1
// const multiply = (a,b)=> a*b;
  
// // Function 2
// const isPositive = (number)=> number >=0;

// // Function 3
// const getRandomNumber = () => Math.random();

// // Function 4
// document.addEventListener('click', ()=>{
//     console.log("Clicked");
// });

//Bài2
const createUser = (name="Anonymous", age=18, isAdmin=false)=>({
    name,
    age,
    isAdmin
});  
console.log(createUser());

//Bài3
const mergeArrays = (...arrays)=> [].concat(...arrays);
console.log(mergeArrays([1,2], [3,4,5], [6]));

const sumAll = (...numbers)=> numbers.reduce((total, n)=> total+n, 0);
console.log(sumAll(1,3,6,9));

const createProduct =(
    name = "Product",
    price = 0,
    inStock = true
)=>{
    return {
      name,
      price,
      inStock,
    };
};
console.log(createProduct("iPhone 17 Pro Max", 37000000, true));

// //Bài 4
const shoppingCart = (customerName, ...products)=>{
    return {
      customer: customerName,
      products: products,
      totalItems: products.length,
    };
};
console.log(shoppingCart("Trường", "iPhone 17", "Macbook Pro M3", "Apple Watch SE 2"));