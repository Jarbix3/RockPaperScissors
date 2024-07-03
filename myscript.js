



function getComputerChoice()
{
    let str = Math.random() ;
    console.log(str);
    if(str > 0.6 || str == 0.6)
        {
            str = 'paper';
        }
    else if(0.3 <= str &  str < 0.6)
        {
            str =  'scissors';

        }
    else if(str < 0.3){
       
        str = 'rock';
    }
    return str;

}

function getHumanChoice()
{
    let choice = prompt('Rock, Paper, Scissors?','');
    console.log(choice);
    if (choice != 'Rock' && choice != 'Paper' && choice != 'Scissors' && choice != 'rock' && choice != 'paper' && choice != 'scissors')
      {
        choice = prompt('You didn\'t choose correctly','');
      }
      return choice;

}

function playRound(humanChoice,computerChoice,hScore,cScore)
{
    
    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase();
    let winner;

    if((humanChoice == 'PAPER' && computerChoice == 'ROCK') || (humanChoice == 'SCISSORS' && computerChoice == 'PAPER') || (humanChoice == 'ROCK' && computerChoice == 'SCISSORS') )
    {
    console.log('You win! ' + humanChoice + ' beats ' + computerChoice + '!');
     hScore++;
     winner = 'human';
    }

    else if(humanChoice == computerChoice)
    {
     console.log('You tied! ' + computerChoice + ' and ' + humanChoice + ' are the same!');
     winner = 'neither';
    }
    else
    {
     console.log('You lost! ' + computerChoice + ' beats ' + humanChoice + '!')
        cScore++;
        winner = 'computer'

    }
    return(winner);
}

function playGame()
{
    let humanScore = 0, computerScore = 0;

for(let i = 1; i < 6; i++)
{
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
  if(  playRound(humanSelection,computerSelection,humanScore,computerScore) == 'human')
  {
    humanScore++;
  }
  else computerScore++;


}
if(humanScore > computerScore)
    {
        alert('YOU WON!!!!');
    }
else if(computerScore > humanScore)
    {
        alert('You lost :(');
    }
else
{
    alert('you tied!!');
}

}

playGame();