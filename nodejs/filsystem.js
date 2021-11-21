// Khởi tạo mô dun http để chuyển dữ liệu
var http = require('http');

// Khợi tạo một mô dun làm việc với system:
// Read files
// Create files
// Update files
// Delete files
// Rename files

var fs = require('fs');

http.createServer(function(req, res) {
    // Thêm mới một file kèm nội dung
    // fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });


    // fs.open('mynewfile1.txt', 'h', function(err, file) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // })

    // fs.unlink('mynewfile1.txt', function(err) {
    //     if (err) throw err;
    //     console.log('File deleted!');
    // });
    fs.readFile('./demofile1.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

}).listen(8080);