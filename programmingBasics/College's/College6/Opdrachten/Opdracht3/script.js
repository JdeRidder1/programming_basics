// 3. Schrijf een functie expressie en declaratie waarmee je aantoont dat een expressie en een declaratie op een andere manier met hoisting omgaan. (als je deze vraag niet snapt dan moet je de videoreeks uit udacity kijken. Daar wordt hoisting goed uitgelegd).

functionalExpression(); // reference error because function is declared after initialization
functionDeclaration(); // this will work

const functionalExpression = function (){
    console.log('this is an function expression, and is not hoisted');
}

function functionDeclaration(){
    console.log('this is a function declaration, and is hoisted');
}