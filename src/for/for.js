/**
 * Function for display alert purposes
 */


    //1.	Wykorzystaj pętlę while do obliczenia sumy liczb naturalnych od 0 do pewnej liczby przechowywanej w zmiennej
    // 2.	Wyświetl sumę na ekranie
    // 3.	Sprawdź poprawność obliczeń

    function suma() {
        for (let value =0; value <10; value ++) {
            if (value%2===0){
                console.log(value);
            }
        }
    }

    function testForWhileDoubleIncrease(){
        for (let value=0; value <10; value +=2){
            console.log(value);
        }
    }


//1.	Przy użyciu pętli for wypisz wszystkie liczby podzielne przez 3, ale mniejsze od wartości przechowanej w innej zmiennej, w kolejności od 0 rozpoczynając

function for3(){
        licznik=20;
        for (let value=0; value<licznik; value++){
            if (value%3===0){
                console.log(value);
            }
        }
}

function for3a(){
    licznik=20;
    for (let value=0; value<licznik; value+=3){
            console.log(value);

    }
}