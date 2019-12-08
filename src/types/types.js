

function testTypes() {
    const NAME = "Adam";
   let age = 29;
   let name = "Jola";
   // NAME = "Zosia";
    var isOlderThanFourty = true;

    console.log(age + "," +name);
   console.log(NAME);
    console.log(isOlderThanFourty);
    console.log("name is a type of : "+ typeof name);
    console.log("isOlderThanFourty is a type of : "+ typeof isOlderThanFourty);

    var a = 1;
    var b = 18;
    var c= 3;
    console.log(b%c +1);
    console.log((b+c)/c);

    console.log(a>=(b%c));
    console.log(a<(b%c));
    console.log((a>=(b%c))||(a>=(b%c)));
    console.log(a!=b && b!=c);
    console.log(a!=b && b==c);

    console.log("instanceof")
    var name1 = name;
    var name2 = "abc" + name1;
    console.log(name instanceof String);
    console.log(name1 instanceof String);
    console.log(name2 instanceof String);

}