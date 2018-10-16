// 1. Maak een if-else statement die checkt of iemand een onvoldoende/voldoende/goed/uitmuntend voor het vak programming basics heeft behaald.  (onvoldoende:  kleiner dan 6; voldoende: tussen 6 en 7; goed: tussen 7 en 9; uitmuntend: groter dan 9).

const myNewestResult = 8;
if (myNewestResult < 6) {
    console.log('Uw resultaat is onvoldoende');
} else if (myNewestResult >= 6 && myNewestResult < 7) {
    console.log('Uw resultaat is voldoende');
} else if (myNewestResult >= 7 && myNewestResult < 9) {
    console.log('Uw resultaat is goed');
} else if (myNewestResult >= 9 && myNewestResult <= 10) {
    console.log('Uw resultaat is uitmuntend');
} else {
    console.log('stop trolling svp', myNewestResult);
}