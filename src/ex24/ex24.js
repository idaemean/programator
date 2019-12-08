/**
 * Function for display alert purposes
 */
class Person {

    constructor(name, surname, age) {
        this.name=name;
        this.surname= surname;
        this.age = age;
    }

    displayNameAndSurname(){
        console.log("Imię: "+this.name+ ", nazwisko: " + this.surname);
    }
    getNameAndSurname(){
        return "Imię: "+this.name+ " nazwisko " + this.surname;
    }
}

function createPerson(){
    let person1 = new Person("jan", 'kowalski', 20);
    person1.displayNameAndSurname();
}