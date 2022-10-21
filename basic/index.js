// History:: Netscape, 1995, 10 days, Erbandan Eich

// Define:: Client side scripting, synchronous, dynamically typed language  bring Web pages to life.

// DataTypes::
// Premitive:
var age = 18;                           // number 
var name = "Jane";                      // string
var truth = false;                      // boolean
var a; typeof a;                        // undefined
var a = null;                           // value null
// Non-primitive:
var sheets = ["HTML","CSS","JS"];       // array
var name = {first:"Jane", last:"Doe"};  // object 
var sum = (a,b) => a+b;                 // function 

// let vs const vs var::

// null vs undeclared vs undefined vs NaN::
// null -> It can be assigned to a variable as a representation of no value. That is assigned by developer.
// undefined ->  Memory allocated first phase. default value of variable if its didnt have value assigned.
// undeclared -> strict mode-only exception "Assignment to undeclared variable" occurs when the value has been 
//      assigned to an undeclared variable.
// NaN -> Not a number, returned if string is not number. Number.isNaN() 

// arguments:: 
// array-like object accessible inside functions that contains the values of the arguments passed to that function.

// Spread/Rest::
// spread array or object to single items. 
// rest is use to get rest of parameters.

// Main Features in VS6:
// let const, arrow functions, promise, De-structuring.

// var vs let vs const:: 
// var is function scope. let and const are block scope.
// On global scope init variable with var  will bind object to window object.
// We cannot access let and const before init(Temporal Dead Zone) but we can access var before init.

// scope::
// Scope determines the accessibility (visibility) of variables. (Block, Function, Global). scope chain is a chain 
//      of lexical env. If JS didnot find variable it will go up 1 by 1 level up to find that variable till GEC.
// context:: (whwre is program in executation state)
// context is always the value of the this keyword which is a reference to the object that “owns” 
//      the currently executing code or the function where it’s looked at.

// THIS operator::
// Reference to object that is executing the current function. 
// Arrow function dont have their own this they try to inherit this of function of their nearest surrounding.

// what is callback::
// A callback function is passed into another function as an argument, which is then invoked inside the outer function.

// ECMA script::
// Governing body of javascript, define standards for javascript.

// TRUSY and FALSY evaluation::
// 0,  -0,  false,  null,  undefined,  '',  NaN
// remaining all are trusy

// define Symbol::
// primitive, make unique keys in primitive type.

// == vs ===::
// equality(by value) vs strict equality(by type and value).

// window vs document::
// window is the execution context and global object for that context's JavaScript
// document contains the DOM, initialized by parsing HTML

// Function::

// Function statements / Function Declaration:: (hoisted as function)
function a() {}

// Function expression:: (hoisted as variable)
let abc = function() {}

// Anonymous Functions:: (function without name)
// function() {} 

// Named function expression::
let def = function abc() {}  //abc() is only accessible in b.

// First class functions::
// The ability of functions to be treated as values, passed to other functions and returned from functions.

// Higher Order Functions::
// A function which takes a function as a input or returns function in output.

// Pure functions::
// specific task 
// always returns same value against same input. 
// NOT depends on function outside its scope.
// NOT change anything outside.

// map vs forEach::

// function chaining::


