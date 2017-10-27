/**
 * Created by Administrator on 2017/10/26.
 */
//var buf = new Buffer();
//var buf = new Buffer([10, 20, 30, 40, 50]);
//var buf = new Buffer("www.sdearn.com", "utf-8");

var buf = new Buffer(256);
var len = buf.write("www.sdearn.com");

console.log(len);

console.log(buf.toJSON());
