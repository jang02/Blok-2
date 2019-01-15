var currentlevel = 0;

var buttonleft;
var buttonright;
var backbutton;
var buttons;

(buttonleft = document.getElementById('links'));
(buttonright = document.getElementById('rechts'));
(buttonback = document.getElementById('terug'));
(buttons = document.getElementById('buttons'));


document.body.onresize = onResize;

function onResize() {
    let oldScreenPosition = {x: screenPosition.x, y: screenPosition.y};

    screenPosition = getPos(document.getElementById("game"));

    for (let i = 0; i < document.getElementsByClassName("ui").length; i++) {
        let element = document.getElementsByClassName("ui")[i];

        let currentLeft = parseInt(element.style.left.replace("px", ""));
        element.style.left = (currentLeft - oldScreenPosition.x + screenPosition.x) + "px";
    }
}

function getPos(el) {
    // yay readability
    let x = el.getBoundingClientRect().left;
    return {x: Math.abs(x), y: 8};
}
var screenPosition = getPos(document.getElementById("game"));

function createSecretDoor() {
	var img = document.createElement('IMG');
	img.src = 'pictures/door.png';
	img.style.width = "90px";
	img.style.height = "79px";
	document.getElementById("game").appendChild(img);
	img.style.position = "absolute";
	img.style.top = (screenPosition.y + 337) + "px";
	img.style.left = (screenPosition.x + 798) + "px";
	img.classList.add("ui");
	img.id = "SecretDoor";
	console.log('made door');	
}

function reload() {
    window.location.reload(false);
}

function skip_intro() {
	document.getElementById("startbutton").style.display = "flex";
}

function buttonloader(left,right,back) {
	buttonleft.style.display = "none";
	buttonright.style.display = "none";
	buttonback.style.display = "none";

	if (left == "flex") {
		buttonleft.style.display = "flex";
	}
	if (right == "flex") {
		buttonright.style.display = "flex";
	}
	if (back == "flex") {
		buttonback.style.display = "flex";
	}
}

function createcredits() {
	var credits = document.createElement('BUTTON');
	credits.id = "startbutton";
	document.getElementById("buttons").appendChild(credits);

	document.getElementById('startbutton').innerHTML = 'Credits';
	document.getElementById('startbutton').onclick = empty;
}