// History:: 
// Netscape, 1995, 10 days, Erbandan Eich

// Define:: 
// Client side, scripting, synchronous, dynamically typed, made web pages interactive.

// DataTypes::
// Premitive:
var age = 18;                           // number 
var name = "Jane";                      // string
var truth = false;                      // boolean
var a; typeof a;                        // undefined
var a = null;                           // null
var a = Symbol('foo');                  // Symbol
// Non-primitive:
var sheets = ["HTML", "CSS", "JS"];         // array
var name = { first: "Jane", last: "Doe" };  // object 
var sum = (a, b) => a + b;                  // function 

// null vs undeclared vs undefined vs NaN::
// null -> It can be assigned to a variable as a representation of no value. That is assigned by developer.
// undefined ->  Memory allocated first phase. default value of variable if its didnt have value assigned.
// undeclared -> strict mode-only exception "Assignment to undeclared variable".
// NaN -> Not a number, returned if string is not number. Number.isNaN() 

// arguments:: 
// array-like object accessible inside functions that contains the values of the arguments passed to that function.

// Versions of JS:
// The Original JavaScript ES1 ES2 ES3 (1997-1999)
// The First Main Revision ES5 (2009)
// The Second Revision ES6 (2015)
// All Yearly Additions (2016, 2017, 2018, 2019, 2020)

// Spread/Rest::
// spread array or object to single items.
console.log(...[1, 2, 3, 4]);
// rest is use to get rest of parameters.

// Main Features in VS6:
// let, const, arrow functions, promise, De-structuring.

// var vs let vs const:: 
// var is function scope. let and const are block scope.
// On global scope init variable with var will bind object to window object.
// We cannot access let and const before init(Temporal Dead Zone) but we can access var before init.

// scope::
// Scope determines the accessibility (visibility) of variables. (Block, Function, Global). scope chain is a chain 
//      of lexical env. If JS didnot find variable it will go up 1 by 1 level up to find that variable till GEC.

// context:: (where is program in executation state)
// context is always the value of the this keyword which is a reference to the object that “owns” 
//      the currently executing code or the function where it’s looked at.

// THIS operator::
// Reference to object that is executing the current function. 
// Arrow function dont have their own this they try to inherit this of function of their nearest surrounding.

// ECMA script::
// Governing body of javascript, define standards for javascript.

// TRUSY and FALSY evaluation::
// 0, -0, false, null, undefined, '', NaN
// remaining all are trusy

// define Symbol::
// primitive, make unique keys in primitive type.

// == vs ===::
// equality(by value) vs strict equality(by type and value).

// window vs document::
// window is the execution context and global object for that context's JavaScript.
// document contains the DOM, initialized by parsing HTML.

// Function::
// Block of code designed to perform a particular task.

// Function statements/Function Declaration:: (hoisted as function)
function a() { }

// Function expression:: (hoisted as variable)
const abc = function () { }

// Anonymous Functions:: (function without name)
// function() {} 

// Named function expression::
let def = function abc() { }  //abc() is only accessible in b.

// First class functions::
// The ability of functions to be treated as values, passed to other functions and returned from functions.

// Higher Order Functions::
// A function which takes a function as a input or returns function in output.

// Pure functions::
// specific task.
// Always returns same value against same input.
// NOT depends on function outside its scope.
// No side effects.

// Callback::
// A callback function is passed into another function as an argument, which is then invoked in context the passed function.
// 1. callback hell (When some piece of code depends on other).
// 2. Inversion of control. (when code is called in context anther then we lose contol of our code).
setTimeout(() => console.log('I am callback inside timeout'), 2000);

// Promises::
// Object representing a eventual completion or failure of async operation.
// are used to handle async operations in js.
// No inversion of control.
const promise = new Promise((resolve, reject) => {
    if (1 === 1) resolve(1);
    reject(new Error('1 is nor 1'));
});

// map vs forEach::
// Map creates new array and returns newly created array.
// ForEach don't create new array and returns undefined.

// function chaining::
// like builder pattern. Step by step procedure.
// hotDog.addKetchup().addMustured().addKurat();

// Freeze Object:: (Imuatible objects)
// By default objects are muatible but we can make them Imuatible.
const obj = { name: "Ali", age: 23, job: { role: 'Author', type: 'DEV' } };
Object.seal(obj); // No add remove properties.
Object.freeze(obj); // No add remove update properties.
// Object.defineProperties(obj, 'age', { writable: false }); //Make single property imuatible.
obj.job.type = "Soldier"; // this in imuatible even in case of Freeze. We have to explicility freeze all objects. 
Object.freeze(obj.job);

// Sort function::
// By default sort them in assending order UTF-16.
// Compare function
[10, 2, 3, 3, 7, 1, 3].sort((a, b) => {
    // < 0  --> a will come first
    // = 0  --> no change
    // > 0  --> b will come first
    return a - b; // accending sorting
})

// set and map::
// Map => collection of keyed data items, just like an Object. But allows keys of any type.
let map = new Map();
map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key
map.set({ a: 12 }, "Object for AA."); // a object key
console.log(map);
// Set => like array but unique.
let set = new Set();
set.add('one');
set.add('two');
set.add('three');

// Promise chainging
new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 10000);
}).then((result) => result * 2)
    .then(function (result) {
        return result * 2;
    }).then(function (result) {
        return result * 2;
    });

// Naming convention for variables and functions::
// camelCase => variables (except for constants), fuctions, module exports.
// PascalCase => calsses, React components
// snake_case =>

// Writing comment:: (jsdoc)

// Error handling::
// We throw error and catch errors.
// We can also chain try catch.
try {
    throw new Error('Opps new err');
    new SyntaxError();
    new ReferenceError();
} catch (err) {
    console.log('Err :: ', err.name);
    console.log('Err :: ', err.message);
    console.log('Err :: ', err.stack);
} finally {
    console.log('Still good');
}

Promise.resolve(5 + 8)
    .then(resp => resp.toString())
    .then(resp => {
        console.log(resp);
        Promise.resolve('Hello')
            .then(resp => { throw new Error('Inner Err') })
            .catch(err => console.log(err.message));
        throw new Error('Err')
    })
    .catch(err => console.log(err.message));

(async function () {
    try { await Promise.reject('# Err 1'); }
    catch (err) { console.log(err); }
})()

class DatabaseError extends Error {
    constructor(message, DbProperty) {
        super(message);
        this.property = DbProperty;
    }
}
const dbError = new DatabaseError('DB error', 'User ID not found in Table');
console.log(dbError);


// Pub Sub