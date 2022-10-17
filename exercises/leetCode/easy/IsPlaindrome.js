/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 * O(n)
 */
var isPalindrome = function (x) {
  let str = x + ""; // convert number inti string
  if (str.length < 2) return true;

  for (let index = 0; index < str.length / 2; index++) {
    console.log(str[index], str[str.length - index]);
    if (str[index] !== str[str.length - 1 - index]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} s
 * @return {boolean}
 * O(n)
 */
const isPalindromeTwo = (s) => s + "" === [...(s + "")].reverse().join("");
