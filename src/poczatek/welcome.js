/**
 * Function for display alert purposes
 */

function welcomeAlert() {

    var a = 2;
    var b = 3;
    var pole = a * b;
    console.log(pole);

    var c = 2;
    var d = 3;
    var e = 4;
    var srednia = (c + d +e) /3;
    console.log(srednia);

    var dystans = 20;
    var spalanie = 0.3;
    var paliwo = dystans*spalanie;
    console.log(paliwo);

    var dzis = "Wtorek";
    var dzienTygodnia = "Poniedziałek";
    console.log("Czy dziś jest poniedziałek?" + dzis===dzienTygodnia);

    var liczba=3;
    var liczba1 = 4;
    console.log("co zostaje po podzieleniu przez 2?" +liczba%2)
    console.log("co zostaje po podzieleniu przez 2?" +liczba1%2)

    var czerwiec = "Czerwiec";
    var sierpien = "Sierpień";
    console.log(czerwiec.length);
    console.log(sierpien.length);
    console.log("czy napis czerwiec jest dluższy niż napis sierpień?");
    console.log(czerwiec.length>sierpien.length);


    var age=18;

    if (age > 18){
        console.log("Więcej niż 18");
    } else if (age === 18) {
        console.log("Równe 18 lat");
    } else {
        console.log("Mniej niż 18 lat");
    }

    var temperatura = 10;
    var progZimna = 13;

    if (temperatura > progZimna){
        console.log("Za oknem jest ciepło");
    } else {
        console.log("Za oknem jest zimno");
    }

    var temperatura1 = 3;
    var progCiepla = 25;
    var progZimna1 = 13;
    var progBardzoZimna = 5;

    if (temperatura1 > progCiepla){
        console.log("Za oknem jest bardzo ciepło");
    } else if (temperatura1>progZimna1){
        console.log("Za oknem jest ciepło");
    } else if (temperatura1>progBardzoZimna) {
        console.log("Za oknem jest zimno");
    } else {
        console.log("Za oknem jest bardzo zimno");
    }


}