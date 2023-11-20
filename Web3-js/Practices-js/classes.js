//////Using Class (Abstraction)

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi, my name is ${this.name}-1`);
        return `Hi, my name is ${this.name.toUpperCase()}-2`
    }
}

let user = new User("Anish", 22);
console.log(user.sayHi());



//////Prototype (Behind the scene)

function User1(name, age){
    this.name = name;
    this.age = age;
}
User1.prototype.sayHi = function (){
    console.log(`Hi, my name is ${this.name}-1`);
    return `Hi, my name is ${this.name.toUpperCase()}-2`
}
let user1 = new User("Anish", 22);
console.log(user1.sayHi());