// 2. Ik wil graag in de volgende string ‘Programming is not so cool’ het woordje ‘not’ verwijderen. Schrijf een programma dat dit doet.
const sentence = 'Programming is not so cool';
const firstPartOfSentence = sentence.substr(0,14);
const secondPartofSentence = sentence.substr(18);
console.log(firstPartOfSentence + secondPartofSentence);