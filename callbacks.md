Callbacks - Asynkronitet
Afprøv koden, og forsøg med egne ord at beskrive hvad det er der sker. Bryd kode eksemplet op i små bidder og benyt markdown til at beskrive det. Skriv kommentarer ud for hver enkelt linje.

```javascript
// Her oprettes funktionen getData, med to parametre.

function getData(dataURI, outputData) {
    // her oprettes en console.log funktion.. funktionen indeholder en text string, 
    // indholdet af funktionen vil blive udskrevet i konsollen. 
    console.log('første linje i getData funktionen...');

    // her oprettes en variabel, med navnet timer, inde i variablen oprettes der så en setTimeout funktion. 
    let timer = setTimeout(function () {
        // her oprettes endnu en console.log funktion.. funktionen indeholder en text string,
        console.log('Her der der gået 2 sekunder.');
        // Her oprettes et array med navnet dataArray, der indeholder en masse numre
        let dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
        // nu outputtes dataen, i arrayet
        outputData(dataArray);
        // og her defineres hvor langt timeoutet skal være, i milisekunder
    }, 2000);
}

// Her oprettes en function, med navnet outputData, den indeholder et argument som er dataArray (vores tal array)
function outputData(dataArray) {
    // her oprettes endnu en console.log funktion.. funktionen indeholder en text string + arrayet (dataArray)
    console.log('Dette er funktionen der udskriver det hentede data: ' + dataArray);
}

// her hentes der data, ved brug af en getData funktion, hjemmesiden er irrelevant, 
// men det er her outputData funtionen, bliver kaldt  
getData('http://www.domain.com/something', outputData);
// her oprettes endnu en console.log funktion.. funktionen indeholder en text string
console.log("Denne kode linje burde være den sidste.");
```
