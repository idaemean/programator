/**
 * Function for display alert purposes
 */

function cw14() {

    var temperatura1 = 14;
    var progCiepla = 25;
    var progZimna1 = 13;
    var progBardzoZimna = 5;


    switch(true) {
        case (temperatura1<progBardzoZimna):
            console.log("Za oknem jest bardzo zimno");
            break;
        case (temperatura1<progZimna1):
            console.log("Za oknem jest zimno");
            break;
        case (temperatura1<progCiepla):
            console.log("Za oknem jest ciepło");
            break;
        default:
            console.log("Za oknem jest bardzo ciepło");
    }
}
 var expr = "Mangoes";

switch (expr){
    case "Orange":
        console.log("Oranges are 5zł");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangos and papayas are 10zł");
        break;
    default:
        console.log("Sorry, we are out of "+expr);
}

