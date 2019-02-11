var stopped = false;
var exploded = false;

function start() {
    document.getElementById("timer").innerHTML = "00:05";
    document.getElementById("wire_good").onclick = stopTimer;
    document.getElementById("wire_bad").onclick = explode;

    let i = 4, timer = setInterval(function(){
        if (!stopped && !exploded) {
            document.getElementById("timer").innerHTML = "00:0" + i--;
        }
        if (i < 0) {
            explode();
            clearInterval(timer);
        }
    }, 1000);
}

function stopTimer() {
    stopped = true;
    document.getElementById("wire_good").style.backgroundColor = "white";
    document.getElementById("timer").className = "blinking";
}

function explode() {
    exploded = true;
    document.getElementById("timer").innerHTML = "";
    document.getElementById("container").style.backgroundImage = "url('explosion.png')";
    document.getElementById("container").style.height = "600px";
}

start();