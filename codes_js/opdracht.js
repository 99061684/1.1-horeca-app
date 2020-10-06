/*
naam leerling: Bas Verdoorn
klas: 4TOT
opleiding: Software Developer
opdracht: Horeca App

*/

//iets checken
var rekening_check = false;
var breakCheck1 = false;

//de prijzen per product.
const fris_price = 1.00;
const bier_price = 1.75;
const wijn_price = 2.00;
const bitterballen_price1 = 2.00; //schaal van 8 stuks
const bitterballen_price2 = 3.00; //schaal van 16 stuks

//het te betalen bedrag.
var fris_cost = 0;
var bier_cost = 0;
var wijn_cost = 0;
var bitterballen_cost1 = 0; //schaal van 8 stuks
var bitterballen_cost2 = 0; //schaal van 16 stuks

//het standaard aantal producten dat je koopt.
var aantal_fris = 0;
var aantal_bier = 0;
var aantal_wijn = 0;
var aantal_bitterballen1 = 0; //schaal van 8 stuks
var aantal_bitterballen2 = 0; //schaal van 16 stuks

//tijdelijke string opslag
var string1 = "";
var string2 = "";
var string3 = "";
var string4 = "";
var string5 = "";
var string6 = "";
//tijdelijke var opslag 
var tijdelijke_opslag1 = 0;
var tijdelijke_opslag2 = 0;
var tijdelijke_opslag3 = 0;
var tijdelijke_opslag4 = 0;
var tijdelijke_opslag5 = 0;
var tijdelijke_opslag6 = 0;

//tekst bij de rekening kopjes
var het_aantal = "------------&lt; <b> de aantallen gekochte producten </b> &gt;------------------";
var de_rekening = "--------------&lt; <b> het te betalen bedrag </b> &gt;------------------";
var het_totaal = "---------------";
var de_ppp = "---------&lt; <b> prijs per product </b> &gt;---------";

//functies vooraf aanspreken
prijsweergave2();

// ----- uitleg woorden, functies, etc. ------
//bestelling = neemt de bestelling op en veranderd het eerder opgegeven aantal fris en telt het nieuwe opgegeven aantal fris erbij op
//bestelling2 (verouderd)= neemt de bestelling op en veranderd het eerder opgegeven aantal fris in het nieuwe opgegeven aantal
//verouderd = oudere versie bijv. geen mogelijkheid tot bestellen bitterballen

function prijsweergave(){ //de standaard prijs van het product weergeven op de site

  if (fris_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("kostenP1").innerHTML =
    "Fris €" + fris_price.toFixed(2).replace('.', ',');
  }

  //de standaard prijs van het product weergeven op de site
  if (bier_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("kostenP2").innerHTML =
    "Bier €" + bier_price.toFixed(2).replace('.', ',');
  }

  //de standaard prijs van het product weergeven op de site
  if (wijn_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("kostenP3").innerHTML =
    "Wijn €" + wijn_price.toFixed(2).replace('.', ',');
  }

  if (bitterballen_price1 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("kostenP4").innerHTML =
    "Bitterballen schaal 6 stuks €" + bitterballen_price1.toFixed(2).replace('.', ',');
  }

  if (bitterballen_price2 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("kostenP5").innerHTML =
    "Bitterballen schaal 18 stuks €" + bitterballen_price2.toFixed(2).replace('.', ',');
  }
}

function prijsweergave2(){ //de standaard prijs van het product weergeven op de menu pagina

  if (fris_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_fris").innerHTML =
    "Fris €" + fris_price.toFixed(2).replace('.', ',');
  }

  //de standaard prijs van het product weergeven op de site
  if (bier_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_bier").innerHTML =
    "Bier €" + bier_price.toFixed(2).replace('.', ',');
  }

  //de standaard prijs van het product weergeven op de site
  if (wijn_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_wijn").innerHTML =
    "Wijn €" + wijn_price.toFixed(2).replace('.', ',');
  }

  if (bitterballen_price1 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_bitterballen1").innerHTML =
    "Bitterballen schaal 6 stuks €" + bitterballen_price1.toFixed(2).replace('.', ',');
  }

  if (bitterballen_price2 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_bitterballen2").innerHTML =
    "Bitterballen schaal 18 stuks €" + bitterballen_price2.toFixed(2).replace('.', ',');
  }
}

