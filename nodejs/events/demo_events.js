// node js rất tốt trong sử lý sự kiện của ứng dụng

// tất cả hoạt động của máy tính đều là event

// giống như khi kết nối đến một file và mở nó

var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function() {
    console.log("The file is open");
});