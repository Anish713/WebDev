////Getter setter in classes

class User1 {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}123`
    }

    set password(value) {
        this._password = value
    }
}

const Anish1 = new User1("Anish@ai.com", "abc")
console.log(Anish1.email);



//// Getter setter in function

function User2(email, password) {
    this.email = email;
    this.password = password
}
User2.prototype.getEmail = function () {
    return this.email.toUpperCase()
}
User2.prototype.setEmail = function (value) {
    this.email = value
}
User2.prototype.getPassword = function () {
    return `${this.password}123`
}
User2.prototype.setPassword = function (value) {
    this.password = value
}
const Anish2 = new User2("anish@ai.com", "abc");
console.log(Anish2.getEmail());




/////// Getter and Setter using Objects
function User3(data) {
    this.data = data
}
User3.prototype = {
    get email() {
        return this.data.email.toUpperCase()
    },
    set email(value) {
        this.data.email = value
    },
    get password() {
        return `${this.data.password}123`
    },
    set password(value) {
        this.data.password = value
    }
}
const Anish3 = new User3({
    email: "anish@ai.com",
    password: "abc"
})
console.log(Anish3.email);
Anish3.email = 'anish@gmail.com'
console.log(Anish3.email);



//// Getter and Setter using Object.defineProperty

function User4(data) {
    this.data = data
}
Object.defineProperty(User4.prototype, 'email', {
    get: function () {
        return this.data.email.toUpperCase()
    },
    set: function (value) {
        this.data.email = value
    }
})
Object.defineProperty(User4.prototype, 'password', {
    get: function () {
        return `${this.data.password}123`
    },
    set: function (value) {
        this.data.password = value
    }
})
const Anish4 = new User4({
    email: "anish@ai",
    password: "abc"
})
console.log(Anish4.email);
Anish4.email = 'anish@gmail'
console.log(Anish4.email);

