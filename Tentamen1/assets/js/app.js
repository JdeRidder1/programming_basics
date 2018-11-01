//Step 1.     I start off making an array consisting the 4 questions and answers. We test it by putting it in the console.log
const binaryQuestions = [{
    number: 1,
    question: '01101000 01100101 01101100 01101100 01101111',
    answer: 'hello'
},
{
    number: 2,
    question: '01010111 01100101 01101100 01101011 01101111 01101101',
    answer: 'welkom'
},
{
    number: 3,
    question: '01010100 01101111 01110100 00100000 01111010 01101001 01100101 01101110 01110011',
    answer: 'tot ziens'
},
{
    number: 4,
    question: '01000111 01110010 01101111 01100101 01110100 01101010 01100101 01110011',
    answer: 'groetjes'
}
];

//Step 2.   Make the two variables
let answer = null;
let currentQuestion = randomizeQuestion();

window.addEventListener('load', init);

//Step 3.   Write the main function to initialize the application
function init(event) {
    console.log('DOM is loaded');
    console.log(currentQuestion);
    writeQuestion();
    const button = document.getElementById('submit');
    button.addEventListener('click', clickHandler);
} 

//Step 4.   Function to handle the submit button
function clickHandler(event){
    event.preventDefault();
    answer = document.getElementById('inputAnswer').value;
    console.log(answer);
    checkAnswer();
}


//Step 5.   Function to check the input value with the current question
function checkAnswer(){
    const answerText = document.getElementById('answerText');
    if(currentQuestion.answer == answer){
        answerText.innerHTML = `Je antwoord is <span class="bg-green">${answer}</span> is helemaal goed! `;
    } else {
        answerText.innerHTML = `Helaas, antwoord <span class="bg-red">${answer}</span> is niet goed, probeer het nog eens. `;
    }
}


//Step 6.   Function to write the question to the DOM   
function writeQuestion(){
    console.log('writing the question')
    const questionTextPos = document.getElementById('questionText');
    questionTextPos.innerHTML = currentQuestion.question
}

//Step 7.   Function to randomize the question 
function randomizeQuestion(){
    return binaryQuestions[Math.floor(Math.random()*binaryQuestions.length)];
}

 