let winners = [];
const choices =['rock','paper','scissors'];


function resetGame(){
    winners = [];
    document.querySelector('#counter').textContent = 'ROUND 0';
    document.querySelector('#plyrscore').textContent = '0';
    document.querySelector('#pcscore').textContent = '0';
    document.querySelector('#ties').textContent = 'Ties count: 0';
    document.getElementById("playerchoice").src='images/tie.png';
    document.getElementById("computerchoice").src='images/tie.png';
    document.getElementById("winnerimg").src='images/tie.png';
    document.querySelector('#btn').style.display = 'none';
    

}

function computerSelection(){
    let choice = choices[Math.floor(Math.random()*choices.length)];
    console.log(`${choice}`);
    return choice;
}

function startGame(){
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => img.addEventListener('click', () =>
        {
       if(img.id =='paper' || img.id == 'rock' || img.id == 'scissors')
        {
            playRound(img.id);
            
        }
       }))
       
    } 
    
function playRound(playerChoice){
    let wins = checkWins();
    if(wins >= 5)
    {
        return;
    }
    const computerChoice = computerSelection();
    const winner = checkWinner(playerChoice,computerChoice);

    winners.push(winner);
    countWins();
    displayRound(playerChoice,computerChoice,winner);
    wins = checkWins();
    if(wins == 5){
        displayEnd();
    }
}

function displayEnd()
{
    let playerWins = winners.filter((item) => item == "player").length;
    if(playerWins == 5){
        alert('You won, CONGRATS!!');
    }
    else{
        alert('You lost :(');
    }
    document.querySelector('#btn').style.display = 'flex';

}

function countWins()
{   const pWinCount = winners.filter((item) => item == 'player').length;
    const cWinCount = winners.filter((item) => item == 'robot').length;
    const ties = winners.filter((item) => item == 'tie').length;
    const rounds = winners.length;
    document.querySelector('#plyrscore').textContent = `${pWinCount}`;
    document.querySelector('#pcscore').textContent = `${cWinCount}`;
    document.querySelector('#ties').textContent = `Ties count = ${ties}`;
    document.querySelector('#counter').textContent = `ROUND ${rounds}`;

}

function displayRound(playerChoice,computerChoice,winner)
{
    document.getElementById("playerchoice").src=`images/${playerChoice}.png`;
    document.getElementById("computerchoice").src=`images/${computerChoice}.png`;
    document.getElementById("winnerimg").src=`images/${winner}.png`;

}

function checkWins(){
const pWinCount = winners.filter((item) => item == 'player').length;
const cWinCount = winners.filter((item) => item == 'robot').length; 
return Math.max(pWinCount,cWinCount);
}

function checkWinner(userChoice,pcChoice)
{
    if(userChoice == 'rock' && pcChoice == 'scissors' || userChoice == 'paper' && pcChoice == 'rock' || userChoice == 'scissors' && pcChoice == 'paper')
    {return 'player';}
    else if(userChoice == pcChoice)
    {return 'tie';}
    else return 'robot';
}

startGame();