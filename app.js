// console.log("m sb se phle render honga");

// for(var i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log("hello2");

// setInterval(function () {                // infinite loop
//   console.log("hello 4 seconds");
// }, 4000);
// clearInterval(1000);

// setTimeout(function () {
//   console.log("hello 3 seconds");
// }, 3000);

// console.log("hello");
// var obj;

// function foo(callback) {
//     console.log("asif");
//   setTimeout(function () {
//     var obj = {
//       name: "ali",
//       email: "ali@gmail.com",
//     };
//     callback(obj)
//   }, 3000);
// }

// function abc(data) {
//   console.log(data);
// }
// foo(abc)

// setTimeout(function(){
//     console.log(obj);
// },4000)

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     console.log("data-->",data);
//   })
//   .catch(function (err) {
//     console.log("err-->",err);
//   });

// // callback example:
// function abc(){
//     setTimeout(function(){
//         var xyz = "hello"
//     })
// }


// Example 1: User Login Simulation

// function loginUser(username, password, callback) {
//     console.log("Authenticating user...");
    
//     // Simulating a server delay of 2 seconds
//     setTimeout(function () {
//         if (username === "nadeem" && password === "12345") {
//             callback(null, { username: "nadeem", role: "admin" });
//         } else {
//             callback("Invalid username or password", null);
//         }
//     }, 2000);
// }

// function displayUserInfo(err, user) {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("Login successful!");
//         console.log("User Info:", user);
//     }
// }


// // Call the function
// loginUser("nadeem", "12345", displayUserInfo);



// Example 2: Fetch Data from API Simulation
function fetchDataFromAPI(apiUrl, callback) {
    console.log("Fetching data from API...");

    // Simulating a network request with a delay of 3 seconds
    setTimeout(function () {
        const fakeData = {
            id: 1,
            name: "Product A",
            price: 100,
        };

        console.log("Data received from API.");
        callback(fakeData);
    }, 3000);
}

function processAPIData(data) {
    console.log("Processing API data...");
    console.log("Product Details:", data);
}

// Call the function
fetchDataFromAPI("https://fakeapi.com/product", processAPIData);
