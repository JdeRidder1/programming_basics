window.addEventListener('load', init);


//Step 1.   Create the init function, the main function. 
/**
 * Function to initialize the application
 * @param {*} event 
 */
function init(event) {
    console.log('in init');
    console.log(Ricciardo, Verstappen);
    console.log(lapTime);
    const button = document.getElementById('submit');
    button.addEventListener('click', clickHandler);
}

//Step 2.     I start off making two array's consisting the given laptimes from the drivers. We test the array in the console.log
var Ricciardo = [4.01, 5.04, 4.76];
var Verstappen = [4.03, 4.23, 4.56];

//Step 3.       Create the clickHandler
function clickHandler(event){
    event.preventDefault();
    (lapTime) = document.getElementById('lapTime').value;
    console.log(lapTime);
    addLapTime();
}



var sumRicciardo = Ricciardo.reduce(add, 0);
function add(a, b) {
    return a + b;
}
console.log(sumRicciardo); 


//Step 5.   Create the function that adds laptimes to the total laptimes
function addLapTime() {
    event.preventDefault();
    var totalRicciardo = document.getElementById('totalRicciardo');
    var totalVerstappen = document.getElementById('totalVerstappen');
    var driver = document.getElementById('driver');
    if (driver.value = "Verstappen") {
        Verstappen.push (lapTime);
        //create the sum for the array
        var sumVerstappen = Verstappen.reduce(add, 0);
            function add(a, b) {
            return a + b;
                }
            console.log(sumVerstappen); 
        totalVerstappen.innerHTML = sumVerstappen;
        console.log(Verstappen);
    } else if (driver.value = "Ricciardo") {
        Ricciardo.push(lapTime);
            //create the sum for the array
            var sumRicciardo = Ricciardo.reduce(add, 0);
            function add(a, b) {
            return a + b;
                }
            console.log(sumRicciardo); 
        totalRicciardo.innerHTML = sumRicciardo;
        console.log(Ricciardo);
    }
}

