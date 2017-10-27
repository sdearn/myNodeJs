/**
 * Created by Administrator on 2017/10/26.
 */
var fs = require("fs");

//var data = fs.readFileSync('input.txt');

fs.readFile('inputa.txt', function(err, data) {
    if(err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log("The program is finished");