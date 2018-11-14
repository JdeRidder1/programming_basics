// 1. Bereken met JavaScript het gemiddelde op basis van de cijfers die in de tabel staan en plaats dit gemiddelde cijfer weer op een nieuwe tabelregel in de tabel (ook weer met JavaScript).

const allGradeTableCells = document.getElementsByClassName('grade');
console.log(allGradeTableCells[0].innerText); //check to see if i can get the grades

// map function will not work becasue allGradeTableCells is a specific array.
// const allGrades = allGradeTableCells.map(function(element, index, array){
//     return element.innerText;
// });
// console.log(allGrades);

let allGrades = [];
for (let index = 0; index < allGradeTableCells.length; index++) {
    allGrades.push(allGradeTableCells[index].innerText);
}
console.log(allGrades);

/*
 * Function to determine the average grade of an grade array
 * @param {*} gradeArray 
 */
function avarageGrade(gradeArray) {
    sumOfGrades = 0;
    for (let index = 0; index < gradeArray.length; index++) {
        sumOfGrades += parseFloat(gradeArray[index]); // use parseFloat to parse all elements from the array (which are text elements) to floating nummbers (for example 5.5)   
    }
    return sumOfGrades / gradeArray.length;
}

console.log(avarageGrade(allGrades));