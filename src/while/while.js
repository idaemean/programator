/**
 * Function for display alert purposes
 */
function testWhileWithModulo() {
    let value3 = 0;
    while (value3 < 10) {
        if (value3 % 2 === 0) {
            console.log(value3);
        }
        value3++;
    }
}


function testWhile() {
    let value2 = 0;
    while (value2 < 10) {
        console.log(value2);
        value2 += 2;
    }
}

function cw14() {
    let value = 5;

    while (value > 0) {
        console.log("Wartość:");
        console.log(value);
        value -= 2;
    }

}


    //1.	Przy użyciu pętli while wypisz wszystkie liczby podzielne przez 3, ale mniejsze od wartości przechowywanej w innej zmiennej, w kolejności od 0 rozpoczynając
function co3() {
    let licznik = 0;
    let liczba = 20;

    while (licznik < liczba) {
        licznik++;
        if (licznik % 3 === 0) {
            console.log(licznik);
        }

    }
}

    //1.	Wykorzystaj pętlę while do obliczenia sumy liczb naturalnych od 0 do pewnej liczby przechowywanej w zmiennej
    // 2.	Wyświetl sumę na ekranie
    // 3.	Sprawdź poprawność obliczeń

    function suma() {
        let licznik1 = 0;
        let liczba1 = 5;
        let suma = 0;
        while (licznik1 <= liczba1) {
            suma = suma + licznik1;
            licznik1++;
        }
        console.log(suma);
    }


