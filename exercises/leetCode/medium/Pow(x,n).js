/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000

Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => x ** n;

/**
* @param {number} x
* @param {number} n
* @return {number}
*/
const myPowTwo = (x, n) => Math.pow(x, n);


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPowThree = (x, n) => n < 1 ? 1 : myPowThree(x, n - 1) * x;

console.log(myPowThree(2, 5));