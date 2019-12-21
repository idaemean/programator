
class Car {

    constructor(make, model, yearOfProduction) {
        this.make = make;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
    }

    displayMakeAndModel() {
        console.log("Make: " + this.make + ", model: " + this.model);
        }

        drive() {

        console.log("Driving");

        }
    }

    function createCar() {
    let fiat500 = new Car("Fiat", "500",2010)

        fiat500.displayMakeAndModel();
    console.log("Rok produkcji: "+ fiat500.yearOfProduction);
    }