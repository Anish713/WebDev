//////Using Class (Abstraction)

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi, my name is ${this.name}-1, from class`);
        return `Hi, my name is ${this.name.toUpperCase()}-2`
    }
}

let user = new User("Anish", 22);
console.log(user.sayHi());



////// Same with prototype (Behind the scene)

function User1(name, age){
    this.name = name;
    this.age = age;
}
User1.prototype.sayHi = function (){
    console.log(`Hi, my name is ${this.name}-1, from prototype`);
    return `Hi, my name is ${this.name.toUpperCase()}-2`
}
let user1 = new User("Anish", 22);
console.log(user1.sayHi());


//////Inheritance-1

function Animal(type){
    this.type = type;
}
Animal.prototype.sayHi = function (){
    console.log(`Hi, I am ${this.type}-1.`);
    return `Hi, I am ${this.type.toUpperCase()}-2`
}

let animal = new Animal("Dog");
console.log(animal.sayHi());

class Dog extends Animal {
    constructor(name){
        super("Dog");
        this.name = name;
    }
    sayHi(){
        console.log(`Hi, I am ${this.name}-1, from inheritance 1.`);
        return `Hi, I am ${this.name.toUpperCase()}-2`
    }
}
let dog = new Dog("Tommy");
console.log(dog.sayHi());

//////Inheritance-2

class User3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayName(){
        console.log(`Hi, my name is ${this.name}-1`);
        return `Hi, my name is ${this.name.toUpperCase()}-2`
    }
}

class Admin extends User3{
    constructor( name, age, role){
        super(name, age); //uses .call behind the scene automatically
        this.role = role;
    }

    sayRole(){
        // console.log(`Hi, I am ${this.name}, from ADMIN.`);
        return `Hi, My role is ${this.role.toUpperCase()}, from ADMIN.`
    }
}

let admin = new Admin('Pratigya', '25', 'admin');
let user3 = new User3('Jupiter', '25')
console.log(admin.sayName());
console.log(admin.sayRole());
console.log(user3.sayName());




//////Inheritance-3, USING .call() method, no class

function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const newUser = new createUser("Kripa", "kripa@fb.com", "123")
console.log(newUser);
console.log(newUser.username);


//////Inheritance-4, USING .call() method, ANOTHER EXAMPLE

function User4 (name, age) {
    this.name = name;
    this.age = age;
}
User4.prototype.sayName = function (){
    console.log(`Hi, my name is ${this.name}-1`);
    return `Hi, my name is ${this.name.toUpperCase()}-2`
}
function Admin2 (name, age, role) {
    User4.call(this, name, age);
    this.role = role;
}
////// Admin2.prototype = Object.create(User4.prototype);
////// Admin2.prototype.constructor = Admin2;
Admin2.prototype.__proto__ = User4.prototype;

Admin2.prototype.sayRole = function (){
    console.log(`Hi, my role is ${this.role}-1`);
    return `Hi, my role is ${this.role.toUpperCase()}-2`
}
let admin2 = new Admin2 ('Pratigya', 25, 'admin');
console.log(admin2.sayName());
console.log(admin2.sayRole());