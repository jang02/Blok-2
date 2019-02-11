var buttons = [
    ['blue', '', '', 'Je hebt op button 1 geklikt'],
    ['red', 'hoger', '', 'Je hebt op button 2 geklikt'],
    ['green', 'groter', '', 'Je hebt op button 3 geklikt'],
    ['yellow', 'groter', '', 'Je hebt op button 4 geklikt'],
    ['cyan', '', 'black', 'Je hebt niet op button 1, 2, 3 en 4 geklikt'],
];

function makeButtons() {
    for (var i = 0; i < buttons.length; i++) {
        var button = document.createElement('button');
        button.style.backgroundColor = buttons[i];
        button.id = 'button' + (i + 1);
        button.innerText = "Button " + (i + 1);
        button.style.color = buttons[i][2];
        if (buttons[i][1] === '') {
            console.log('empty classlist')
        }
       else {
            button.classList.add(buttons[i][1]);
        }
        document.getElementById('container').appendChild(button);

    }
}
makeButtons();
document.getElementById('button1').setAttribute('onclick','alert(buttons[0][3])');
document.getElementById('button2').setAttribute('onclick','alert(buttons[1][3])');
document.getElementById('button3').setAttribute('onclick','alert(buttons[2][3])');
document.getElementById('button4').setAttribute('onclick','alert(buttons[3][3])');
document.getElementById('button5').setAttribute('onclick','alert(buttons[4][3])');