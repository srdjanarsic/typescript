function add(a, b) {
    return a + b;
}
function addWithGuard(a, b) {
    if (typeof a == "string" && typeof b == "string") {
        return parseFloat(a) + parseFloat(b);
    }
    return a + b;
}
console.log(add(1, 2)); // 3
console.log(add("1", "2")); // 12 (without guard)
console.log(addWithGuard(1, 2)); // 3
console.log(addWithGuard("1", "2")); // 3 (with guard)
