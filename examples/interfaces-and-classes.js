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
// class (with interface implementation)
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
// extend class
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, teaches) {
        var _this = _super.call(this, name, age) || this;
        _this.teaches = teaches;
        return _this;
    }
    Teacher.prototype.getTeaches = function () {
        return this.teaches;
    };
    Teacher.prototype.setTeaches = function (teaches) {
        this.teaches = teaches;
    };
    return Teacher;
}(Person));
var teacher = new Teacher("Srdjan", 39, "JavaSctipt");
console.log(teacher.getName());
console.log(teacher.getAge());
console.log(teacher.getTeaches());
