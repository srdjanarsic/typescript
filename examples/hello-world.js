var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
        // HelloWorld constructor
    }
    HelloWorld.prototype.out = function (str) {
        console.log(str);
    };
    return HelloWorld;
}());
var helloWorld = new HelloWorld();
helloWorld.out("TypeScript is AWESOME!!!");
