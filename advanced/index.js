// Arrow functions::
// Don't have their own bindings to this, arguments or super.
// Gets THIS of their nearest obj.This keyword is inherited from the surrounding scope.
// changed syntax.
const Zombie = {
  age: 453,
  eatBrain() {
    console.log("Eating brain", this);
    const digest = () => console.log("Digesting ", this);
    digest();
  },
  sleep: () => console.log('Sleeping', this),
};
Zombie.eatBrain();
Zombie.sleep(); // prints undefined.

// When not to use Arrow Function::
// event handlers, objects methods, constructors, prototypes, function that use arguments object.

// shadowing::
// when a variable declared in a certain scope (e.g. a local variable)
// Has the same name as a variable in an outer scope (e.g. a global variable). In case of var it changes global value.
// e.g=1:
var b = 10;
{ var b = 20; }
console.log(b); //20
// e.g=2:
let c = 10;
{ let c = 20; }
console.log(c); //10

// JIT compiler::
// just in time, Compilation is done during execution.

// Closure::
// function bind together along with its lexical env.

// Function currying::
// currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.

// Hosting::
// JavaScript behavior of moving declarations to the top.
// for variable its undefined and for function its whole function.
// For let/const we Cannot access before initialization. For var its gives undefined.

// Garbage Collector::
// Tries to free space whenever possible. Auto. use Mark & Sweep algo(V8).
// Removes variables from heap when they are not further in use.

// Reasons for memory leeks::
// Global variables, Event Listers, setInterval.

// call stack and heap::
// Heap: to store data. All memory allocation happens. 
// stack: where code is in its execution.

// Disadvantages of blocking main thread in javascript::
// JavaScript Concurrency Model.
// If you block main thread callback queue and micro-queue will never executed.

// Debouncing vs Throttling: (limiting a rate of function call)
// Throttling: delay executing a function. It will reduce the notifications of an event that fires multiple times. (window resize event).
// Debouncing: bunch a series of sequential calls to a function into a single call to that function. 
//      It ensures that one notification is made for an event that fires multiple times. (search)

// Prototype::
// Each object has a private property which holds a link to another object called its prototype. 
// That prototype object has a prototype of its own, and so on until an object is reached with null(Obejct prototype).

// Prototype Inheritance::
// On object trying to access properties of other object.

// __proto__ vs prototype::

// call vs apply vs bind::
// call => we can call(invoke) a function of object with data of another object.
const printFullName = function (...rest) { console.log(this, rest); };
printFullName.call({ fName: 'Ali', lName: 'Raza' }, 'Islamabad', 'Pakistan');  // first parameter is ref of this and then other arguments
// apply => same as call just we  call extra parameters in array. 
printFullName.apply({ fName: 'Samad', lName: 'Latif' }, ['Kabul', 'Afghanistan']);
// bind => same as call but it didnt call method directly it returns new method with binding.
const getFullName = printFullName.bind({ fName: 'Ali', lName: 'Raza' }, 'Nowshera');
getFullName();

// Deep copy vs sallow copy::
// In shallow copy if any proerty is changed it will also be changed in original object. (same reference)
const person = { name: 'Ali', job: { title: 'Developer', isFresher: false }, getAge: () => 22 };
const shallowPerson = person;
const shallowPersonTwo = person;
person.name = 'Raza';
console.log(person);
// In deep copy all properties are copied ro new location and allocated new memory space. changing copied wont effect any other.
const deepPerson1 = Object.assign({}, person);
const deepPerson2 = { ...person };
deepPerson2.job.title = 'Soldier'; // Changes property of original object.
const deepPerson3 = JSON.parse(JSON.stringify(person)); // works for nested objects but mess-up methods.
// _.deepClone(person); // Use this lodash method for proper deep cloning.
structuredClone();

// Event life-cycle:: bubbling and event capturing: (first capture then bubble)
// process of propagating from the closest element to the farthest away element in the DOM is called event bubbling.
document.addEventListener("click", e => console.log("Document bubbling"));
// process of propagating from the farthest element to the closest element in the DOM is called event capturing.
document.addEventListener("click", e => console.log("Document capturing"), { capture: true });

// strict mode:
// way to opt in to a restricted variant of JavaScript.
// results in Eliminating some JavaScript silent errors by changing them to throw errors.

// Session storage vs local storage vs cookies vs indexDB:: (same origin)
// Cookies: 4KB. pristence. just the textual information about a website. Server stores to keep track of requests. both server and client.
// Session storage: not-pristince. only for session. 5MB. only client.
sessionStorage.setItem('name', 'Ali');
sessionStorage.getItem('name');
// Local storage: pristince.5/10MB. only client.
localStorage.setItem('user', JSON.stringify({ name: 'Ali' }));
JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');

// Code is executed::
//  two phases of code execution for every function
//  1. Memory allocation(variables-> undefined, functions-> while code of sanction).
//  2. Code execution(move control in sequence).

// Javascript Engine:: (just a program)
// 1. takes program.
// 2. breaks into tokens (code is broken down into tokens. Syntax parser converts code into AST(Abstract Syntax Tree).)
// 3. parse code and create AST
// 4. Interprater => byte code
// 5. profiller => compiler => bytecode

// Event loop::
// call stack-> execute whatever comes. 
// web apis-> setTimeout, fetch, DOM, console, localstore
// micro-task queue-> callback from fetch, high priority
// callback queue-> callback from other web apis
// event loop->  continuously monitor call stack and micro queue/callback queue. 
//      when call stack is empty it push items form micro task queue/callback queue to call stack.

// Optimization::
// lossless compress assets and move them to CDN.
// use properly sized images. lazy load images.
// minify code. (Tree shaking)
// Reconsider app build size. react-analyze.
// use css image stripes. 
// Enable browser caching.
// better code structure.use React.Fragments.
// Remove extra added libraries. That might not be used.
// Momoize components and Momoize heavy computations.
// try to use css animations instead of js animations.
// dont block main thrad. (use web work workers for extensive tasks.)
// no heavy dom manipulations. (e.g:: use pagination)
// Enable Gzip Compression on Web Server.
// Remove exta function invocation(debounce and throttling).
// Network => remove/limit extra calls. 
// Remove globaly declared variables and remove event liteners after they are of no use.
// lazy-load components.
// Use lighthouse. 

// Await in loop:: 