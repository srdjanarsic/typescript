var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var obj1 = { name: "Srdjan" };
var obj2 = { surname: "Arsic" };
var obj = __assign({}, obj1, obj2);
console.log(obj);
console.log(typeof obj);
