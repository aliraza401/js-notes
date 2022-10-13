/*Rotate Array

Link: https://leetcode.com/problems/rotate-array/

Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * BigO {O(n)}
 */
var rotateArray = function (nums, k) {
  let arr = nums;
  for (let i = 0; i < k; i++) {
    const lastEle = arr[arr.length - 1];
    for (let index = 0; arr.length - 1; index++) {
      arr[index + 1] = arr[index];
    }
    arr[0] = lastEle;
  }

  console.log(arr);
  return arr;
};

rotateArray([1, 2, 3, 4], 1);
// console.log();
