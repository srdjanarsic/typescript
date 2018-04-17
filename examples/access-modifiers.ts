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