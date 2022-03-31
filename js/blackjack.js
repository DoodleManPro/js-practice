//Callouts:
    const hitBtn = document.querySelector('.hit');
    const standBtn = document.querySelector('.stand');
    const dealBtn = document.querySelector('.deal');

    let blackjackGame = {
        you: {
            scoreSpan: '.your-score',
            box: '.your-row',
            score: 0
        },
        dealer: {
            scoreSpan: '.dealer-score',
            box: '.dealer-row',
            score: 0
        },
        cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'],
        cardsMap: {
            '2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,'10': 10,'J': 10, 'K': 10,'Q': 10,'A': [1, 11]
        },
        wins: 0,
        losses: 0,
        draws: 0,
        isStand: false,
        turnsOver: false,
    };

    const YOU = blackjackGame.you;
    const DEALER = blackjackGame.dealer;

    const hitSound = new Audio('images/blackjack/sounds/swish.m4a')
    const winSound = new Audio('images/blackjack/sounds/cash.mp3')
    const lossSound = new Audio('images/blackjack/sounds/aww.mp3')
//Callouts end here--------->

//Event-Listeners:
    hitBtn.addEventListener('click', blackJackHit);
    standBtn.addEventListener('click', dealerLogic)
    dealBtn.addEventListener('click', blackJackDeal);
//EventListeners end here--------->

//Functions:
    function blackJackHit() {
        if (blackjackGame.isStand === false) {
            let card = randomCard();
            console.log(card);
            showCard(card, YOU);
            updateScore(card, YOU);
            showScore(YOU);
            console.log(YOU.score);
        }
    }

    function randomCard() {
        //Picking a random card:
        let randomIndex = Math.floor(Math.random() * 13);
        return blackjackGame.cards[randomIndex];
    }

    function blackJackDeal() {   
        if (blackjackGame.turnsOver === true) {   

            
            blackjackGame.isStand = false;

            const yourImages = document.querySelectorAll('.your-box img');
            const dealerImages = document.querySelectorAll('.dealer-box img');

            //Removing the images for your-images:
            for (let i = 0; i < yourImages.length; i++) {
                yourImages[i].remove();
            }

            //Removing the images of dealer-images:
            for (let j = 0; j < dealerImages.length; j++) {
                dealerImages[j].remove();
            }

            blackjackGame.you.score = 0;
            blackjackGame.dealer.score = 0;

            //RESETS THE VISIBLE HTML SCORE(YOU) TO 0;
            document.querySelector(blackjackGame.you.scoreSpan).innerText = 0;
            document.querySelector(blackjackGame.you.scoreSpan).style.color = 'white';

            //RESETS THE VISIBLE HTML SCORE(DEALER) TO 0;
            document.querySelector(blackjackGame.dealer.scoreSpan).innerText = 0;
            document.querySelector(blackjackGame.dealer.scoreSpan).style.color = 'white';

            document.querySelector('.lets-play').textContent = "Let's play!"
            document.querySelector('.lets-play').style.color = 'black';

            blackjackGame.turnsOver = true; 

        }

    }

    //?When it is more than 21, then this showCard() func. doesn't work.
    function showCard(card, activePlayer) {
        if (activePlayer.score <= 21) {
            let cardImage = document.createElement('img');
            cardImage.src = `images/blackjack/images/${card}.png`;
            cardImage.classList.add('bj-img');
            document.querySelector(activePlayer.box).appendChild(cardImage);
            hitSound.play();
        }
    }
/* FIXME: 
        !HELP ME BE GOOD
        !HELP ME BEE GREAT
        !HELP ME BEEE LEGEND */

//Functions end here--------->

//========== LOT OF DEEPER STUFF =====================//
//=====Showing score=====//
function updateScore(card, activePlayer) {
    if (card === 'A') {
      //If adding 11, keeps me below 21, add 11, otherwise add 1.
      if (activePlayer.score + blackjackGame.cardsMap[card][1] <= 21) {      
        activePlayer.score += blackjackGame.cardsMap[card][1];
      } else {
        activePlayer.score += blackjackGame.cardsMap[card][0];
      }
    } else {
        activePlayer.score += blackjackGame.cardsMap[card];
    }
}

//Showing BUST
function showScore(activePlayer) {
    if (activePlayer.score > 21) {
        document.querySelector(activePlayer.scoreSpan).innerText = 'BUST!';
        document.querySelector(activePlayer.scoreSpan).style.color = 'red';
    } else {
        document.querySelector(activePlayer.scoreSpan).innerText = activePlayer.score;
    }
}



//Advance stuff:
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//!DEALER PART:

async function dealerLogic() {
    blackjackGame.isStand = true;

    while (DEALER.score < 16 && blackjackGame.isStand === true) {

        //randomCard chooses random number/card basically...
        let card = randomCard();
        //showCard() is for apending img on the span of the player
        showCard(card, DEALER);
        //Update score is for checking Ace and then showing in the dealer==>
        updateScore(card, DEALER);
        //showScore is for showing score on the div of the player's box===>
        showScore(DEALER);
        await sleep(1000);
    }


    blackjackGame.turnsOver = true;
    let winner = computeWinner();
    showResult(winner);

}

//Compute winner and return winner
//update the wins draws and losses in the table
function computeWinner() {
    let winner;
    
    if (YOU.score <= 21) {
        if (YOU.score > DEALER.score || DEALER.score > 21) {
            blackjackGame.wins ++;
            winner = YOU;
        } else if (YOU.score < DEALER.score) {
            blackjackGame.losses ++;
            winner = DEALER;
        } else if (YOU.score === DEALER.score) {
            blackjackGame.draws ++;
        }

        //If user busts but dealer doesn't then what happens:
    } else if (YOU.score > 21 && DEALER.score <= 21) {
        console.log("YOU LOSE!");
        blackjackGame.losses ++;
        winner = DEALER;

        //If both user and dealer bust
    } else if (YOU.score > 21 && DEALER.score > 21) {
        console.log("YOU DREW!")
        blackjackGame.draws ++;
    }

    console.log("Winner is", winner);
    console.log(blackjackGame)
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame.turnsOver === true) {

        if (winner === YOU) {
            message = 'you won!';
            messageColor = 'green';
            winSound.play();

            document.querySelector('.wins').textContent = blackjackGame.wins;
        } else if (winner === DEALER) {
            message = 'you lost!';
            messageColor = 'red';
            lossSound.play();

            document.querySelector('.losses').textContent = blackjackGame.losses;
        } else {
            message = 'you drew!';
            messageColor = 'black';

            document.querySelector('.draws').textContent = blackjackGame.draws;
        }

        document.querySelector('.lets-play').textContent = message;
        document.querySelector('.lets-play').style.color = messageColor;

        blackjackGame.isStand = false;

    }
}