//Array Destructuring
//Ex1
function getFirstLast(array) {
    const [firts] = array;
    const last = array.slice(-1)[0];
    return [firts,last]
}
console.log(getFirstLast([1, 2, 3, 4]));
//Ex2
function swapElements(arr) {
    const [a,b,c,d,e] = arr;
    return [a,d,c,b,e];
}
console.log(swapElements([1, 2, 3, 4, 5]));

//Object Destructuring
//Ex1
const user = {
    id: 1,
    personalInfo: {
      name: "javascript",
      contact: {
        email: "javascript@email.com",
        phone: "123-456-7890",
      },
    },
};
  
function getUserInfo(user) {
    const {name, contact:{email}} = user.personalInfo;
    return { name, email };
}
console.log(getUserInfo(user));
// Ex2
function createProduct({ name, price, category = "general", inStock = true }) {
    return {
        name,
        price,
        category,
        inStock,
    };
}
const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);

// Promises
// Ex1
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
delay(2000).then(() => console.log("2 seconds passed"));

//Ex2
function fetchMultipleData(urls) {
    return Promise.all(
        urls.map((url) =>
            fetch(url).then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch ${url}: ${res.status}`);
                }
                return res.json();
            })
        )
    );
  }
fetchMultipleData(["/api/user/1", "/api/user/2"]).then((users) =>
    console.log(users)
);

//Async/await
//Ex1
async function processOrder (orderId){
    const order = await getOrder(orderId);
    const user = await getUser(orderId);
    const product = await getProducts(order.productIds);
    return {order,user,product};
}

//Ex2
async function safeApiCall(apiFunction, ...args) {
    try {
        const result = await apiFunction(...args);
        return result;
    } catch (error) {
        console.error("API call failed:", error);
        return null;
    }
}