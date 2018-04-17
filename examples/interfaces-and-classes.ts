// interface
interface IName {
    setName(name: string): void;
    getName(): string;
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