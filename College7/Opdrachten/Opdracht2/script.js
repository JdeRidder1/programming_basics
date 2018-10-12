// 2. Gegeven is de volgende 2-dimensionale array van al mijn platen:
// const allMyRecords = [
//    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
//    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
// ];
// Console.log alle waarden uit deze 2-dimensionale array. Tip: gebruik een dubbele loop.

const allMyRecords = [
  ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
  ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

for (let i = 0; i < allMyRecords.length; i++) {
  for (let j = 0; j < allMyRecords[i].length; j++) {
      console.log(allMyRecords[i][j])    
  }
}