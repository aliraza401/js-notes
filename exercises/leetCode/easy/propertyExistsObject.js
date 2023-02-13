// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
const inProperty = (obj, property) => property in obj;

const data = { x: "a", y: "b", z: undefined };
console.log(inProperty(data, "z"));
