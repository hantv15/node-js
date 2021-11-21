// HTTP là một hàm có sẵn
// Node JS dùng phương thức HTTP để truyền dữ liệu
var http = require('http');
// include file chứa module
var dt = require('./myfirstmodule');
// gọi hàm buil-in lấy giá trị đường dẫn url
var url = require('url');

// createServer là phương thức tạo một HTTP server 
// và createServer là một server object
http.createServer(function(req, res) {
    // HTTP header hỗ trợ hiển thị HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Viết một phản hồi về phía người dùng
    // res.write("The date and time are currently: " + dt.myDateTime());

    // url lấy đương dẫn url http://localhost:80080/summer
    // in ra /summer
    // res.write(req.url);

    // tạo một biến chứa giá query string của url
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;

    // Kết thức phản hồi
    res.end(txt);
}).listen(8080); // Server oject lắng nghe trên công 8080