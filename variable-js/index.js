// Phạm vi của biến
var myVar = 'out of function';

function do_something() {
    var myVar = "in of function";
    console.log(myVar);
}
// Kiểu đối tượng Object

var emptyObject = {} // cứ pháp cơ bản

// Khai báo đối tượng vối các thuộc tính
// Lưu ý thuộc tính ở javascript sẽ ở dạng key value

// Khai báo dạng key value kiểu 1
var person = {
        "name": "Clark",
        "surname": "Kent",
        "age": "36",
    }
    // Kiểu hai bỏ dấu ngoặc trước key
var car = {
    modal: "BMW X3",
    color: "white",
    doors: 5,
}

// Kiểu mảng

var colors = ["Red", "Yellow", "Green", "Orange"];
console.log(colors[0]);

// Kiểu hàm

var greeting = function() {
    return "Hi Hân";
}

console.log(typeof greeting); // Kiểm tra kiểu dữ liệu

console.log(greeting());