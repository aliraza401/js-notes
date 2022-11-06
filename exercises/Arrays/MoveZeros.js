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

  [0,1,0,3,12]

  [0,1,0,3,12]
  [1,1,0,3,12]
  [1,0,0,3,12]
  [1,0,3,3,12]
  [1,0,3,12,12]
  [1,0,3,12,0]
*/

/**
 * @param {number[]} nums
 * @return {void}
 * O(n^2)
 */
const moveZeros = (nums) => {
  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
    }
  }
  return nums;
};

moveZeros([0, 1, 0, 3, 12]);
