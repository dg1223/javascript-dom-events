// add onclick function

// option 1
function makeRed () {
    document.body.style.backgroundColor = 'red';
}

function makeLightGreen () {
    document.body.style.backgroundColor = 'lightgreen';
}

function makeYellowGreen () {
    document.body.style.backgroundColor = 'yellowgreen';
}

// option 2
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;    
function makeBlue () {
    document.body.style.backgroundColor = 'blue';
}

// option 3
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';            
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 5
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';            
});

// option 6
document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
    
})