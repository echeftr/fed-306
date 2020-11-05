// Deel A
/* Opdracht: JavaScript Functies (Conceptueel)
Deel A: Schrijf je eerste functie
Je gaat een broodjeswinkel openen! Het eerste broodje op je menu is een Hollands broodje kaas. Ondanks dat het een Hollands broodje is gaan we de functie wel in het Engels schrijven.

Schrijf een pseudo-functie (een bullet list), zoals in de video, voor het recept voor jouw broodje. Schrijf het in comments uit in je JavaScript file.
Kopieer je pseudo-functie, zodat je er 2 hebt, en verander de onderste pseudo-functie in een echte JavaScript functie, behoudt de uitgeschreven taken in je functie.
Verander de uitgeschreven taken in de functie in console.log([hier de omschrijving van jouw taak]).
Roep de functie aan, onder aan je file. "Call the function".
Run je code in Node.
Zie je de stappen voor je functie in de console verschijnen? */

// Make a Dutch sanwich
// Steps to follow for making a DutchSandwich:
// . Take one slice of bread
// . Take a slice of cheese
// . Add lettuce, tomatoes and sauce
// . Put another slice of bread on top

let makeDutchSanwich = function () {
    console.log("DutchSandwich > Steps to follow:");
    console.log("- Take one slice of bread");
    console.log("- Take a slice of cheese and put it on top of the bread");
    console.log("- Add lettuce, tomatoes and sauce on the cheese");
    console.log("- Put another slice of bread on top");
    console.log("-- There you go, your sandwich is ready. Enjoy!");
}
makeDutchSanwich();



// Deel B
/* Deel B: Schrijf een functie met een argument
Naast een broodje gezond ga je ook nog andere broodjes serveren in je winkel.

Kopieer de functie die je had en herschrijf met de naam makeSandwich
De functie accepteert 1 argument genaamd topping ...
... en retourneert een broodje met dat beleg .
Doe dat op de volgende manier `console.log("There you go, a sandwich with ...... (hier jouw beleg)") op de puntjes moet het beleg komen te staan. (nee, dit is inderdaad niet de correcte syntax).
Run de code in Node
Bekijk je code en bedenk voor jezelf wat is een function declaration ? Oftewel waar maak ik mijn functie? Waar call ik mijn functie. Oftewel: waar roep ik mijn functie aan? Hoe ziet die syntax eruit?
Zet in comments bij je code waar je de functie declareert en waar je de functie called.
Zet nog een function call in je code, zodat de functie 2x runt. Geef een ander argument zodat je een broodje krijgt met een ander beleg. */

let makeSanwich = function (topping) {
    console.log("makSandwich " + topping + " > Steps to follow:");
    console.log("- Take one slice of bread");
    console.log("- Take a slice or protion of " + topping + " and add it on top of the bread");
    console.log("- Add lettuce, tomatoes and sauce on the cheese");
    console.log("- Put another slice of bread on top");
    console.log("-- There you go, your sandwich with " + topping + " is ready. Enjoy!");
}
makeSanwich('Chicken');
makeSanwich('Ham and Egg');
makeSanwich('Steak');

// Deel C
/* Deel C: gebruik een return statement
Je krijgt een nieuw kassa systeem! En je hebt een nieuwe kortingsactie in je broodjeszaak!

Schrijf een functie calculateDiscountedPrice
De functie accepteert 2 argumenten totalAmount , discount (beide in Euro's)
De functie retourneert* de totaalprijs minus de korting. *gebruikt dus een return statement
Gebruik Math.round om af te ronden.
Run de code in Node */

let calculateDiscountedPrice = function (totalAmount, discount) {
    console.log(Math.round(totalAmount - discount));
}
calculateDiscountedPrice(10, 2);

// Deel D
/* Deel D: gebruik meerdere return statements
De korting is alleen geldig bij een bedrag van meer dan 25 euro!

Maak een 2de functie die precies hetzelfde doet als calculateDiscountedPrice (hernoem!)
Gebruik een if-statement die checkt of de totalAmount wel groter is dan 25 euro.
Wanneer niet, retourneer* de totalAmount zonder korting. *Gebruik dus een return statement.
 */

let discountedPrice = function (totalAmount, discount) {

if (totalAmount > 25) {
    console.log(Math.round(totalAmount - discount));
} else {
    console.log(totalAmount);
}
}
discountedPrice(30, 2);