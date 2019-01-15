function reset() {
	document.getElementById('game').innerHTML = "";
	console.log('reset screen.')
	document.getElementById('rank').innerHTML= currentrank.name;
}

function startscreen() {
	document.getElementById("game").style.backgroundImage = 'url(pictures/startscreen.jpg)';

	var start = document.createElement('BUTTON');
	start.id = "startbutton";
	document.getElementById("buttons").appendChild(start);
	console.log('made startbutton');

	document.getElementById('startbutton').innerHTML = 'Start';
	document.getElementById('startbutton').onclick = farm;
}

function farm() {
	reset();
	document.getElementById("game").style.backgroundImage = 'url(pictures/farm.jpg)';
	document.getElementById("startbutton").style.display = 'none';
	buttonloader("flex","flex","none");
	
	if (!inventory["scythe"]) {	
		create_scythe();
		document.getElementById('scythe').onclick = click_scythe;
	}

	if (dialogues["dialogue1"] == true) {
		dialogue2();
	}
	else {
		dialogue1();
	}

	createSecretDoor();
	document.getElementById("SecretDoor").onclick = SecretInside;

	buttonleft.onclick = castleforest;
	buttonright.onclick = levelwar;
}

function levelwar() {
	if (currentrank.id <= 1) {
		alert("You have to be atleast a Knight to go this way!");
		farm();
		console.log('sent back to the farm')
	}
	else{
		reset();
		document.getElementById("game").style.backgroundImage = 'url(pictures/desert.png)'
		if (dialogues["towar"] == false){ 
			dialogue10();
		}
		else{
			dialogue14();
		}
		
		buttonback.onclick = farm;
		buttonright.onclick = war;
		buttonloader("none","flex","flex");
	}

}

function war() {
	reset();
	document.getElementById("game").style.backgroundImage = 'url(pictures/war.jpg)'
	buttonback.onclick = levelwar;
	buttonloader("none","none","flex");

	emptydialogue();

	var defensive = document.createElement('BUTTON');
	defensive.id = "defend";
	document.getElementById("buttons").appendChild(defensive);
	console.log('made startbutton');

	document.getElementById('defend').innerHTML = 'Fight Defensive';
	document.getElementById('defend').onclick = dialogue11;

	var aggro = document.createElement('BUTTON');
	aggro.id = "aggro";
	document.getElementById("buttons").appendChild(aggro);
	console.log('made startbutton');

	document.getElementById('aggro').innerHTML = 'Charge in';
	document.getElementById('aggro').onclick = dialogue12;

	document.getElementById('aggro').style.display = "flex";
	document.getElementById('defend').style.display = "flex";
}

function SecretInside() {
	reset();
	document.getElementById("game").style.backgroundImage = 'url(pictures/secretinside.jpg)';

	if (!enemies["nick"]) {
		createNick();
		document.getElementById("Nick").onclick = farm;
	}
	
	secretdialogue();

	buttonback.onclick = farm;
	buttonloader("none","none","flex");
}

function castleforest() {
	reset();
	document.getElementById('game').style.backgroundImage = 'url(pictures/castle.jpg)';
	buttonback.onclick = farm;
	buttonleft.onclick = castleinside;
	buttonright.onclick = forest;
	buttonloader("flex","flex","flex");

	if (dialogues["dialogue3"] == true) {
		dialogue4();
	}
	else {
		dialogue3();
	}

}

function castleinside() {
	if (currentrank.id == 0) {
		alert("You have to be atleast a Merchant to enter the castle!");
		castleforest();
		console.log('sent back to castle forest')
	}
	else {
		reset();
		document.getElementById('game').style.backgroundImage = 'url(pictures/inside_castle.jpg)';
		buttonback.onclick = castleforest;
		buttonleft.onclick = castleplaza;

		buttonloader("flex","none","flex")

		if (dialogues["dialogue3"] == true) {
			dialogue5();
		}
		else {
			dialogue6();
		}
	}
}

function castleplaza() {
	reset();

	document.getElementById('game').style.backgroundImage = 'url(pictures/castleplaza.jpg)';
	buttonback.onclick = castleinside;
	buttonleft.onclick = throneroom;

	buttonloader("flex","none","flex");

	if (dialogues['kingdialogue'] == false) {
		var king = document.createElement('BUTTON');
		king.id = "kingdialogue";
		document.getElementById("buttons").appendChild(king);
		document.getElementById('kingdialogue').innerHTML = 'Put bear head for sale.';
		document.getElementById('kingdialogue').onclick = kingdialogue;
		document.getElementById('kingdialogue').style.display = "flex";
	}
	
	if(dialogues["market"] == false){
		dialogue9();
	}
	else{
		dialoguemarket();
	}

}

function forest() {
	reset();
	document.getElementById('game').style.backgroundImage = 'url(pictures/forest.jpg)';
	buttonback.onclick = castleforest;
	buttonloader("none","none","flex");
	
	if (!enemies["bear"]){
		create_bear();
		document.getElementById("bear").onclick = attack_enemy1;
	}

	if (!enemies["bear"]){
		dialogue7();	
	}
	else {
		dialogue8();

	}
}

function death() {
	reset();
	document.getElementById("game").style.backgroundColor = "black";
	document.getElementById("game").style.backgroundImage = "none";

	var deathmessage = document.createElement('H1');
	deathmessage.id = "death";
	deathmessage.style.fontSize = "100px";
	document.getElementById("game").appendChild(deathmessage)
	document.getElementById("death").innerHTML = "You died";

	buttonback.onclick = reload;
	buttonback.innerHTML = "Restart";
}

function throneroom() {
	if (currentrank.id <= 2){
		alert('You have to be the King in order to go here.');
		castleplaza();
	}
	else{
		reset();
		document.getElementById('game').style.backgroundImage = 'url(pictures/throneroom.jpg)';	
		dialogue13();
		createcrown();
		createcredits();
	}
}

startscreen();
