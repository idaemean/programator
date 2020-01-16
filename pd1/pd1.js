var cats = ["Mruczek", "Puszek", "Klakier", "Behemot", "Bonifacy"];

function wyswietl() {
    for (i = 0; i < cats.length; i++) {
        console.log(cats[i])
    }
    cats[0] = prompt("Name your cat", "Cat name");
}