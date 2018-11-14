//Schrijf een functie giveMeSomeNiceName(gender) die bijvoorbeeld het onderstaande in de console schrijft. 
//Op basis van een gender geeft hij een andere naam.


function giveMeSomeNiceName(gender) {
    let myNewName = '';
    if (gender == 'male') {
        myNewName = 'Arnold';
        }   else {
        myNewName = 'Arnalda';
        }
        return myNewName;
    }
    
    const myName = giveMeSomeNiceName ('female');
    console.log('my new name is:', myName );