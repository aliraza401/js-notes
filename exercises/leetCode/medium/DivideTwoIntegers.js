

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    let counter = 0;

    for(let index = dividend; index >= divisor; index = index - divisor) {
        counter++;
        console.log(index);
    }

    return counter;
    
};

console.log(divide(7, -2));