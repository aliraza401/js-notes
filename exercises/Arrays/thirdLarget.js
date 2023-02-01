/*Rotate Array

    Given an array, return thirld larget number.

    Example 1:
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: 5
*/

/**
 * @param {number[]} arr
 * @return  {number}
 * BigO {O(n)}
 */
const getNthLarget = (arr, target) => {
    if(!Array.isArray(arr)) return new Error('Not an Array');
    if(arr.length < target) return new Error('Array Length is short');

    const targetIndex = target - 1;

    return arr.sort((a,b) => b - a)[targetIndex];
};

const getThirldLarget = (args) => getNthLarget(args, 3);
  
console.log(getThirldLarget([1,2,4,3,5,6,7]));