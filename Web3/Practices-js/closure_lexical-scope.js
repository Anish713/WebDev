
function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        let innerVariable = 'I am from inner function';
        console.log(outerVariable); // Accessing outerVariable from outer function
        console.log(innerVariable); // Accessing innerVariable from inner function
    }

    return innerFunction;
}

let closure = outerFunction();
closure(); // Invoking the inner function

