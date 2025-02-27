// //callBack functions
// //is ki output sy pehly hi hum baki code execute krna shuru kr dety hain.

// console.log("I am initial");
// setTimeout(function(){
//     console.log("I am inside");
// },5000);

// console.log("I am ending");

// console.log("Before");
// function fetchUser(){
//     // setTimeout(function(){
//     //     //console.log("I am important");
//     //     return {
//     //         name: "Malaika",
//     //         age:'21'
//     //     }
//     // },2000);
// }

// const returnUser = fetchUser();
// console.log(returnUser);
// console.log("End");
//=============================Correct CallBack Function===============================//
// console.log("Before");

// fetchUser(123, function(user) {
//     console.log(user);
// });
// function fetchUser(userid, callback) {
//     setTimeout(function() {
//         const fetchedUser = {
//             id: userid,
//             name: 'Malaika',
//             email: 'milli@gmail.com',
//             age: 21
//         };
//         callback(fetchedUser);
//     }, 2000);
// }

// console.log("End");

// console.log("Before");
// ============================Call the callback function with the response======================//
// function sendEmail(userEmail, callback) {
//     setTimeout(function () {
//         const response = {
//             status: true
//         };
//         callback(response); // Call the callback function with the response
//     }, 3000);
// }

// // Calling the function with a callback
// sendEmail('milli@gmail.com', function(response) {
//     console.log("Email sent successfully:", response);
// });

// console.log("End");

// console.log("Before");

// const promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve(1); // Now properly passed inside a function
//     }, 2000);
// });

// console.log(promise);

// promise
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) { // Fixed typo in function keyword
//         console.log(error);
//     });

// console.log("End");

const gitAPI = fetch('https:\\api.github.com\\users\\nasif1731');//gitAPI will get Promise as return
//console.log(gitAPI);
gitAPI.then((res)=>console.log(res))
.catch((err)=>console.log(err.message));

//search, detail of display.