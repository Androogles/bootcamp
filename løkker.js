// // Løkker
// //Øvelse 2


// // While
let text = "";
let i = 0;

while (i < 25) {
    i++;
    console.log(" Nummer " + i);
}

// // For
let text = "";
let i = 0;

for (i = 0; i <= 25; i++) {
    console.log(i);
}

// // Do While
let text = "nummer";
let i = 0;

do {
    console.log(text, i);
    i++;
} while (i <= 25);

// //Øvelse 3
let text = "nummer";
let i = 0;

do {
    i++;
    console.log(text, i);
} while (i % 25);

// //Øvelse 4
for (let i = 2017; i >= 1917; i--) {
    console.log(i);
}

// //Øvelse 5
let ugedage = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];

ugedage.forEach(function (dage, index) {
    console.log("idag er det " + dage + " Nr " + index);
});

// //Øvelse 7
let navne = ["Andreas", "Marcus", "Marc", "Nicolai"];

navne.forEach(function (navn) {
    console.log("Mit Navn er: " + navn);
});

// //Øvelse 8
let navne = ["Volbeat", "Eminem", "Xibit", "Mozart"];

navne.forEach(function (navn, index) {
    console.log(navn + " Nr " + index);
});

// //Øvelse 9  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let tal = [1, 2, 3, 40, 5, 6, 7, 8, 9, 10];

tal.forEach(function (tjo, index, arr) {
    if (arr[index + 1] != undefined) {
        if (tal <) {
        }
        console.log(tjo + ' er mindre end ' + arr[index + 1]);
    } else {
        console.log('slutter her');
    }
});


