/*
    Find fact.
*/


/**
* @param {number} x
* @return {number}
*/
const myFact = (x) => x === 1 ? x : myFact(x - 1) * x;

console.log(myFact(5));