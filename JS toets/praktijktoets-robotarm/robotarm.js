// Robotarm bibliotheek inladen
var canvas = document.getElementById("canvas");
var robotArm = new RobotArm(canvas);

// Het level inladen
robotArm.examLevel(1);
robotArm.speed = 600;
// Jouw instructies volgen hier

for (var i = 0; i < 4; i++) {
    robotArm.moveRight();
}
robotArm.grab();

while (robotArm.scan() !== null) {
    if (robotArm.scan() !== 'white'){
        moveblock('colored');
    }
    else if (robotArm.scan() === 'white') {
        moveblock('white')
    }
}

function moveblock(color) {
    console.log('called move block');
    if (color === 'colored') {
        for (var i = 0; i < 5; i++) {
            robotArm.moveRight();
        }
        robotArm.drop();
        for (var i = 0; i < 5; i++) {
            robotArm.moveLeft();
        }
        robotArm.grab();
    }
    else if (color === 'white') {
        for (var i = 0; i < 4; i++) {
            robotArm.moveLeft();
        }
        robotArm.drop();
        for (var i = 0; i < 4; i++) {
            robotArm.moveRight();
        }
        robotArm.grab();
    }
}


// De door jou opgegeven instructies uitvoeren
robotArm.run();