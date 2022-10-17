/*
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (s.length !== 0 && t.length === 0) return false;

  let matchedIndex = 0;
  for (let index = 0; index < t.length; index++) { 
    if (t[index] === s[matchedIndex]) matchedIndex++;
  }

  return matchedIndex === s.length;
};

console.log(isSubsequence("axc", "ahbgdc"))