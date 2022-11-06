

/*
    0 1 1 2 3 5 8 13 21 34 55 89 144....

    0 1 1 2 3
*/

/**
 * @param {number} num
 * @return {number}
 * */
const getFabinnaci = num => {
    if (num < 2) return num;

    return getFabinnaci(num - 1) + getFabinnaci(num - 2);
}

console.log(getFabinnaci(3));