//Game Function:
const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startMatch = ()=> {
        const playerOptions = document.querySelectorAll('.intro button')

        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        })

        const computerOptions = ['rock', 'paper', 'scissors'];

        playerOptions.forEach((option)=> {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
            
                setTimeout(()=> {
                    //Compare hands will come here:
                    compareHands(this.innerText, computerChoice);
                    //Changing the images:
                    playerHand.src = `./images/${this.innerText}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        })
    }
    //Update score:
    const updateScore = ()=> {
        const playerScore = document.querySelector('.player-score');
        const computerScore = document.querySelector('.computer-score');

        playerScore.innerText = pScore;
        computerScore.innerText = cScore;
    }

    //CompareHands:
    const compareHands = (playerChoice, computerChoice)=> {
        const winner = document.querySelector('.winner');

        if (playerChoice == computerChoice) {
            winner.innerText = "It's a tie";
            console.log(playerChoice, computerChoice);
            return;
        }

        //Check for rock:
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors') {
                winner.innerText = 'Player wins!';
                pScore++
                updateScore();
                return;
            } else {
                winner.innerText = 'Computer wins!';
                cScore++
                updateScore();
                return;
            }
        }
        //Check for paper:
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors') {
                winner.innerText = 'Computer wins!';
                cScore++
                updateScore();
                return;
            } else {
                winner.innerText = 'Player wins!';
                pScore++
                updateScore();
                return;
            }
        }
        //Check for Scissors:
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock') {
                winner.innerText = 'Computer wins!';
                cScore++
                updateScore();
                return;
            } else {
                winner.innerText = 'Player wins!';
                pScore++
                updateScore();
                return;
            }
        }
    }
    startMatch();
    compareHands();
}

//Calling function:
game();