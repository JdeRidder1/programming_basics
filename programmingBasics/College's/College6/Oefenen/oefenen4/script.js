//Schrijf een functie writeASound(animal)die op basis van het dier dat je invoert een geluid schrijft naar de console. 
//Hou het even bij een beperkt aantal dieren 

const writeASound = function (animal) {
    if (animal == 'cat') {
        sound = 'Miauw';
    } else if (animal == 'dog') {
        sound = 'Woef! Woef!';
    }
    console.log('This animal says ; ' + sound);
}

writeASound('dog');

