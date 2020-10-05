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

//het te betalen bedrag.
var fris_cost = 0;
var bier_cost = 0;
var wijn_cost = 0;


//het standaard aantal producten dat je koopt.
var aantal_fris = 0;
var aantal_bier = 0;
var aantal_wijn = 0;

//tekst bij de rekening kopjes
var het_aantal = "------------&lt; <b> de aantallen gekochte producten </b> &gt;------------------";
var de_rekening = "--------------&lt; <b> het te betalen bedrag </b> &gt;------------------";
var het_totaal = "---------------";
var de_ppp = "---------&lt; <b> prijs per product </b> &gt;---------";

//functies vooraf aanspreken
prijsweergave2();

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

  var totaal_cost = fris_cost + bier_cost + wijn_cost;

  //de te betalen totaal prijs van de producten weergeven op de site
  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag5").innerHTML =
    "Totaal €" + totaal_cost.toFixed(2).replace('.', ',');
  }
}

function bestelling(){ //neemt de bestelling op
  prijsweergave();
  rekening_check = false;
  while (rekening_check == false) {
    breakCheck1 = false;
    var bestelling = prompt("Welke bestelling wilt u toevoegen?"); //een popup met de vraag wat je wil hebben
    
    if (bestelling == "fris") {
      aantal_fris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

    } else if (bestelling == "bier") {
      aantal_bier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

    } else if (bestelling == "wijn") {
      aantal_wijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?"); //een popup met de vraag hoeveel je wil hebben van een bepaald product

    } else if (bestelling == "stop") { //als stop word opgegeven bij de prompt bestilling word de rekening weergeven
      if (aantal_fris == 0 && aantal_bier == 0 && aantal_wijn == 0) {
        var doorgaan_vraag = prompt("u heeft geen bestelling opgenomen. Wilt u toch de rekening zien? (Y/N)");

        if (doorgaan_vraag == "Y") {
          rekening();
          rekening_check = true;
        } else if (doorgaan_vraag == "N") {
          rekening_check = false;
          breakCheck1 = true;
          break;
        }
        break;
      } else {
        rekening();
        rekening_check = true;  
      }
         

    }else {
      alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd"); //melding bij ongeldige invoer
    }
  }
  
}












