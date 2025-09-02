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
    // const element = document.getElementById("ProduktListe");
    //                 element.innerHTML = myData;

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
                
// const myData =[{
//     "navn": "t-shirt"   
//      "beskrivelse": "En t-shirt lavet af bomuld",
//      "pris": 99 },
//      { "navn": "Jeans",
//     "beskrivelse": "Blå denim jeans med straight fit",
//      "pris": 299
//      },
//     { "navn": "Hættetrøje",
//      "beskrivelse": "En grå hættetrøje med lynlås",
//       "pris": 199 }
              
// }]




/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');


