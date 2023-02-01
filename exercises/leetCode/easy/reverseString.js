
// O(n) == O(1)
const reverseString = (str) => {
    let resultStr = '';
    for(let index = str.length-1; index >= 0; index--) {
        resultStr += str[index];
    }
    return resultStr;
}

const reverseStringTwo = (str) => str.split('').reverse().join('');

console.log(reverseString('abcdefghi'));
console.log(reverseStringTwo('abcdefghi'));