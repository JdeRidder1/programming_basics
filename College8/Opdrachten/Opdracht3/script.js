// 3. [Pittig]. Gegeven is de array met objecten uit de vorige vraag. Voeg twee properties “hoursPerWeek” en “salary” toe. 
// Verzin zelf bijpassende waardes. Voeg nu een methode “salaryPerHour” toe, met daarin een functie die print 
// hoeveel de docenten per uur verdienen.

// i use a generic function which is called from each of the objects in moreTeachers array. The this keyword references to the calling(current) object
const printSalaryPerHour = function () {
    console.log(`${this.name} earns ${this.salaryPerHour} per hour`);
}

const moreTeachers = [{
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: 40,
        salaryPerHour: 10,
        printSalaryPerHour: printSalaryPerHour
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: 40,
        salaryPerHour: 15,
        printSalaryPerHour: printSalaryPerHour
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: 20,
        salaryPerHour: 15,
        printSalaryPerHour: printSalaryPerHour
    }
];

moreTeachers[0].printSalaryPerHour();