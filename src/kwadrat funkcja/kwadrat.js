/**
 * Function for display alert purposes
 */
//
//1.	Napisz funkcję obliczającą kwadrat i sześcian zadanej liczby

function kwadrat(number1){
    let kw = number1*number1;
    return console.log(kw);
}

function szescian(number1){
    let szesc = number1*number1*number1;
    return console.log(szesc);
}

function countSquareAdnCube(value){
    let square = value**2;
    let cube = calue **3;

    console.log(square);
    console.log(cube);
}

function countAndReturnSquare(value){
    let result = value ** 2;
    return result;
}

function countAndReturnCube(value){
    let result = value ** 3;
    return result;
}

function displayResults(){
    console.log(countAndReturnCube(2));
    console.log(countAndReturnSquare(3));
}

function countAndReturnPower(value,power){
    return value ** power;
}

function displayResultsA(){
    console.log(countAndReturnPower(3,2));
    console.log(countAndReturnPower(3,3));
    console.log(countAndReturnPower(3,10));
}