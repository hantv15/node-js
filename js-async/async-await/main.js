// function myDisplay(value) {
//     document.querySelector("#demo").innerHTML = value;
// }
// Sô sánh cú pháp khi sử dụng async và Promise

// async

// async function myFunction() {
//     return "Async: Hello";
// }

// Promise
// function myFunction() {
//     return Promise.resolve("Promise: Hello");
// }

// myFunction().then(
//     function(value) {
//         myDisplay(value);
//     },
//     function(error) {
//         myDisplay(value);
//     }
// )

// Một cách khác nếu muốn trả về một trị luôn

// async function myFunction() {
//     return "Hello";
// }

// myDisplay().then(
//     function(value) {
//         myDisplay(value);
//     }
// );

// Await Syntax

// basic syntax

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//         resolve("I love you!!!");
//     })
//     document.querySelector("#demo").innerHTML = await myPromise;
// }

// without reject

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//         resolve("No reject: I love you!!!");
//     })
//     document.querySelector("#demo").innerHTML = await myPromise;
// }

// set time out
// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//         setTimeout(function() { resolve("Set Time Out: I love you"); }, 3000);
//     });
//     document.querySelector('#demo').innerHTML = await myPromise;
// }

async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', '../promises/waitingFile/myCar.html');
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                resolve("File not found");
            }
        }
        req.send();
    });
    // get id và write ra màn hình
    document.querySelector("#demo").innerHTML = await myPromise;
}

myDisplay();