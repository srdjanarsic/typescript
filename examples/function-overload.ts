function add(a:string, b:string): string;
function add(a:number, b:number): number;
function add(a:any, b:any): any{
    return a + b;
}

function addWithGuard(a:string, b:string): string;
function addWithGuard(a:number, b:number): number;
function addWithGuard(a:any, b:any): any{
    if(typeof a == "string" && typeof b == "string"){
        return parseFloat(a) + parseFloat(b);
    }
    
    return a + b;
}


console.log(add(1,2)); // 3
console.log(add("1","2")); // 12 (without guard)

console.log(addWithGuard(1,2)); // 3
console.log(addWithGuard("1","2")); // 3 (with guard)