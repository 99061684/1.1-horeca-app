/*
naam leerling: Bas Verdoorn
klas: 4TOT
opleiding: Software Developer

*/

//speciale code
//Math.abs(negatief); -> postief
//.toLowerCase(); string veranderen van hoofdletters naar kleine letters
//.toFixed(...); afronden op ... decimalen (aantal decimalen)
//.replace('1', '2'); veranderd 1 in 2 (kan ook met andere tekens, letters en cijfers)

//iets checken
var rekening_check = false;
var breakCheck1 = false;

//de prijzen per product.
const price = {fris:1.00, bier:1.75, wijn:2.00, bitterballen8:2.00, bitterballen16:3.00};

//het te betalen bedrag.
var cost = {fris:0, bier:0, wijn:0, bitterballen8:0, bitterballen16:0};

//het standaard aantal producten dat je koopt.
var aantal = {fris:0, bier:0, wijn:0, bitterballen8:0, bitterballen16:0};

//tijdelijke var opslag 
var tijdelijke_opslag1 = 0;

//tekst bij de rekening kopjes
const het_aantal = "------------&lt; <b> de aantallen gekochte producten </b> &gt;------------------";
const de_rekening = "--------------&lt; <b> het te betalen bedrag </b> &gt;------------------";
const het_totaal = "---------------";
const de_ppp = "---------&lt; <b> prijs per product </b> &gt;---------";

//functies vooraf aanspreken
prijsweergave_menu();

// ----- uitleg woorden, functies, etc. ------
//bestelling = neemt de bestelling op en veranderd het eerder opgegeven aantal fris en telt het nieuwe opgegeven aantal fris erbij op
//bestelling2 (verouderd)= neemt de bestelling op en veranderd het eerder opgegeven aantal fris in het nieuwe opgegeven aantal
//verouderd = oudere versie bijv. geen mogelijkheid tot bestellen bitterballen

function prijsweergave_menu(){ //de standaard prijs van het product weergeven op de menu pagina

  if (price['fris'] != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_fris").innerHTML =
    "Fris €" + price['fris'].toFixed(2).replace('.', ',');
  }

  //de standaard prijs van het product weergeven op de site
  if (price['bier'] != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_bier").innerHTML =
    "Bier €" + price['bier'].toFixed(2).replace('.', ',');
  }

  //de standaard prijs van het product weergeven op de site
  if (price['wijn'] != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_wijn").innerHTML =
    "Wijn €" + price['wijn'].toFixed(2).replace('.', ',');
  }

  if (price['bitterballen8'] != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_bitterballen1").innerHTML =
    "Bitterballen schaal 6 stuks €" + price['bitterballen8'].toFixed(2).replace('.', ',');
  }

  if (price['bitterballen16'] != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_bitterballen2").innerHTML =
    "Bitterballen schaal 18 stuks €" + price['bitterballen16'].toFixed(2).replace('.', ',');
  }
}

