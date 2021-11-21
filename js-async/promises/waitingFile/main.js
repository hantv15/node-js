// callback
function myDisplay(value) {
    document.querySelector('#demo').innerHTML = value;
}

// sử dụng callback và Ajax để write htm từ một file khác
// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', './myCar.html');
//     req.onload = function() {
//         if (req.status == 200) {
//             myCallback(this.responseText);
//         } else {
//             myCallback("Error: " + req.status);
//         }
//     }
//     req.send();
// }

// getFile(myDisplay);

// Promise
let myPromise = new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', './myCar.html');
    req.onload = function() {
        if (req.status == 200) {
            resolve(req.responseText);
        } else {
            reject("File not Found");
        }
    };
    req.send();
});

myPromise.then(
    function(value) {
        myDisplay(value);
    },

    function(error) {
        myDisplay(value);
    }
);