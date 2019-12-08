/**
 * Function for display alert purposes
 */
//1.	Napisz funkcję obliczającą objętość prostopadłościanu w dwóch wariantach:
// ◦	argumentami są długość, szerokość, wysokość
// ◦	argumentami są pole podstawy, wysokość
// 2.	Spróbuj napisać funkcję w wariancie a. tak, aby korzystała (tj. wywoływała) funkcję z wariantu b.

function objetosc(dlugosc,szerokosc,wysokosc){
    let objetosc = dlugosc*szerokosc*wysokosc;
    console.log(objetosc)
}

function objetoscZPolem(podstawa,wysokosc){
    let objetosc = podstawa*wysokosc;
    console.log(objetosc)
}

function podstawa(dlugosc,szerokosc) {
    let polePodstawy=dlugosc*szerokosc;
    return polePodstawy;
}

function objetoscZOdwolaniem(dlugosc,szerokosc,wysokosc){
    if (dlugosc>0 && szerokosc >0 && wysokosc>0) {
        let objetosc = podstawa(dlugosc, szerokosc) * wysokosc;
        return objetosc;
    }
    else {
        return "jedna z wartości  jest ujemna";
    }
}

function wywolanie(){
    console.log(objetoscZOdwolaniem(2,2,-6))
}

// wersja z try

function funcWithThreeParams(a,b,h){
    if (a<=0|| b<=0 || h<=0) {
        throw "Podano nieprawidłówy argument";
    }
    let area = a*b;
    let result = funcWithTwoParams(area,h);
    return result;
}

function funcWithTwoParams(area,h) {
    let result = area*h;
    return result;
}

function getResults(){
    try {
        let finalResult = funcWithThreeParams(0, 2, 3);
        console.log(finalResult);
    } catch (e) {
        console.log(e);
    }
}