
const printSalaryPerHour = function () {
    console.log(`${this.name} earns ${this.salaryPerHour} per hour`)
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
    brand: "Windows",
    hoursPerWeek: 40,
    salaryPerHour: 15,
    printSalaryPerHour: printSalaryPerHour
    },
    {
    name: "Rimmert",
    profession: "Teacher",
    brand: "Windows",
    hoursPerWeek: 40,
    salaryPerHour: 10,
    printSalaryPerHour: printSalaryPerHour
    },


moreTeachers