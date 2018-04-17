let obj1 = {name: "Srdjan"};
let obj2 = {surname: "Arsic"};

let obj = {...obj1, ...obj2};

console.log(obj);
console.log(typeof obj);