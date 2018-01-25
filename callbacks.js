// Callbacks
// Opgave 1

function MinFunktion(drikkelse) {
    console.log(drikkelse);
}

MinFunktion("vand")

// Opgave 1,1
function MyFunction(element) {
    console.log(element);
}

let data = [1, 2, 3, 4, 5, 6];
data.forEach(MyFunction);

// Opgave 2
function udSkriv(navn) {
    console.log("<p>" + navn + "</p>");
}
function Modtag(tekst, callback) {
    callback(tekst);
}

Modtag("racecar", udSkriv);