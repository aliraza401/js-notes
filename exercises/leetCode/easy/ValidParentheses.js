/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1::
Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

const isValidStack = (index, indexNext, bracketStart, bracketEnd) =>
  index !== bracketStart && indexNext === bracketEnd;

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketsStack = [];
  const openingBrackets = ["[", "(", "{"];
  const closingBrackets = ["]", ")", "}"];

  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      bracketsStack.push(s[i]);
    } else if (closingBrackets.includes(s[i])) {
      const currentStackItem = bracketsStack[bracketsStack.length - 1];
      if (
        isValidStack(currentStackItem, s[i], "[", "]") ||
        isValidStack(currentStackItem, s[i], "{", "}") ||
        isValidStack(currentStackItem, s[i], "(", ")")
      ) {
        return false;
      } else {
        bracketsStack.pop();
      }
    }
  }
  return bracketsStack.length ? false : true;
};


console.log(isValid('()[]{}'));