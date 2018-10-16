// 2. Ik wil graag in de volgende string ‘Programming is not so cool’ het woordje ‘not’ verwijderen. Schrijf een programma dat dit doet.
const sentence = 'Programming is not so cool';
const firstPartOfSentence = sentence.substr(0,14);
const secondPartOfSentence = sentence.substr(18);
console.log(firstPartOfSentence + secondPartOfSentence);

/* 
Creëer eerst een const genaamd sentence en geef die de gevraagde waarde.
Maak vervolgens twee constanten genaamd first- en secondPartOfSentence.
Geef firstPartOfSentence de waarde sentence.substr(0, tmt de gevraagde index)
Geef secondPartOfSentence de waarde sentence.substr(vanaf de gevraagde index)

De eerste waarde achter substr is de index waar te beginnen.
De tweede waarde achter substr is de lengte die gevraagd wordt.
*/
