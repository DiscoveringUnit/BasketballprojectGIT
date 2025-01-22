let homeEL = document.getElementById('div-home-score')
let guestEL = document.getElementById('div-guest-score')
let homeScore = 0
let guestScore = 0

//homeEL board

function scorePlus1home() {
    homeScore += 1
    homeEL.textContent = homeScore
}

function scorePlus2home() {
    homeScore += 2 
    homeEL.textContent = homeScore
}

function scorePlus3home() {
    homeScore += 3
    homeEL.textContent = homeScore 
}

//guestEL board

function scorePlus1guest() {
    guestScore += 1
    guestEL.textContent = guestScore
}


function scorePlus2guest() {
    guestScore += 2 
    guestEL.textContent = guestScore
}

function scorePlus3guest() {
    guestScore += 3
    guestEL.textContent = guestScore 
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeEL.textContent = 0
    guestEL.textContent = 0
}

