//////FIRST PROMISE

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is a promise1.")
        resolve()
    }, 1000);
})
p1.then(() => {
    console.log("Promise resolved.")
})


//////SECOND PROMISE

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('this is promise2.')
        resolve(1)
    }, 2000);
}).then(function () {
    console.log('promise2 resolved.')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('this is promise3.')
            resolve(2)
        }, 2000);
    })
})


//////THIRD PROMISE

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "Anish", email: "Anish@anish.com"
        })
    }, 1000);
})
p3.then(function (user) { //receives params from reslove
    console.log(user);
})


//////FOURTH PROMISE

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;
        // let err = true;
        if (!err) {
            resolve({
                username: "Anish", email: "Anish@anish.com"
            })
            // resolve("Promise resolved.")
        }
        else {
            reject("Promise rejected.")
            // reject(new Error("Error occured."))
        }
    }, 1000);
})
p4
    .then(function (user) {
        console.log(user);
        // return user.username //wrong?
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Finally block, runs regardless of resolve or reject.")
    })



//////FIFTH PROMISE

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "Anish", password: "Shrestha" })
        } else {
            reject("Error occured.")
        }
    }, 1000)
})

async function consumeP5() {
    try {
        const response = await p5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumeP5()


//////FETCH with then, catch

let url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })




//////FETCH with async await

async function fetchPosts() {
    try {
        url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchPosts()
