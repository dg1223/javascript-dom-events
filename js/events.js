// add onclick function
function makeRed () {
    document.body.style.backgroundColor = 'red';
}

function makeGreen () {
    document.body.style.backgroundColor = 'green';
}

function makeLightGreen () {
    document.body.style.backgroundColor = 'lightgreen';
}

function makeYellowGreen () {
    document.body.style.backgroundColor = 'yellowgreen';
}

function makePink () {
    document.body.style.backgroundColor = 'pink';
}

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
        
function makeBlue () {
    document.body.style.backgroundColor = 'blue';
}  