// Betingelser Opgaver

// Øvelse 2
let bolean = true;

if (bolean) {
    console.log("hej verden");
}
else {
    console.log("Falsk");
}

// Øvelse 3
let tal = 6;
console.log(tal);

if (tal > 5) {
    console.log(8);
}

// Øvelse 4
let workHarder = true;
let result = workHarder ? "Jep, der skal arbejdes hårdere" : "Nope, der arbejdes fint";
console.log(result);

// Øvelse 5
let Læskedrik = "Cola";

if (Læskedrik == "FaxeKondi") {
    console.log("Det min yndlings sodavand");
}
else if (Læskedrik == "Cola") {
    console.log("Det ikke min, yndlingsodavand");
}

else if (Læskedrik == "Sprite") {
    console.log("Heller ikke den");
} else {
    console.log("ukendt");
}

// Øvelse 6
let YndlingsSodavand = "Faxe Kondi";

switch (YndlingsSodavand) {
    case "Faxe Kondi":
        console.log(YndlingsSodavand, "Korrekt Sodavand");
        break;
    case "Coca Cola":
        console.log(YndlingsSodavand, "Forkert Sodavand");
        break;
    case "Sprite":
        console.log(YndlingsSodavand, "Forkert Sodavand");

    case "Fanta":
        console.log(YndlingsSodavand, "Forkert Sodavand");
        break;
    default:
        console.log(YndlingsSodavand, '"Forkert Sodavand"');
        break;
}


