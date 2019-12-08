/**
 * Function for display alert purposes
 */

function cw14() {
var expr = 25;

var wynik = expr > 20 ? "Wartość jest wieksza od 20" : "Wartość jest mniejsza lub równa 20";

var wynik2 = expr > 20 ?
    expr <30 ? "WIeksze od 20 i od  mniejsze od 30"
        : "Wieksze od 20 i wieksze od 30"
        : "Wartosc mniejsza lub rowna 20";

console.log(wynik);
console.log(wynik2);

}

