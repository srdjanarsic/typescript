var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ID = /** @class */ (function () {
    function ID(_id) {
        this.id = _id;
    }
    return ID;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(_id, _name, _role) {
        var _this = _super.call(this, _id) || this;
        _this.name = _name;
        _this.role = _role;
        return _this;
    }
    Programmer.prototype.getNameWithRole = function () {
        return this.id + ": " + this.getName() + " is " + this.role;
    };
    Programmer.prototype.getName = function () {
        return this.name;
    };
    return Programmer;
}(ID));
var obj = new Programmer("001", "Srdjan", "Frontend developer");
var nameAndRole = obj.getNameWithRole();
//obj.getName(); //won't work as it's private
console.log(nameAndRole);
