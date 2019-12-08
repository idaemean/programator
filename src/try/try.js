/**
 * Function for display alert purposes
 */


function testException(){
//let a =2;

    try {
        console.log("Początek try")
        console.log(a); //tutaj zostanie rzucony wyjątek
        console.log("Dalsza część try")
    } catch (e) {
        //blok kodu wykonywany w przypadku rzucenia wyjątku
        console.log(e);
        console.log("Koniec catch");
    } finally {
        //blok kodu wykonywany niezależnie od tego czy pojawi się wyjątek
        console.log("Sekcja finally");
    }


    }

function testException1(){
//let a =2;

    try {
        console.log("Początek try")
        throw new Error("Wyjątek w linii 20"); //własny wyjątek
        console.log("Dalsza część try")
    } catch (e) {
        //blok kodu wykonywany w przypadku rzucenia wyjątku
        console.log(e);
        console.log("Koniec catch");
    } finally {
        //blok kodu wykonywany niezależnie od tego czy pojawi się wyjątek
        console.log("Sekcja finally");
    }


}