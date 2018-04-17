# TypeScript

Short Typescript reference.
* [Types](#types)
* [Optional, default, rest, spread](#optional-default-rest-spread)
* [Functions annotation and overloading](#functions-annotation-and-overloading)
* [Interface, Class, Namespace](#interface-class-namespace)
* [Async - await](#async---await)

_Note: To run examples run `tsc filename.ts` to compile and `node filename.js` to execute inside `examples` directory._

## Types

**Explicit variable type**\
_Except Tuple. Tuple has no explicit annotation._

```ts
let myString: string = "I'm string";
let myNumber: number = 365;
let myBoolean: boolean = true;
let myArray: number[] = [1,2,3]; // array first way
let myArray: Array<number> = [1,2,3]; // array second way
let myTuple: [string, number, boolean] = ["tuple", 1, true]; // tuple (no built in explicit annotation)
let myAny: any = "Variable myAny can cast to any type";
let u: undefined = undefined;
let n: null = null;
enum Color {Low, High} // enum members by default starts from 0
function foo(): void {} // void
function infiniteLoop(): never {
    while(true){}
}
```

**Implicit variable type**

```ts
let myStr = "This is a string"; // myString is a has string type and can't cast
```

**Dynamic types**

```ts
let complexType = {id:1, name:"Srdjan"};
// complexType will get interface {id:number, name: string}
// only object that contains this signature can be asigned to complexType
```

**any**

When using `any` we can use variable in the same way as natively in javascript.
```ts
let myAny: any = {foo:"bar"}; // assign
myAny = 1; // this works
myAny = {id: 1}// this works too
```

**Union and alias**

```ts
// union
let strOrNum: number | string = 1;
let strOrNum: number | string = "1";

//alias
type StringOrNumber = string | number; // alias
let strOrNum: StringOrNumber = 1;
let strOrNum: StringOrNumber = "1";
```

## Optional, default, rest, spread

```ts
// optional
function (arg1:string, optionalArg?: string): void {}

// default
function (arg1:string, argWithDefaultVal: number = 1): void {}

// rest
function (arg1:string, ...argsArray: numbers[]): void {}

// spread
let obj = {...obj1, ...obj2};
```

## Functions annotation and overloading

**Anotation**

Variable `cb` contains function with the same signature as `execCallback` function defines.

```ts
function execCallback(callback: (arg:string) => string ){
    console.log(callback("ok"));
}

var cb = (arg:string)=>{
    return arg + "!";
}

execCallback(cb);
```

**Overloading**

```ts
function add(a:string, b:string): string;
function add(a:number, b:number): number;
function add(a:any, b:any): any{
    return a + b;
}

function addWithGuard(a:string, b:string): string;
function addWithGuard(a:number, b:number): number;
function addWithGuard(a:any, b:any): any{
    if(typeof a == "string" && typeof b == "string"){ // guard
        return parseFloat(a) + parseFloat(b);
    }
    if(typeof a == "number" && typeof b == "number"){ // guard
        return a + b;
    }

    throw new Error('Invalid argument type');
}
```

## Interface, Class, Namespace

Example below shows how to define interface, extend interface, implement interface, define class, extend class

```ts
// interface
interface IName {
    setName(name: string): void;
    getName(): string;

    nickname?: string;
}

// extend interface
interface IPerson extends IName{
    setAge(age: number): void;
    getAge(): number;
}

// class (with interface implementation)
class Person implements IPerson{

    constructor(private name: string, private age: number){}

    public setName(name: string) : void{
        this.name = name;
    }

    public getName() : string{
        return this.name;
    }

    public setAge(age: number) : void{
        this.age = age;
    }

    public getAge() : number{
        return this.age;
    }
}

// extend class
class Teacher extends Person{
    
    constructor(name: string, age: number, private teaches: string){
        super(name, age);
    }

    public getTeaches() : string{
        return this.teaches;
    }
    
    public setTeaches(teaches: string) : void{
        this.teaches = teaches;
    }
}

let teacher = new Teacher("Srdjan", 39, "JavaSctipt");
console.log(teacher.getName());
console.log(teacher.getAge());
console.log(teacher.getTeaches());
```

**Readonly, Access Modifiers**

Example below shows abstract class, readonly usage and public/private/protected access modifiers.

```ts
abstract class ID{

    protected id;
    constructor(_id:string){
        this.id = _id;
    }
}
class Programmer extends ID{

    readonly role:string;
    private name;

    constructor(_id:string, _name:string, _role:string){
        super(_id);
        this.name = _name;
        this.role = _role;
    }

    public getNameWithRole(): string{
        return this.id + ": "+ this.getName() + " is " + this.role;
    }
     
    private getName(): string{
        return this.name;
    }
}

var obj = new Programmer("001", "Srdjan", "Frontend developer");
var nameAndRole = obj.getNameWithRole();
//obj.getName(); //won't work as it's private
console.log(nameAndRole);
```

**Static methods and properties**

```ts
class MyMath{
    static readonly PI: number = Math.PI;
    static Multiply(a: number, b: number){
        return a * b;
    }
}

// static method
console.log(MyMath.Multiply(3,3));

// static property
console.log(MyMath.PI);
```

**Namespace**

Wrap multiple classes inside namespace.
All public accessible classes have to be exported.

```ts
namespace Utility{
    export class MyMath {
        static Multiply(a: number, b: number){
            return a * b;
        }
    }
    export class MyString {
        static Concentrate(...strArr){
            return strArr.reduce((acc, item)=>{
                return acc + item;
            })
        }
    }
}

// using namespace
console.log(Utility.MyString.Concentrate("Srdjan", " ", "Arsic"));
```

## Async - await

async-await is elegant way to handle async operations.

```ts
function longTimeExecution(): Promise<string>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5  ? resolve("DONE") : reject("Error ... !");
        },2000)
    });
}

async function callAwaitFunction(){
    console.log("Before await");

    try{
        let response = await longTimeExecution(); // this is a waiting point but only inside this function
        console.log("RESPONSE: " + response);
    }catch(ex){
        console.log("ERROR: " + ex);
    }
    
    console.log("After await");
}

console.log("Starts execution ...");
callAwaitFunction();
console.log("... continue execution");
```