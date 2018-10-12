// 2. Gegeven is een array met drie objecten:
// Gebruik een for-loop of foreach-loop en print voor elk object de regel: “I have a [profession] named [name] and he likes to work on a [brand] computer”. De vierkante haken zijn placeholders voor de bijbehorende properties uit de objecten hierboven.

const teachers = [{
    name: "Loek",
    profession: "Teacher",
    brand: "Linux"
},
{
    name: "Daan",
    profession: "Teacher",
    brand: "Arduino"
},
{
    name: "Rimmert",
    profession: "Teacher",
    brand: "Apple"
}
];

// teachers.forEach(function (element, index, array) {
//     console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a/an ${element.brand} `);
// });

for (let index = 0; index < teachers.length; index++) {
const element = teachers[index];
console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a/an ${element.brand}`);
}