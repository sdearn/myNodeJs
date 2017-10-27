/**
 * Created by Administrator on 2017/10/26.
 */
var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');

//readerStream.setEncoding("UTF8");
//
//readerStream.on('data', function(chunk) {
//    data += chunk;
//});
//
//readerStream.on('end', function() {
//    console.log(data);
//});
//
//readerStream.on('error', function(err) {
//    console.log(err.stack);
//});
//
//data += "\n我的官网：www.sdearn.com";

var writerStream = fs.createWriteStream('output.txt');

//writerStream.write(data, 'UTF8');
//
//writerStream.end();
//
//writerStream.on('finish', function() {
//    console.log("写入完成");
//});
//
//writerStream.on('error', function(err) {
//    console.log(err.stack);
//});

readerStream.pipe(writerStream);


console.log("The program is finished");
