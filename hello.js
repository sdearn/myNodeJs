/**
 * Created by Administrator on 2017/10/26.
 */
//exports.world = function() {
//    console.log("Hello World");
//}

function Hello() {
    var name;
    this.setName = function(theName) {
        name = theName;
    }
    this.sayHello = function() {
        console.log("Hello " + name);
    }
}

module.exports = Hello;