function rekening(){ //geeft de rekening weer op de website
  if (het_aantal != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("het_aantal").innerHTML =
  het_aantal;
  }

  if (de_rekening != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("de_rekening").innerHTML =
  de_rekening;
  }

  if (het_totaal != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("het_totaal").innerHTML =
  het_totaal;
  }

  if (de_ppp != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("de_ppp").innerHTML =
  de_ppp;
  }
  
  if (aantal_fris != null && aantal_fris != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal_fris").innerHTML =
  "Het aantal Fris: " + aantal_fris;
  }

  if (aantal_bier != null && aantal_bier != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal_bier").innerHTML =
  "Het aantal Bier: " + aantal_bier;
  }

  if (aantal_wijn != null && aantal_wijn != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal_wijn").innerHTML =
  "Het aantal Wijn: " + aantal_wijn;
  }

  if (aantal_bitterballen1 != null && aantal_bitterballen1 != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal_bitterballen1").innerHTML =
  "Het aantal bitterballen schalen 8 stuks: " + aantal_bitterballen1;
  }

  if (aantal_bitterballen2 != null && aantal_bitterballen2 != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("aantal_bitterballen2").innerHTML =
  "Het aantal bitterballen schalen 16 stuks: " + aantal_bitterballen2;
  }

  fris_cost = fris_price * aantal_fris;  //de berekening voor het te betalen bedrag van een product

  if (fris_cost != null && fris_cost != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("bedrag1").innerHTML =
  "Fris €" + fris_cost.toFixed(2).replace('.', ',');
  }

  bier_cost = bier_price * aantal_bier;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (bier_cost != null && bier_cost != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag2").innerHTML =
    "Bier €" + bier_cost.toFixed(2).replace('.', ',');
  }

  wijn_cost = wijn_price * aantal_wijn;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (wijn_cost != null  && wijn_cost != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag3").innerHTML =
    "Wijn €" + wijn_cost.toFixed(2).replace('.', ',');
  }

  bitterballen_cost1 = bitterballen_price1 * aantal_bitterballen1;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (bitterballen_cost1 != null  && bitterballen_cost1 != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag4").innerHTML =
    "Bitterballen schaal 8 stuks €" + bitterballen_cost1.toFixed(2).replace('.', ',');
  }

  bitterballen_cost2 = bitterballen_price2 * aantal_bitterballen2;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (bitterballen_cost2 != null  && bitterballen_cost2 != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag5").innerHTML =
    "Bitterballen schaal 16 stuks €" + bitterballen_cost2.toFixed(2).replace('.', ',');
  }

  var totaal_cost = fris_cost + bier_cost + wijn_cost + bitterballen_cost1 + bitterballen_cost2;

  //de te betalen totaal prijs van de producten weergeven op de site
  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag6").innerHTML =
    "Totaal €" + totaal_cost.toFixed(2).replace('.', ',');
  }
}

