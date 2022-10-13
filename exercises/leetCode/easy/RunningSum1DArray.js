/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.


Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 * BigO {O(n^2)}
 */
var runningSum = function (nums) {
  const newArray = [];
  nums.forEach((_, index) => {
    let newSum = 0;
    for (let i = index; i >= 0; i--) {
      newSum += nums[i];
    }
    newArray.push(newSum);
  });
  return newArray;
};

/* ----------------------------------------------------------------- */

/**
 * @param {number[]} nums
 * @return {number[]}
 * BigO {O(n)}
 */
var runningSum = function (nums) {
  for (let index = 1; index < nums.length; index++) {
    nums[index] += nums[index - 1];
  }
  return nums;
};
