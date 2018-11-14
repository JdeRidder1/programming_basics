// 1. Schrijf een simpele statement die aangeeft of een getal even of oneven is.
const number = 40098;
const even = (number % 2 == 0);
console.log("is "+number+" an even number? " + even);

// extra. Deze statemement voegt '1' toe aan het bestaande nummer en checkt dan of deze nog steeds true/false is.
const number1 = number + 1;
const even1 = (number1 % 2 == 0);
console.log("is "+number+" +1 an even number? "+ even1);
