Tildeings Operator. 
=

i første sætning bliver der oprettet variablen navn, som får tilføjet værdien x, på linje to ændres den værdi til finn.
 Eksempel:
```javascript
let navn = "x"
navn = "finn";
``` 

Sammenlignings operator
== 

Sammenligner værdier, for at tjekke om de er ens eller forskellige fra hinanden 
Eksempel:
```javascript
let x = 5;

if (x == 5) {
    console.log("X er lig med 5");
}else {
    console.log("X er ikke lig med 5");
}
``` 

Tjekker også om datatypen er den samme
=== 

Eksempel:
```javascript
let x = 5;

if (x === 5) {
    console.log("samme Datatype");
}else {
    console.log("ikke samme datatype");
}
```

Vender et statement (operator) 
!
```javascript
let x = "hej";
if (!isNaN(x)) {
    console.log("Det er et nummer");
} else {
    console.log("Det er ikke et nummer");
}
```


Ikke lig med
!=

Eksempel:
```javascript
let x = 2.5;
let y = 2.5;

if (x + y != 5) {
    console.log("Forkert Resultat")
} else {
    console.log("Ritgt Resultat");
}
```

ikke lig med & ikke det samme indhold
!==

Eksempel:
```javascript
let x = "Hej Verden";

if (x !== "Hej Verden") {
    console.log("Teksten Skal være hej verden!")
} else {
    console.log("Korrekt");
}
```

Større end og mindre end
<
>
Eksempel:
```javascript
let x = 15;
let y = 12;

// Større end
if (x > y) {
    console.log("X er større end Y")
} else {
    console.log("X er mindre end Y");
}

// Mindre end
if (x < y) {
    console.log("Y er større end X");
} else {
    console.log("Y er mindre end X")
}
```

Smaller than and equal
<=

Eksempel:
```javascript
let x = 10;

if (x <= 10) {
    console.log("korrekt")
} else {
    console.log("Tallet i variablen skal være mindre end 10, eller lig med");
}
```
Greater than and equal
>=
Eksempel:
```javascript
let x = 10;

if (x >= 10) {
    console.log("korrekt")
} else {
    console.log("Tallet i variablen skal være større end 10, eller lig med");
}
```

Plus
Plusser eller sammensætter værdier og data.
+

Eksempel:
```javascript 
let x = 5;
let y = 5;

console.log(x + y);
```

Minus
-

Eksempel:
```javascript 
let x = 10;
let y = 5;

console.log(x - y);
```

Gange
*

Eksempel:
```javascript 
let x = 132;
let y = 154;

console.log(x + y);
```

Dividere
/

Eksempel:
```javascript 
let x = 25;
let y = 5;

console.log(x / y);
```

Modulus 
%

Modulus Tar to værdier, og fratrækker den mindste værdi, fra den største, indtil der ikke er mere at tag af. i dette eksempel ville resultatet blive 0, for hvis man trækker 5 fra 25 så mange gange man kan, ender man på 0. havde x været 26. havde resultatet været 1. 

Eksempel:
```javascript 
let x = 25;
let y = 5;

console.log(x % y);
```

Begge sider af koden skal være sand.
&&

Eksempel:
```javascript
let number = 15;
let name = "Albert";

if (number === 15 && name === "Albert") {
    console.log("Begge udsagn er sande!");
} else {
    console.log("Forkert Udsagn!");
}
```

Kun et udsagn behøver at være sandt
||

Eksempel:
```javascript
let number = 15;
let name = "Albert";

if (number === 15 || name === "Albert") {
    console.log("Begge, eller 1 udsagn er sandt");
} else {
    console.log("Ingen udsagn er rigtige!");
}
```