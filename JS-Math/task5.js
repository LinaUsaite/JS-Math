"use strict"

const isPowerOfTwo = (n) => {
    if (n<1) return false;    //tik teigiami skaiciai gali buti keliami 2 laipsniu.
    const logValue = Math.log2(n);
    return Number.isInteger(logValue);
};

console.log(isPowerOfTwo(2)); 
console.log(isPowerOfTwo(3)); 
console.log(isPowerOfTwo(4)); 
console.log(isPowerOfTwo(2**20)); 
console.log(isPowerOfTwo(2**20 + 1)); 