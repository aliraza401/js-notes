//  separtion of concerns. DATA and FUNCTIONS.
// RAMDA js library.

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
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiply(5)(3));
console.log(curriedMultiplyBy5(3));

// Memoization:: (type of caching)
const getCubeMemo = () => {
  const hashMapCube = {};
  return (number) => {
    if (number in hashMapCube) return hashMapCube[number];
    const result = number * number * number;
    hashMapCube[number] = result;
    return result;
  };
};

const getCube = getCubeMemo();
console.log(getCube(5));
console.log(getCube(5));
console.log(getCube(10));
console.log(getCube(5));

// Compose:: composition:  (RIGHT => LEFT)
// Any type of data transformation we do should be obvious.
// data -> fn -> data -> fn -> data -> fn....
const compose = (f, g) => (data) => f(g(data));
const multipyBy3makePositive = compose(
  (num) => num * 3,
  (num) => Math.abs(num)
);
console.log(multipyBy3makePositive(-50));

// Pipe:: (LEFT => RIGHT)
// Like compose but moves from left to right.
const pipe = (f, g) => (data) => g(f(data));

// Arity:
// number of arguments a function takes.
// In FP there is concept the fewer number of auguments a function takes the better that function is.

// Example of FP:
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

const purchaseItem = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args))); //pipe function

purchaseItem2(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyUserCart
)(user, { name: "laptop", price: 60 });

const addItemToCart = (user, item) => Object.assign({}, user, { cart: user.cart.concat(item) });

const applyTaxToItems = (user) => {
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

const buyItem = (user) =>Object.assign({}, user, { purchases: user.cart });

const emptyUserCart = (user) => Object.assign({}, user, { cart: [] });

