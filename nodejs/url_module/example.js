// khai báo biến sử dụng hàm buil-in url
var url = require('url');
// khai báo biến gán địa chỉ url
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// khai báo biên chứa hàm trả về object URL
var q = url.parse(adr, true);
// console log mỗi thuộc tính
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
// dùng câu lệnh query trả về object của hàm trả về object url
var qdata = q.query; // trả về một object: { year: 2017, month: 'february'}

console.log(qdata.month);