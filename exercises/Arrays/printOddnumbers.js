'use strict';

/*
 * Complete the 'oddNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function oddNumbers(l, r) {
    // Write your code here
    const arr = [];
    for (let index = l; index <= r; index++) {
        if (index % 2 !== 0) {
            arr.push(index);
        }
    }
    return arr;
}
