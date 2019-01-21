//hier zijn dingen die ik nodig heb om de game te maken
var body = document.body;
CreateBoard("ColorPicker");
CreateBoard("GameContainer");
body.style.backgroundImage = "linear-gradient(white, #eafcf7, #def7f0, #d9f9f0, #c4fff0)";
ColorPicker.style.backgroundImage = "linear-gradient(white, #eafcf7, #def7f0, #d9f9f0, #c4fff0)";
body.style.height = "98vh";
var pogingen = 12 //prompt("hoeveel pogingen wilt u hebben?");
var kleurtjes = 4 //prompt("hoeveel kleurtjes wilt u hebben?");

//dit is een functie diie ik nodig heb
function CreateBoard (text){
    var element = document.createElement("DIV");
    body.appendChild(element);
    element.id = text;
}



//vanaf hier begint de game


var color = [];

//dit maakt de 6 rondjes aan om de kleur te kiezen
for(var i=1; i<=6; i++) {
	var element = document.createElement("DIV");
    ColorPicker.appendChild(element);
    element.id = "ColorDot" + i;
}

//dit maakt de overige circles aan waar de speler in kan raden.
for(var i=1; i<=pogingen; i++){
    var div = document.createElement('DIV');
    div.id = "chance" + i;
    document.getElementById('GameContainer').appendChild(div);
	for(var a=1; a<=kleurtjes; a++){
        var element = document.createElement("DIV");
        document.getElementById('chance' + i).appendChild(element);
        element.classList.add('whitecirle');
	}
}
