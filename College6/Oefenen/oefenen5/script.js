//Schrijf een functie makeASound(animal)die op basis van het dier dat je invoert een geluid maakt. 
//Probeer op te zoeken hoe je een geluid kan afspelen in JS.

const makeASound = function (animal) {
    var audio = new Audio('./sounds/' + animal + '.mp3');
    audio.play();
}
