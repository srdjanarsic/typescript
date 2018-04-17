var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    MyMath.Multiply = function (a, b) {
        return a * b;
    };
    MyMath.PI = Math.PI;
    return MyMath;
}());
var Utility;
(function (Utility) {
    var MyMath = /** @class */ (function () {
        function MyMath() {
        }
        MyMath.Multiply = function (a, b) {
            return a * b;
        };
        return MyMath;
    }());
    Utility.MyMath = MyMath;
    var MyString = /** @class */ (function () {
        function MyString() {
        }
        MyString.Concentrate = function () {
            var strArr = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                strArr[_i] = arguments[_i];
            }
            return strArr.reduce(function (acc, item) {
                return acc + item;
            });
        };
        return MyString;
    }());
    Utility.MyString = MyString;
})(Utility || (Utility = {}));
// static method
console.log(MyMath.Multiply(3, 3));
// static property
console.log(MyMath.PI);
// using namespace
console.log(Utility.MyString.Concentrate("Srdjan", " ", "Arsic"));
