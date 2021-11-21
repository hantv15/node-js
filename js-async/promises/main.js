function myDisplay(some) {
    document.querySelector("#demo").innerHTML = some;
}

let myPromise = new Promise(function(resolve, reject) {
    let x = 0;

    if (x == 0) {
        resolve("Oke");
    } else {
        reject("Error");
    }
});
// myPromise() sẽ nhận vào 2 tham số
myPromise.then(
    function(value) { myDisplay(value); },
    function(error) { myDisplay(error) }
);