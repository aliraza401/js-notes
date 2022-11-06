/*
Given that we have a function that accepts an array of numbers with minimum value = 1 and max = n, the numbers can be in any order, the array will have a missing number, your goal is to find out the missing number

let exampleOne = [1, 2, 3, 4, 6, 7]; // output will be 5
let exampleTwo = [5, 4, 3, 2]; // output will be 1

[ 2, 3, 4, 5 ]

*/

/**
 * @param {number[]} arr
 * @return {number[]}
 * O(n)
 */
const findMissing = (arr) => {
  const newArr = arr.sort();
  if (newArr[0] !== 1) return 1;
  for (let index = 0; index < newArr.length - 1; index++) {
    if (newArr[index + 1] - newArr[index] !== 1) {
      return newArr[index] + 1;
    }
  }
  return -1;
};


/**
 * @param {number[]} arr
 * @return {number[]}
 * O(n)
 */
const findMissingTwo = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    if (arr.indexOf(index) === -1) return index;
  }
  return -1;
};

console.log(findMissingTwo([1, 2, 3, 4, 6, 7]));
