/* Move Zeroes
Link: https://leetcode.com/problems/move-zeroes/

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

/**
 * @param {number[]} nums
 * @return {void}
 * O(n^2)
 */
const moveZeros = (nums) => {
  let zerosCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zerosCount++;
      for (let j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
    }
  }
  for (let i = nums.length - 1; true; i--) {
    if (zerosCount === 0) break;
    zerosCount--;
    nums[i] = 0;
  } 
  console.log( zerosCount, nums);
};

const nums = [0,1,0];
moveZeros(nums);