function bestelling(){ //neemt de bestelling op
  prijsweergave();
  rekening_check = false;
  while (rekening_check == false) { //doorgaan met vragen na invoeren bestelling
    breakCheck1 = false;
    var bestelling = prompt("Welke bestelling wilt u toevoegen?"); //een popup met de vraag wat je wil hebben
    
    if (bestelling == "fris") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      string1 = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?", "0"); //een popup met de vraag hoeveel je wil hebben van een bepaald product
      
      tijdelijke_opslag1 = parseInt(string1); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

      if (!(isNaN(tijdelijke_opslag1))) { //checken of de tijdelijke opslag een int bevat
        if (tijdelijke_opslag1 >= 0 || (aantal_fris - tijdelijke_opslag1) >= 0) {
          aantal_fris = aantal_fris + tijdelijke_opslag1;
        } else {
          alert("U geeft een negatief aantal op wat minder is dan het aantal fris dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
        }       
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }
      

    } else if (bestelling == "bier") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      string2 = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?", "0"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      tijdelijke_opslag2 = parseInt(string2); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

      if (!(isNaN(tijdelijke_opslag2))) { //checken of de tijdelijke opslag een int bevat
        if (tijdelijke_opslag2 >= 0 || (aantal_bier - tijdelijke_opslag2) >= 0) {
          aantal_bier = aantal_bier + tijdelijke_opslag2;
        } else {
          alert("U geeft een negatief aantal op wat minder is dan het aantal bier dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
        } 
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }

    } else if (bestelling == "wijn") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      string3 = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?", "0"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      tijdelijke_opslag3 = parseInt(string3); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

      if (!(isNaN(tijdelijke_opslag3))) { //checken of de tijdelijke opslag een int bevat
        if (tijdelijke_opslag3 >= 0 || (aantal_wijn - tijdelijke_opslag3) >= 0) {
          aantal_wijn = aantal_wijn + tijdelijke_opslag3;
        } else {
          alert("U geeft een negatief aantal op wat minder is dan het aantal bier dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
        }        
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }

    } else if (bestelling == "snack" || bestelling == "bitterballen") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      string4 = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?", "8"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      tijdelijke_opslag4 = parseInt(string4); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

      if (!(isNaN(tijdelijke_opslag4))) {
        if (tijdelijke_opslag4 == 8) {
          string5 = prompt("Hoeveel bitterbalschalen van 8 bitterballen wilt u bestellen?", "0"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

          tijdelijke_opslag5 = parseInt(string5);
          if (!(isNaN(tijdelijke_opslag5))) {
            if (tijdelijke_opslag5 >= 0 || (aantal_bitterballen1 - tijdelijke_opslag5) >= 0) {
              aantal_bitterballen1 = aantal_bitterballen1 + tijdelijke_opslag5;
            } else {
              alert("U geeft een negatief aantal op wat minder is dan het aantal bier dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
            }

          } else {
            alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
          }

                    
        } else if (tijdelijke_opslag4 == 16) {
          string6 = prompt("Hoeveel bitterbalschalen van 16 bitterballen wilt u bestellen?", "0"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

          tijdelijke_opslag6 = parseInt(string6);
          if (!(isNaN(tijdelijke_opslag6))) {
            if (tijdelijke_opslag6 >= 0 || (aantal_bitterballen2 - tijdelijke_opslag6) >= 0) {
              aantal_bitterballen2 = aantal_bitterballen2 + tijdelijke_opslag6;
            } else {
              alert("U geeft een negatief aantal op wat minder is dan het aantal bier dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
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
      if (aantal_fris == 0 && aantal_bier == 0 && aantal_wijn == 0 && aantal_bitterballen1 && aantal_bitterballen2) { //checken of er iets is besteld
        var doorgaan_vraag = prompt("u heeft geen bestelling opgenomen. Wilt u toch de rekening zien? (Y/N)");

        if (doorgaan_vraag == "Y") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
          rekening();
          rekening_check = true;
        } else if (doorgaan_vraag == "N") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
          rekening_check = false;
          breakCheck1 = true;
          break;
        }
        break;
      } else { 
        rekening();
        rekening_check = true;  
      }
         

    }else { //bij een ongeldige invoer melding geven
      alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
    }
  }
  
}

function bestelling2(){ //neemt de bestelling versie 2 (verouderd). 
  prijsweergave();
  rekening_check = false;
  while (rekening_check == false) { //doorgaan met vragen na invoeren bestelling
    breakCheck1 = false;
    var bestelling = prompt("Welke bestelling wilt u toevoegen?"); //een popup met de vraag wat je wil hebben
    
    if (bestelling == "fris") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      string1 = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?"); //een popup met de vraag hoeveel je wil hebben van een bepaald product
      
      tijdelijke_opslag1 = parseInt(string1); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

      if (!(isNaN(tijdelijke_opslag1)) && tijdelijke_opslag1 >= 0) { //checken of de tijdelijke opslag een int bevat
        aantal_fris = tijdelijke_opslag1;
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }
      

    } else if (bestelling == "bier") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      string2 = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      tijdelijke_opslag2 = parseInt(string2); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

      if (!(isNaN(tijdelijke_opslag2)) && tijdelijke_opslag2 >= 0) { //checken of de tijdelijke opslag een int bevat
        aantal_bier = tijdelijke_opslag2;
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }

    } else if (bestelling == "wijn") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      string3 = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      tijdelijke_opslag3 = parseInt(string3); //string prompt omzetten naar int en opslaan in een tijdelijke opslag

      if (!(isNaN(tijdelijke_opslag3)) && tijdelijke_opslag3 >= 0) { //checken of de tijdelijke opslag een int bevat
        aantal_wijn = tijdelijke_opslag3;
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }

    } else if (bestelling == "stop") { //als stop word opgegeven bij de prompt bestilling word de rekening weergeven
      if (aantal_fris == 0 && aantal_bier == 0 && aantal_wijn == 0) { //checken of er iets is besteld
        var doorgaan_vraag = prompt("u heeft geen bestelling opgenomen. Wilt u toch de rekening zien? (Y/N)");

        if (doorgaan_vraag == "Y") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
          rekening();
          rekening_check = true;
        } else if (doorgaan_vraag == "N") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
          rekening_check = false;
          breakCheck1 = true;
          break;
        }
        break;
      } else { 
        rekening();
        rekening_check = true;  
      }
         

    }else { //bij een ongeldige invoer melding geven
      alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
    }
  }
  
}












