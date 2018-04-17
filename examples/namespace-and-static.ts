class MyMath{
    static readonly PI: number = Math.PI;
    static Multiply(a: number, b: number){
        return a * b;
    }
}

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

// static method
console.log(MyMath.Multiply(3,3));

// static property
console.log(MyMath.PI);

// using namespace
console.log(Utility.MyString.Concentrate("Srdjan", " ", "Arsic"));
