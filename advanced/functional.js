
//  separtion of concerns. DATA and FUNCTIONS.

// PURE FUNCTIONS => no side effects(not 100%), same input same output.

// Perfect function should::
// 1 task
// return 
// pure
// no modify state
// composible
// pridictible

// What is Idempotence::
// Given same input always returns same output.
const getRandom = () => Math.random();
const getPI = () => 3.14;

// Imperative VS Declerative::
// Imperative => tells machine what to do and how to do. (jQuery).
// Declerative => what to do and what should happen.

// Immutability::
// not changing state. make copy and return new copy.
// Dont update original DS make copy make changes and return new object.

// HOF::

// Closure::

// Currying::
// technique of a function that takes multiple args into multiple functions that takes single args each.
const multiply = (a,b) => a*b;
const curriedMultiply = a => b => a*b;
const curriedMultiplyBy5 = (curriedMultiply(5));
console.log(curriedMultiply(5)(3));
console.log(curriedMultiplyBy5(3));