// Hygge Opgaver

// 1.1

// var navn = "";
// var alder = "";
// var adresse = "";

// var fejlbeskeder = [];


// if (navn == "") {
//     fejlbeskeder.push("Du skal udfylde navn feltet\n");
// }

// if (alder == "") {
//     fejlbeskeder.push("Du skal udfylde alder feltet\n");
// }

// if (adresse == "") {
//     fejlbeskeder.push("Du skal udfylde adresse feltet\n");
// }

// console.log(fejlbeskeder);

// Fibonachi Sequence
// let fibonacci_series = function (n) {
//     if (n === 1) {
//         return [0, 1];
//     }
//     else {
//         let s = fibonacci_series(n - 1);
//         s.push(s[s.length - 1] + s[s.length - 2]);
//         return s;
//     }
// };

// console.log(fibonacci_series(17));

// Palindrom
// function checkPalindrome(word) {
//     var l = word.length;
//     for (var i = 0; i < l / 2; i++) {
//         if (word.charAt(i) !== word.charAt(l - 1 - i)) {
//             return false;
//         }
//     }
//     return true;
// }

// if (checkPalindrome("101")) {
//     console.log("The word is a palindrome");
// } else {
//     console.log("The word is NOT a palindrome");
// }

// Plum Bus
// for (let tal = 1; tal <= 30; tal++) {
//     let resultalt = tal;
//     if (tal % 3 == 0) {
//         resultalt = "plum";
//     }
//     if (tal % 5 == 0) {
//         resultalt = "bus";
//     }
//     if (tal % 15 == 0) {
//         resultalt = "plum bus";
//     }
//     console.log(resultalt);
// }