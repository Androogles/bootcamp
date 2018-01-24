Løkker
Benyt markdown til at beskrive hvordan hver af de tre løkker fungerer ???

For
Løber gennem en arrayet, et bestemt antal gange.

En for sætning har 3 statements.
Statement 1 is executed before the loop (the code block) starts.
Statement 2 defines the condition for running the loop (the code block).
Statement 3 is executed each time after the loop (the code block) has been executed.

De bliver defineret inde i paranteserne efter for. 

Eksempel:
```javascript
var text = "";
var i;

for (i = 0; i < 5; i++) {
    text += "The number is " + i + " ";
}
console.log(text);
```

While
Løber gennem arrayet så længe en bestemt betingelse er sand.

Eksempel: 
```javascript
var text = "";
var i = 0;
while (i < 10) {
    text += "The number is " + i + " ";
    i++;
}
console.log(text);
```

Do While 
Løber også igennem arrayet så længe en bestemt betingelse er sand.

Eksempel:
```javascript
var text = "";
var i = 0;

do {
    text += "The number is " + i + " ";
    i++;
}
while (i < 10);

console.log(text);
```
Løkker Del 2
Benyt markdown til at beskrive hvad en forEach er, og hvordan den kan benyttes til at løbe igennem et array ??

en forEach er ind indbygget java funktion. ForEach er ligesom for, en måde at løbe igennem et array på. bortset fra at det er en integreret call Back funktion.
    

Eksempel:
```javascript
let navne = ["Kim", "Hans", "Albert", "Henning"];

navne.forEach(function (navn) {
    console.log(navn);
});
```