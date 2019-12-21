class Car {
    constructor(name, price, isDiesel) {
        this.name = name;
        this.price = price;
        this.isDiesel = isDiesel;
        this.isInsured = isInsured;
    }

    drive() {
        return 'Silnik włączonyyy';
     }
}

let car = new Car('Mercedes', 35000, false, true);
console.log(car.name); 
console.log(car.drive()); 