function rekening_weergave(){ //geeft de rekening weer op de website
  // prijsweergave_rekening(); 

  cost['fris'] = price['fris'] * aantal['fris'];  //de berekening voor het te betalen bedrag van een product

  if (cost['fris'] != null && cost['fris'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag1").innerHTML =
    aantal['fris'] + "x Fris ("+ price['fris'].toFixed(2).replace('.', ',') +")";
  } else if (cost['fris'] == 0) {
    document.getElementById("bedrag1").innerHTML =
    "";
  }

  if (cost['fris'] != null && cost['fris'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP1").innerHTML =
  "€" + cost['fris'].toFixed(2).replace('.', ',');
  } else if (cost['fris'] == 0) {
    document.getElementById("kostenP1").innerHTML =
    "";
  }

  cost['bier'] = price['bier'] * aantal['bier'];  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (cost['bier'] != null && cost['bier'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("bedrag2").innerHTML =
  aantal['bier'] + "x bier ("+ price['bier'].toFixed(2).replace('.', ',') +")";
  } else if (cost['bier'] == 0) {
    document.getElementById("bedrag2").innerHTML =
    "";
  }

  if (cost['bier'] != null && cost['bier'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP2").innerHTML =
  "€" + cost['bier'].toFixed(2).replace('.', ',');
  } else if (cost['bier'] == 0) {
    document.getElementById("kostenP2").innerHTML =
    "";
  }

  cost['wijn'] = price['wijn'] * aantal['wijn'];  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (cost['wijn'] != null && cost['wijn'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("bedrag3").innerHTML =
  aantal['wijn'] + "x wijn ("+ price['wijn'].toFixed(2).replace('.', ',') +")";
  } else if (cost['wijn'] == 0) {
    document.getElementById("bedrag3").innerHTML =
    "";
  }

  if (cost['wijn'] != null && cost['wijn'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP3").innerHTML =
  "€" + cost['wijn'].toFixed(2).replace('.', ',');
  } else if (cost['wijn'] == 0) {
    document.getElementById("kostenP3").innerHTML =
    "";
  }

  cost['bitterballen8'] = price['bitterballen8'] * aantal['bitterballen8'];  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (cost['bitterballen8'] != null  && cost['bitterballen8'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag4").innerHTML =
    aantal['bitterballen8'] + "x bitterballen schaal 8 stuks ("+ price['bitterballen8'].toFixed(2).replace('.', ',') +")";
  } else if (cost['bitterballen8'] == 0) {
    document.getElementById("bedrag4").innerHTML =
    "";
  }

  if (cost['bitterballen8'] != null && cost['bitterballen8'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP4").innerHTML =
  "€" + cost['bitterballen8'].toFixed(2).replace('.', ',');
  } else if (cost['bitterballen8'] == 0) {
    document.getElementById("kostenP4").innerHTML =
    "";
  }

  cost['bitterballen16'] = price['bitterballen16'] * aantal['bitterballen16'];  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (cost['bitterballen16'] != null  && cost['bitterballen16'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag5").innerHTML =
    aantal['bitterballen16'] + "x bitterballen schaal 16 stuks ("+ price['bitterballen16'].toFixed(2).replace('.', ',') +")";
  } else if (cost['bitterballen16'] == 0) {
    document.getElementById("bedrag5").innerHTML =
    "";
  }

  if (cost['bitterballen16'] != null && cost['bitterballen16'] != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP5").innerHTML =
  "€" + cost['bitterballen16'].toFixed(2).replace('.', ',');
  } else if (cost['bitterballen16'] == 0) {
    document.getElementById("kostenP5").innerHTML =
    "";
  }

  var totaal_cost = cost['fris'] + cost['bier'] + cost['wijn'] + cost['bitterballen8'] + cost['bitterballen16'];

  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("het_totaal").innerHTML =
    het_totaal;
  }
  
  //de te betalen totaal prijs van de producten weergeven op de site
  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag6").innerHTML =
    "<b> Totaal </b>";
  }

  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP6").innerHTML =
  "€" + totaal_cost.toFixed(2).replace('.', ',');
  } else if (totaal_cost != null) {
    document.getElementById("kostenP6").innerHTML =
    "";
  }
}

function bestelling(){ //neemt de bestelling op
  rekening_check = false;
  while (rekening_check == false) { //doorgaan met vragen na invoeren bestelling
    breakCheck1 = false;
    var bestelling = prompt("Welke bestelling wilt u toevoegen?").toLowerCase(); //een popup met de vraag wat je wil hebben
    
    if (bestelling == "fris") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      tijdelijke_opslag1 = parseInt(prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      if (!(isNaN(tijdelijke_opslag1))) { //checken of de tijdelijke opslag een int bevat
        if (tijdelijke_opslag1 >= 0) {
          aantal['fris'] = aantal['fris'] + tijdelijke_opslag1;
        } else if ((aantal['fris'] >= Math.abs(tijdelijke_opslag1))){
          aantal['fris'] = aantal['fris'] + tijdelijke_opslag1;
        } else {
          alert("U geeft een negatief aantal op wat minder is dan het aantal fris dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
        }        
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }
      

    } else if (bestelling == "bier") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      tijdelijke_opslag1 = parseInt(prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      if (!(isNaN(tijdelijke_opslag1))) { //checken of de tijdelijke opslag een int bevat
        if (tijdelijke_opslag1 >= 0) {
          aantal['bier'] = aantal['bier'] + tijdelijke_opslag1;
        } else if ((aantal['bier'] >= Math.abs(tijdelijke_opslag1))){
          aantal['bier'] = aantal['bier'] + tijdelijke_opslag1;
        } else {
          alert("U geeft een negatief aantal op wat minder is dan het aantal bier dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
        } 
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }

    } else if (bestelling == "wijn") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      tijdelijke_opslag1 = parseInt(prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      if (!(isNaN(tijdelijke_opslag1))) { //checken of de tijdelijke opslag een int bevat
        if (tijdelijke_opslag1 >= 0) {
          aantal['wijn'] = aantal['wijn'] + tijdelijke_opslag1;
        } else if ((aantal['wijn'] >= Math.abs(tijdelijke_opslag1))){
          aantal['wijn'] = aantal['wijn'] + tijdelijke_opslag1;
        } else {
          alert("U geeft een negatief aantal op wat minder is dan het aantal wijn dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
        }        
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }

    } else if (bestelling == "snack" || bestelling == "bitterballen") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      tijdelijke_opslag1 = parseInt(prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?", "8")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      if (!(isNaN(tijdelijke_opslag1))) {
        if (tijdelijke_opslag1 == 8) {
          tijdelijke_opslag1 = parseInt(prompt("Hoeveel bitterbalschalen van 8 bitterballen wilt u bestellen?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

          if (!(isNaN(tijdelijke_opslag1))) {
            if (tijdelijke_opslag1 >= 0) {
              aantal['bitterballen8'] = aantal['bitterballen8'] + tijdelijke_opslag1;
            } else if ((aantal['bitterballen8'] >= Math.abs(tijdelijke_opslag1))){
              aantal['bitterballen8'] = aantal['bitterballen8'] + tijdelijke_opslag1;
            } else {
              alert("U geeft een negatief aantal op wat minder is dan het aantal bitterballen (schaal 8 stuks) dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
            }

          } else {
            alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
          }

                    
        } else if (tijdelijke_opslag1 == 16) {
          tijdelijke_opslag1 = parseInt(prompt("Hoeveel bitterbalschalen van 16 bitterballen wilt u bestellen?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

          if (!(isNaN(tijdelijke_opslag1))) {
            if (tijdelijke_opslag1 >= 0) {
              aantal['bitterballen16'] = aantal['bitterballen16'] + tijdelijke_opslag1;
            } else if ((aantal['bitterballen16'] >= Math.abs(tijdelijke_opslag1))){
              aantal['bitterballen16'] = aantal['bitterballen16'] + tijdelijke_opslag1;
            } else {
              alert("U geeft een negatief aantal op wat minder is dan het aantal bitterballen (schaal 16 stuks) dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
            }

          } else {
            alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
          }

        } else {
          alert("U kunt alleen een keuze maken tussen een schaal met 8 of 16 bitterballen. De snacks zijn niet toegevoegd aan de bestelling.");
        }

      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }
      

    }else if (bestelling == "stop") { //als stop word opgegeven bij de prompt bestilling word de rekening weergeven
      if (aantal['fris'] == 0 && aantal['bier'] == 0 && aantal['wijn'] == 0 && aantal['bitterballen8'] == 0 && aantal['bitterballen16'] == 0) { //checken of er iets is besteld
        var doorgaan_vraag = prompt("u heeft geen bestelling opgenomen. Wilt u toch de rekening zien? (Y/N)");

        if (doorgaan_vraag == "Y") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
          rekening_weergave();
          rekening_check = true;
        } else if (doorgaan_vraag == "N") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
          rekening_check = false;
          breakCheck1 = true;
          break;
        }
        break;
      } else { 
        rekening_weergave();
        rekening_check = true;  
      }
         

    }else { //bij een ongeldige invoer melding geven
      alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
    }
  }
  
}

// function bestelling2(){ //neemt de bestelling versie 2 op (verouderd). 
//   prijsweergave();
//   rekening_check = false;
//   while (rekening_check == false) { //doorgaan met vragen na invoeren bestelling
//     breakCheck1 = false;
//     var bestelling = prompt("Welke bestelling wilt u toevoegen?"); //een popup met de vraag wat je wil hebben
    
//     if (bestelling == "fris") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
//       string1 = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?"); //een popup met de vraag hoeveel je wil hebben van een bepaald product
      
//       tijdelijke_opslag1 = parseInt(string1); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

//       if (!(isNaN(tijdelijke_opslag1)) && tijdelijke_opslag1 >= 0) { //checken of de tijdelijke opslag een int bevat
//         aantal_fris = tijdelijke_opslag1;
//       } else {
//         alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
//       }
      

//     } else if (bestelling == "bier") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
//       string2 = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

//       tijdelijke_opslag2 = parseInt(string2); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

//       if (!(isNaN(tijdelijke_opslag2)) && tijdelijke_opslag2 >= 0) { //checken of de tijdelijke opslag een int bevat
//         aantal_bier = tijdelijke_opslag2;
//       } else {
//         alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
//       }

//     } else if (bestelling == "wijn") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
//       string3 = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

//       tijdelijke_opslag1 = parseInt(string3); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

//       if (!(isNaN(tijdelijke_opslag1)) && tijdelijke_opslag1 >= 0) { //checken of de tijdelijke opslag een int bevat
//         aantal_wijn = tijdelijke_opslag1;
//       } else {
//         alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
//       }

//     } else if (bestelling == "stop") { //als stop word opgegeven bij de prompt bestilling word de rekening weergeven
//       if (aantal_fris == 0 && aantal_bier == 0 && aantal_wijn == 0) { //checken of er iets is besteld
//         var doorgaan_vraag = prompt("u heeft geen bestelling opgenomen. Wilt u toch de rekening zien? (Y/N)");

//         if (doorgaan_vraag == "Y") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
//           rekening();
//           rekening_check = true;
//         } else if (doorgaan_vraag == "N") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
//           rekening_check = false;
//           breakCheck1 = true;
//           break;
//         }
//         break;
//       } else { 
//         rekening();
//         rekening_check = true;  
//       }
         

//     }else { //bij een ongeldige invoer melding geven
//       alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
//     }
//   }
  
// }











