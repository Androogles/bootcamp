Øvelse 7 
Benyt markdown til at beskrive hvordan en if-else sætning fungerer i praksis. ??

En if else sætning, er en betingelse der skal modtage et true eller false statement, enten hvis det her er rigtig sker der en ting, ellers sker der noget andet, if og else kan ikke udskrives sammentidigt, det er enten eller, i modsætning til feks. en Switch Case.

```javascript
let navn = "Andreas";

if (navn == "Andreas") {
    console.log("Hej Andreas");
}
else {
    console.log("Det er ikke dit navn");
}
```
Sørg samtidig for at beskrive alle de tegn der skal benyttes i if-else strukturen. ??

Som vist i eksemplet starter man med if, og så parentes åben luk. Den parentes skal indeholde en variabel, der kunne også være en operator der stillede et spørgmål, til variablen i parentesen. Efter () skal der tilføjes en {}, det er inde i den at koden for if eller else bliver defineret.    
```javascript

let FunktionsNavn = "Funktion1";

if (FunktionsNavn) {
    // Kode her
}
else {
    // Kode her
}
```
