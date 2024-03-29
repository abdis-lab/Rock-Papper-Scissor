const choices = document.querySelectorAll('.choice')
const score = document.getElementById('score')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
const modal = document.querySelector('.modal')
const scoreboard = {
    player: 0,
    computer: 0
}

//Play game
function play(e){
    restart.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice)
    showWinner(winner, computerChoice)
}

//Get computers choice 
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }else if (rand <= 0.67){
        return 'papper'
    }else{
        return 'scissors'
    }
}


//Get game winner

function getWinner(p, c){
    if(p === c){
        return 'draw';
    }else if(p === 'rock'){
        if(c === 'papper'){
            return 'computer';
        }else {
            return 'player';
        }
    }else if (p === 'papper'){
        if(c === 'scissors'){
            return 'computer';
        }else {
            return 'player';
        }
    }else if (p === 'scissors'){
        if(c === 'rock'){
            return 'computer';
        }else {
            return 'player';
        }
    }

 }


 //show winner

function showWinner(winner, computerChoice){
    if(winner === 'player'){
        //Inc player score
        scoreboard.player++;
        //Show modal result 
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"</i>
        <p>Computer chose <strong>${computerChoice}</strong></p>

        `
    }else if (winner === 'computer') {
        // Inc computer score
        scoreboard.computer++;
        //Show modal result 
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"</i>
        <p>Computer chose <strong>${computerChoice}</strong></p>

        `
    }else {
        result.innerHTML = `
        <h1">Its a Draw</h1>
        <i class="fa-solid fa-hand-${computerChoice} fa-10x"</i>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `
    }

    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>computer: ${scoreboard.computer}</p>
    `;
    modal.style.display = 'inline-block';
}

function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>player: 0</p>
    <p>computer: 0</p>
    `
}

//Event listeners
window.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.style.display = 'none'
    }
} )
choices.forEach(choice => choice.addEventListener('click', play))
restart.addEventListener('click', restartGame)