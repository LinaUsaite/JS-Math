"use strict"

// Write a JavaScript function getMax which takes tree numbers and returns the highest and lowest number of them.

//Funkcijos deklaracija - Function Declaration

function getMax(a, b, c) {  //funkcija, pavadinimu getMax, kuri priima tris skaicius ir grazina didziausia ir maziausia is ju.
    let max = Math.max(a, b, c); //funkcija gaunas tris parametrus, naudoju Math.max rasti didziausiam skaiciui.
    let min = Math.min (a, b, c);//naudoju Math.min rasti maziausiam skaiciui.
    return `Max number is ${max}, min is ${min}`; //funkcija grazina teksta su rezultatais
}


// su ARROW funkcija:

const getMax = (a, b, c) => {
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    return `Max number is ${max}, min is ${min}`;
}

// trumpesne ARROW funkcijos versija:

const getMax = (a, b, c) =>
    `Max number is ${Math.max(a, b, c)}, min is ${Math.min(a, b, c)}`;



console.log(getMax(12, 13, 56));
console.log(getMax(0, -34, 83));


