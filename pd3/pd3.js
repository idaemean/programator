var warzywa = new Map([
    ["marchewka", 3],
    ["kapusta", 4],
    ["ziemniak", 2]
]);

function wyswietlMap() {
    for (let [key, value] of warzywa) {
        console.log("cena " + key + ": " + value + "zł");
    }
}