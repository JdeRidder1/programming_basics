// 3. Maak een functie een functie createImageElement(‘imageSrcName’) die een plaatje in JS maakt(img tag genereert met bijbehorende attributen) en deze vervolgens in het DOM zet.
function createImageElement(imageSrcName){
    // 1. where in the DOM
    const ph = document.getElementById('body');
    // 2. what to create
    const image = document.createElement('img');
    image.src = imageSrcName;
    image.alt = 'My beautifull image';
    // 3. add it to the dom
    ph.appendChild(image);
}

createImageElement('https://picsum.photos/200/300');