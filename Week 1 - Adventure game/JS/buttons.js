function buttonright() {
	reset();
	levelLoader('right', currentlevel)
}

function buttonleft() {
	reset();
	levelLoader('left', currentlevel)
}

function startbutton() {
	reset();
	console.log(currentlevel);
	startscreen();
	
}

function buttonback() {
	reset();
	levelLoader('back', currentlevel);
}
