// 3. [Pittig]. Gegeven is de volgende for-loop op basis van de array uit vraag 1.
// const filteredLapRoundsWithForLoop = function () {
//    let newArray = [];
//    for (let i = 0; i < lapRounds.length; i++) {

//        if (lapRounds[i] < 4) {
//            newArray.push(lapRounds[i]);
//        }
//    }
//    return newArray;
// }
// Gebruik de .filter functie uit javascript om precies hetzelfde resultaat te behalen als de for-loop. Geef aan waarom de .filter functie fijner/beter werkt.

// option with forloop
const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {

        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
}

//option with filter, it is much shorter.
const filteredLapRounds = lapRounds.filter(function (element, index) {
    return element < 4;
});

console.log(filteredLapRounds);