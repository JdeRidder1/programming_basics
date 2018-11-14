// global variables
const product = {
    prijs: 9.99,
    merk: 'Robijn',
    img: './assets/img/wasmiddel.png'
}

// wait until window is loaded
window.addEventListener("load", init);

let answer = 9.10;


/**
 * function to initialize the website
 * @param {event} - event
 */
function init(event) {
    console.log('DOM is loaded');
    const button = document.getElementById('submit');
    button.addEventListener('click', clickHandler);
}

//Step 2.   Function to handle the submit button
function clickHandler(event){
    event.preventDefault();
    answer = document.getElementById('price').value;
    console.log(answer);
    checkAnswer();
}

//Step 3.   Function to check the answer
function checkAnswer(){
    const message = document.getElementById('message');
    if (8.19 < answer && answer < 10.01) {
        message.innerHTML = `Je hebt gewonnen!`;
    } else {
        message.innerHTML = `Helaas je hebt het niet goed geraden`;
    }
}