function levelLoader(direction, currentlevel) {
	if (direction === 'right' && currentlevel === 0) {
		level1();
	}
	else if (direction === 'left' && currentlevel === 0){
		level2();
	}
	else if (direction === 'back'){
		if (currentlevel === 2 || 1){
			startscreen();
		}
	}
}

function reset() {
	document.getElementById('game').innerHTML = "";
	console.log('Reset screen.')
}

function startscreen() {
	document.getElementById('game').style.backgroundImage = 'url(pictures/startscreen.jpg)';
	document.getElementById("links").style.visibility = 'visible';
	document.getElementById("rechts").style.visibility = 'visible';
	document.getElementById("terug").style.visibility = 'visible';
	currentlevel = 0;
}

function level1() {
	document.getElementById('game').style.backgroundImage = 'url(pictures/farm.jpg)';
	currentlevel = 1;
}

function level2() {
	document.getElementById('game').style.backgroundImage = 'url(pictures/castle.jpg)';
	currentlevel = 2;
}