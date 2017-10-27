/**
 * Created by Administrator on 2017/10/26.
 */
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成");