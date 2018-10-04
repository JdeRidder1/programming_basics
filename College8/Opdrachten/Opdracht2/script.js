/*2.    Gebruik een for-loop of foreach-loop en print voor elk object de regel: “I have a [profession] named [name] and he likes to work on a [brand] computer”. 
        De vierkante haken zijn placeholders voor de bijbehorende properties uit de objecten hierboven. */
        
        
        const teachers = [
            {
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
        ]
              

        teachers.forEach(function(Loek){
            console.log(`I have a ${teachers.profession} named ${teachers.name} and he likes to work on a ${teachers.brand} computer`);
        });
        
console.log(Loek);