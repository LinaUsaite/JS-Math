"use strict"

// Write a JavaScript function toDecimals to format a number up to specified decimal places.
// Example:
// toDecimals(2.100212, 2) --> 2.10
// toDecimals(2.100212, 3) --> 2.100
// toDecimals(2100, 2) --> 2100.00

const toDecimals = (num, decimals) => {
    return num.toFixed(decimals);
};

console.log(toDecimals(2.100212, 2));
console.log(toDecimals(2.100212, 3));
console.log(toDecimals(2100, 2));

// Ši funkcija priima du dalykus: skaičių ir kiek skaitmenų po kablelio turi būti palikta.“
//  JavaScript turi specialų metodą .toFixed(), kuris suformatuoja skaičių taip, kad jis turėtų tiksliai tiek skaitmenų po kableliu, kiek mes nurodome.“