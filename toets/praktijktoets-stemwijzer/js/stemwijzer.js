/*
    Alle variablen met dingen die niet in de functies zelf kunnen
    doordat ik functies herhaal

 */

var stellingen = [
    'Nederland moet terug naar de Gulden',
    'Er moet meer geld naar ontwikkelingshulp',
    'De overheid moet afslanken',
    'De AOW leeftijd moet terug naar 67 jaar',
    'Wietteelt moet worden gelegaliseerd',
    'We moeten minder geld aan het leger uitgeven',
    'Alle werkenden moeten minder loonbelasting betalen',
    'Nederland moet meer open zijn voor buitenlanders',
    'Er moet meer gedaan worden aan werkloosheid',
];

var totaleens = 0;
var finished = false;
var next = false;
var current = 0;
var partij = 'empty';


//maakt de essentials aan voor de pagina zodat alles kan werken

function essentials() {
    var stelling = document.createElement('H1');
    stelling.id = "stelling";
    stelling.classList.add('headtext');
    document.getElementById('stemwijzer').appendChild(stelling);

    var div = document.createElement('DIV');
    div.id = "buttons";
    document.getElementById('stemwijzer').appendChild(div);

    var finished = document.createElement('P');
    finished.id = "finished";
    finished.classList.add('standarttext');
    document.getElementById('stemwijzer').appendChild(finished);

    stemwijzer();
}

//het dingetje wat de stellingen verandert, buttons erin doet en checkt hoeveel stellingen er geweest zijn.

function stemwijzer() {
    if (!finished) {
        if (current < stellingen.length) {

            document.getElementById('buttons').innerHTML = '';
            next = false;
            document.getElementById('stelling').innerHTML = stellingen[current];

            var buttoneens = document.createElement('BUTTON');
            buttoneens.classList.add('center');
            buttoneens.id = "buttoneens";
            buttoneens.innerHTML = "EENS";
            buttoneens.onclick = eens;
            document.getElementById('buttons').appendChild(buttoneens);

            var buttononeens = document.createElement('BUTTON');
            buttononeens.classList.add('center');
            buttononeens.id = "buttononeens";
            buttononeens.innerHTML = "ONEENS";
            buttononeens.onclick = oneens;
            document.getElementById('buttons').appendChild(buttononeens);
        }
        else {
            createresult();
        }
    }
    current++;
}

//een aparte scoreadder omdat ik hem niet bovenin de stemwijzer function kon doen

function scoreadder() {
    if (document.getElementById('buttoneens').classList.contains('green')){
        totaleens++;
    }
    stemwijzer();
}


//spreekt voor zich, dit toggled de groene achtergrond voor de knopjes.

function eens() {

    createnext();

    if (next === true && document.getElementById('buttoneens').classList.contains('green')) {
        next = false;
        document.getElementById('buttons').removeChild(document.getElementById('buttonnext'));
    }

    document.getElementById("buttoneens").classList.toggle("green");

    if (document.getElementById('buttononeens').classList.contains('green')) {
        document.getElementById("buttononeens").classList.toggle("green");
    }
}

function oneens() {
    createnext();

    if (next === true && document.getElementById('buttononeens').classList.contains('green')) {
        next = false;
        document.getElementById('buttons').removeChild(document.getElementById('buttonnext'));
    }

    document.getElementById("buttononeens").classList.toggle("green");

    if (document.getElementById('buttoneens').classList.contains('green')) {
        document.getElementById("buttoneens").classList.toggle("green");
    }
}

//maakt de knop aan waarmee je op volgende kan klikken, deze boolean erin word elke keer gereset als er op de knop word geklikt

function createnext() {
    if (!next) {
        var buttonnext = document.createElement('BUTTON');
        buttonnext.classList.add('center');
        buttonnext.id = "buttonnext";
        buttonnext.innerHTML = "VOLGENDE";
        buttonnext.onclick = scoreadder;
        document.getElementById('buttons').appendChild(buttonnext);


        next = true;
    }
}

//maakt de resultaten knop aan en rekent uit welke partij het beste is.

function createresult() {
    document.getElementById('buttons').innerHTML = '';
    document.getElementById('stelling').innerHTML = '';

    var buttonresult = document.createElement('BUTTON');
    buttonresult.classList.add('center');
    buttonresult.id = "results";
    buttonresult.innerHTML = "RESULTATEN";
    buttonresult.onclick = results;
    document.getElementById('buttons').appendChild(buttonresult);


    if (totaleens >= 8) {
        partij = 'D66';
        console.log('Set partij to ' + partij + ', met ' + totaleens + ' keer eens');
    }
    if (totaleens >= 5 && totaleens <= 7){
        partij = 'PvdA';
        console.log('Set partij to ' + partij + ', met ' + totaleens + ' keer eens');
    }
    if (totaleens >= 2 && totaleens <= 4){
        partij = 'VVD';
        console.log('Set partij to ' + partij + ', met ' + totaleens + ' keer eens');
    }
    if (totaleens < 2){
        partij = 'CDA';
        console.log('Set partij to ' + partij + ', met ' + totaleens + ' keer eens');
    }

}

//zet in de html wat de beste partij was, haalt de knop weg en zet neer hoeveel keer er eens was gestemt.

function results() {
    document.getElementById('buttons').innerHTML = '';

    document.getElementById('finished').innerHTML = ' U heeft ' + totaleens + ' keer EENS gestemd. De partij die het beste bij uw voorkeur past is ' + partij;
}



essentials();