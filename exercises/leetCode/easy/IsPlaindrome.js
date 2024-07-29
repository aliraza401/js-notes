

const isPlaindrome = (str) => {
    if(typeof str !== 'string') return new Error('Invalid Input');
    if(str.length <= 1) return true;

    for(let index = 0; index < str.length / 2; index++) {
        if(str[index] !== str[str.length - 1 - index]) {
            return false;
        }
    } 
    return true;

}

console.log(isPlaindrome('1221'));