// 2. Zorg ervoor dat alle even elementen een andere achtergrondkleur krijgen. Gebruik hiervoor JS en maak zoveel mogelijke gebruik van functies.
// i will be useing the same table as in assignment 1.

function changeBackground() {
    const table = document.getElementById('courses');
    const rows = table.getElementsByTagName("tr"); //get all the rows of the table
    for (i = 0; i < rows.length; i++) {
        //manipulate rows 
        if (i % 2 == 0) {
            rows[i].classList.add('even');
        }
    }
}
changeBackground();