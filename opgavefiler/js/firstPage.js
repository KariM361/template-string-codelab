/* Opgave 1*/


// din kode her
const navn = "Keld";
const aar = 3;
const besked = `<h2>Hej ${navn}</h2> du har været ansat i vores virksomhed i ${aar} år`;

const element = document.getElementById("message");
element.innerHTML = besked;

/* Opgave 2*/

// din kode her
const myData =[{
    "navn": "Sko",
    "beskrivelse": "et par sko i læder",
    "pris":200
},
    {
    "navn":"Sandaler",
     "beskrivelse": "et par sandaler i ruskind",
    "pris":400
    },
     {
    "navn":"Støvler",
     "beskrivelse": "et par støvler i sort",
    "pris":500
    }]
   


 const produktListe = document.getElementById("produktListe")
 let HTML = "";

 myData.forEach ((produkt) => {
HTML += `<article class = "produkt">
<h2>${produkt.navn}</h2>
<p>${produkt.beskrivelse}</p>
<p>${produkt.pris}</p>
</article>`

})
 produktListe.innerHTML= HTML;
                

/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');


// submit button event listner med arrow function
submitButton.addEventListener('click', (event) => {
event.preventDefault();
const myFormFelter = myForm.querySelectorAll('input');

/* push resultatet fra formen ind på myPersons.
vi ved der er 2 elementer derfor direkte adressering ved hjælp af []
*/
 myPersons.push({
navn: myFormFelter[0].value,
alder: myFormFelter[1].value,
 });
        
// Sorter listen efter alder og vis den på siden
const sorteretMyPersons = sorterEfterAlder(myPersons);
showList(sorteretMyPersons);
});

 // view code
function showList(sorteretMyPersons) {
let html = '';
sorteretMyPersons.map((person) => {
 // html template.
 html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
 });
personList.innerHTML = html;
 }

 // Funktion til at sortere listen efter alder
function sorterEfterAlder(myPersons) {
return myPersons.sort((a, b) => a.alder - b.alder);
        }
    



