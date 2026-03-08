let homepoint = 0;
let guestpoint = 0;

const homeEL = document.getElementById("hscore");
const guestEL = document.getElementById("gscore");
const leadingTeam = document.getElementById("lead");

homeEL.textContent = homepoint;
guestEL.textContent = guestpoint;

function homeOne(){
    homepoint += 1;
    homeEL.textContent = homepoint; 
}
function homeTwo(){
    homepoint += 2;
    homeEL.textContent = homepoint;
}
function homeThree(){
    homepoint += 3;
    homeEL.textContent = homepoint;
}
function guestOne(){
    guestpoint += 1;
    guestEL.textContent = guestpoint;
}
function guestTwo(){
    guestpoint += 2;
    guestEL.textContent = guestpoint;
}
function guestThree(){
    guestpoint += 3;
    guestEL.textContent = guestpoint;
}

function newGame(){  
    homepoint = 0;
    guestpoint = 0;
    homeEL.textContent = homepoint;
    guestEL.textContent = guestpoint;
    console.log("A new game has started");
}

function leader(){
    if(homepoint > guestpoint){
        leadingTeam.textContent = "HOME";
    }else if (homepoint === 0 && guestpoint === 0){
        leadingTeam.textContent = "NIL";
    }else if (homepoint === guestpoint){
        leadingTeam.textContent = "DRAW";
    }else{
        leadingTeam.textContent = "GUEST";
    }
}