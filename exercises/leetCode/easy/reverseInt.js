/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 

Constraints:
-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let str = x + "";
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    str = Math.abs(str) + "";
  }

  let sum = 0;
  [...str].reverse().forEach((item, index) => {
    const currentItem = parseInt(item);
    const multiplier = 10 ** (str.length - 1 - index);
    sum += multiplier * currentItem;
  });

  sum = isNegative ? -Math.abs(sum) : sum;
  return sum;
};
