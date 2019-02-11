var container = document.getElementById("container");
var dice = document.getElementById("dice");
var timer = false;
var score = 0;

var diceFaces = [
    [1, 'dice_face_1.png', "You rolled a 1"],
    [2, 'dice_face_2.png', "You rolled a 2"],
    [3, 'dice_face_3.png', "You rolled a 3"],
    [4, 'dice_face_4.png', "You rolled a 4"],
    [5, 'dice_face_5.png', "You rolled a 5"],
    [6, 'dice_face_6.png', "You rolled a 6"]
];

var currentFace = 0;
dice.style.backgroundImage = "url('"+diceFaces[0][1]+"')";
dice.onclick = diceClick;

function startDiceRoll () {
    timer = setInterval(function () {
        if (currentFace === 5) {
            currentFace = 0;
            dice.style.backgroundImage = "url('"+diceFaces[0][1]+"')";
        } else if (currentFace === 0) {
            currentFace = 1;
            dice.style.backgroundImage = "url('"+diceFaces[1][1]+"')";
        } else if (currentFace === 1) {
            currentFace = 2;
            dice.style.backgroundImage = "url('"+diceFaces[2][1]+"')";
        } else if (currentFace === 2) {
            currentFace = 3;
            dice.style.backgroundImage = "url('"+diceFaces[3][1]+"')";
        } else if (currentFace === 3) {
            currentFace = 4;
            dice.style.backgroundImage = "url('"+diceFaces[4][1]+"')";
        } else if (currentFace === 4) {
            currentFace = 5;
            dice.style.backgroundImage = "url('"+diceFaces[5][1]+"')";
        }
    }, 50);
}

function diceClick () {
    if (timer !== false) {
        var p = document.createElement("p");
        p.innerHTML = diceFaces[currentFace][2];
        document.getElementById("log").prepend(p);

        score = score + diceFaces[currentFace][0];

        if(score >= 18) {
            alert('You win, score: '+score);
            clearInterval(timer);
            timer  = false;
        }else{
            clearInterval(timer);
            timer  = false;

            setTimeout(function () {
                startDiceRoll();
            },1500);
        }
    }
};

startDiceRoll();