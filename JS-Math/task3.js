"use strict"

// Write a JavaScript function to generate a random integer:
// between 0 and 1
// between 0 and 100
// between 5 and 20

const random01 = () => {
    return Math.random() < 0.5 ? 0 : 1;
}

console.log(random01());

//Čia parašiau funkciją, kuri generuoja atsitiktinį sveiką skaičių nuo 0 iki 1.
// JavaScript funkcija Math.random() sugeneruoja skaičių tarp 0 ir 1, bet ne sveiką – visada su kableliu. Todėl aš panaudojau sąlyginį operatorių ?:, kuris patikrina:
// jeigu atsitiktinis skaičius yra mažesnis nei 0.5, aš grąžinu 0, priešingu atveju – 1.
// Tokiu būdu gaunu tik du galimus sveikus skaičius, abu su vienoda tikimybe




const random0to100 = () => {
    return Math.floor(Math.random()* 10); //Formule - Math.random() * (max - min + 1) + min
}

console.log(random0to100());

// Kita funkcija generuoja skaičių nuo 0 iki 100.
// Naudoju formulę: Math.floor(Math.random() * 101).
// Pirmiausia Math.random() duoda skaičių tarp 0 ir 1, tada padauginu iš 101, kad gavau intervalą nuo 0 iki 100.999, ir tada Math.floor() apvalina žemyn į sveiką skaičių.“


const random5to20 = () => {
        return Math.floor(Math.random() * (20 - 5 + 1)) + 5; //Formule - Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(random5to20());

// Trečia funkcija generuoja skaičius nuo 5 iki 20.
// Naudoju formulę: Math.floor(Math.random() * (max - min + 1)) + min.
// Tai standartinis būdas sukurti sveiką skaičių tarp bet kurių dviejų ribų


