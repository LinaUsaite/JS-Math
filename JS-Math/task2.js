"use strict"

//Write a JavaScript function to count the digits of an integer.
//Hint: convert number to string then use str.length property to determinate length of string.

const countDigits = (num) => {
    const converted = num.toString(); //pavercia skaiciu i teksta.
    return converted.length;          //suskaiciuoja kiek tame tekste simboliu ir grazina atsakyma
};

console.log(countDigits(12345));
console.log(countDigits(0));
console.log(countDigits(987654));

