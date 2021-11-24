"use strict"


/**************************
*******Variables***********
**************************/
var dico = ["transistoriser", "traînaillasses", "carillonnèrent", "rapprovisionné", "démythifierais", "effervescentes", "intelligentsia", "sponsoriseriez", "débagoulassent", "saponifierions", "sadomasochiste", "biréfringences", "égosillassions", "originellement", "recompositions", "enneigeassions", "désensorcelant", "idéologisasses", "déshydratantes", "rentrouvrirons", "intradermiques", "désintégrerais", "parcellarisiez", "enregistrerait", "décapitalisent", "déchaumeraient", "populariseront", "municipalisiez", "objectivations", "chatouillasses", "tarabiscotâmes", "mollardassions", "verdunisassent", "dénombreraient", "remastiquerais", "médicaliseriez", "décréditassiez", "ponctionnèrent", "clarifieraient", "démagnétiseras", "rhombencéphale", "vulcanisations", "désemprisonnât", "mystifieraient", "contrebouteras", "pleurnichaient", "sectionnements", "reprogrammerez", "contrebuteriez", "alanguissement", "perméabilisera", "retraitassions", "parcimonieuses", "urobilinogènes", "enchaussassiez", "toilettassions", "entreprendrait", "échenillerions", "optimalisaient", "nicotiniserait", "décartonneriez", "normaliserions", "pleurnicheront", "texturisassent", "déconstiperais", "maximalisèrent", "disciplineriez", "zoroastriennes", "obscurciraient", "villégiaturent", "hétérocyclique", "folichonnerait", "désemprisonnai", "décapuchonniez", "tirebouchonnes", "inconnaissance", "électroniciens", "distançassions", "répercutassiez", "stabilisassiez", "intermittentes", "sensibilisants", "introniserions"];
var word;
var wordIndex;
var wordSplit;
var wordSplitHidden;
var etape = 0;
const wordDisplay = document.getElementById("wordDisplay");

/**************************
*******Functions***********
**************************/
window.addEventListener( "load", function( windowLoadE ) {
    var p, letter, button, holder;
    holder = document.getElementById( "buttonsHolder" );
    for ( var i = 65; i <= 90; i++ ) {
        if ( i == 65 || i == 75 || i == 84 ) {
            p = document.createElement( "p" );
        }
        letter = String.fromCharCode( i );
        button = document.createElement( "button" );
        button.innerHTML = " " + letter;
        button.setAttribute( "data-letter", letter );
        button.setAttribute('type', "button");
        button.classList.add("btn", "btn-primary", "m-1");
        button.onclick = function( e ) { setLetter( this.getAttribute( "data-letter" ) ); };
        p.appendChild( button );
        if ( i == 74 || i == 83 || i == 90 ) {
            holder.appendChild( p );
        }
    }
} );
function setLetter( letter ) {
    var div = document.getElementById( "name" );
    let present = 0;
    div.innerHTML = div.innerHTML + letter;
    for(let i = 0; i < wordSplit.length; i++){
        if(letter == wordSplit[i]){
            wordSplitHidden[i] = wordSplit[i];
            present++;
        }
    }
    if(present == 0 && etape < 9){
        pendu();
    }
    else if(etape == 9){
        finPartie();
        perdu();
    }
    else if(word == wordSplitHidden.join("")){
        finPartie();
        victoire();
    }
    wordDisplay.innerHTML = wordSplitHidden.join(" ");
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
function wordSelection(){
    wordIndex = getRandomInt(0, dico.length - 1);
    word = dico[wordIndex];
    word = word.normalize("NFD").replace(/\p{Diacritic}/gu, "").toUpperCase();
}

function hideWord(){
    wordSplit =  word.split("");
    wordSplitHidden = word.split("");
    for(let i = 0; i < word.length; i++){
        wordSplitHidden[i] = "_";
        wordDisplay.innerHTML = wordSplitHidden.join(" ");
    }
}
function pendu(){
    etape++;
    document.getElementById('imgPendu').setAttribute("src", "img/etape" + etape + ".jpg");
}
function finPartie(){
    let lettres = document.getElementById("lettres");
    let hide = document.getElementById("buttonsHolder");
    let motFin = document.querySelector(".motFin");
    hide.classList.add('hidden');
    lettres.classList.add('hidden');
    motFin.innerHTML = word;
}
function perdu(){
    let textPerdu = document.getElementById("perdu");
    textPerdu.classList.remove('hidden');

}
function victoire(){
    let gagne = document.getElementById("gagne");
    gagne.classList.remove("hidden");
}


/**************************
*******Executions***********
**************************/

wordSelection();
hideWord();