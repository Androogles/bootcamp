Funktioner
Beskriv med egne ord hvad en funktion er, vis et eksempel på en funktion og hvordan funktionen benyttes ??

En funktion er en slags variabel. der udover bare at sammensætte et navn, med en værdi. også Kan indeholde betingelser. man kan så kalde funktionen hvor i koden den skal bruges. og spare mange gentagelser. 

Eksempel:
```javascript
// Eksempel på Syntax
function functionName() {
   // function body
   // optional return; 
}

// Eksempel på kode
function MyFunction(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 0;
    } else {
        return a + b;
    }
}
console.log(MyFunction(25, 5));
``` 

Forklar hvad et argument er for noget, kom med et kodeeksempel ??

Et parameter er lidt det samme som et argument

Eksempel:
```javascript 
// Parameterne bliver defineret her, efter: function argument (eksempel1, parameter2, parameter).
function argument(Parameter1, Parameter2) {
    return Parameter1 + Parameter2;
}
// Argumetet/værdien til parameterne, bliver defineret her.
console.log(argument(125, 156))
```   

Beskriv hvad returværdier, og vis et kodeeksempel hvor der benyttes returværdier ??

En returværdi lidt det modsatte af en callback function, som tar noget data man har givet den, og giver et resultat tilbage.
Kode forklaring, hvis x og y ikke er et nummer, skal den returne 0; ellers skal den returne x - y. 

Eksempel:
```javascript
function MyFunction(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return 0;
    } else {
        return x - y;
    }
}

console.log(MyFunction(10, 15));
```