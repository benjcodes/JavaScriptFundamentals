/* Functions Lesson
First we are going to visit the three different ways in which we can create a function.
THINGS TO REMEMBER:
1. Functions are subprograms designed to handle a subtask.
2. Functions must be called to run, otherwise known as invoking a function.
3. Values can be passed into a function, and then used within the function.
4. Functions always return a value.
5. FUNCTIONS ARE OBJECTS.
Notes can be online at: https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99
*/

// #1 Function Declaration
function exampleOne() {
    // Write code here.
}

// #2 Function Expression
let exampleTwo = function() {
    // Write code here.
}

// #3 Arrow Function Expression
let exampleThree = () => {
    // Write code here.
}

// Parameters vs Arguments
// Parameters are used when defining a function. In the example below the parameters are: params1 & params2.
function exampleFour(params1, params2){
    let sum = params1 + params2;
    return sum;
}

// 2 & 3 replace the parameters as arguments when the function is invoked.
exampleFour(2, 3); // 2 + 3 = 5

// If a function has no parameters, it can be invoked with an empty set of parenthesis.
function run(){
    console.log("Get your shoes on.");
}
run(); // Prints "Get your shoes on."

// Function Returns
// Every function in JavaScript returns undefined, unless specified otherwise.
function test1(){
    // Empty body block.
};
test1(); // returns undefined

function test2() {
    return true;
}
test2(); // returns true

// These examples are important as they demonstrate that the value a function returns, is actually returned to
// the caller of the function. See below.
let timesTwo = function(num){
    return num * 2;
}
let num = timesTwo(5);
console.log(num); // 10

// Return statement stops function execution immediately
function testReturn() {
    return true;
    return false; // never executed
}

testReturn(); // returns true;



