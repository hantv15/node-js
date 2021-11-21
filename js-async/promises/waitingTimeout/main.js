// callback

// setTimeout(function() {
//     myFunction("I love you!")
// }, 3000);

// function myFunction(some) {
//     document.querySelector('#demo').innerHTML = some;
// }

// promise

const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("I Love You!");
    }, 3000);
});

myPromise.then(function(value) {
    document.querySelector('#demo').innerHTML = value;
});