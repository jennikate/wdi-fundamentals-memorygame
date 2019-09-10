
//console.log("up and running");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-diamonds.png"
  }
]
var cardsInPlay = []
var gameOutcomeText //show win or lose text
var gameOutcome //change color of text based on win or lose
var gameWins = 0 //set gameWins to zero
var gameLoses = 0 //set gameLoses to zero


function createBoard(){
  for (var i=0; i<cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  };
};

function checkForMatch(){
  console.log(cardsInPlay.length);
    if (cardsInPlay[0] === cardsInPlay[1]) {
      //alert("You found a match"); - replaced alert with on screen message
      gameOutcomeText = "You found a match!";
      gameOutcome = "win";
      gameWins ++;
    } else {
      //alert("Sorry, try again"); - replaced alert with on screen message
      gameOutcomeText = "Sorry try again";
      gameOutcome = "lose";
      gameLoses ++;
    }
};

function flipCard(){
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage);

  if(cardsInPlay.length === 2) {
    checkForMatch();
    //result text and button
    document.getElementById("game-result").textContent = gameOutcomeText;
    var totalGames = (gameWins + gameLoses);
    document.getElementById("game-score").textContent = gameWins + " out of " + totalGames;
    document.getElementById("game-result").setAttribute("class", gameOutcome);
    document.getElementById("reset-cards").setAttribute("class", "show"); //show button
    document.getElementById("reset-score").setAttribute("class", "show"); //show button
  } else {
    console.log("not two");
    }
};

// Reset cards
function cardReset(){
  var gameBoard = document.getElementById("game-board");
  while (gameBoard.hasChildNodes()) {
    gameBoard.removeChild(gameBoard.firstChild);
  };
};

//reset the game
function gameReset(){
  document.getElementById("reset-cards").setAttribute("class", "hide"); //hides reset button
  document.getElementById("reset-score").setAttribute("class", "hide"); //hides reset button
  document.getElementById("game-result").textContent = ""; //set game result text to null
  cardsInPlay = []; //sets back to no cards selected
  cardReset();
  createBoard();
};

//reset the score
function scoreReset(){
  gameWins = 0;
  gameLoses = 0;
  document.getElementById("game-score").textContent = "0"
  gameReset();
};

//listeners for buttons
document.getElementById("reset-cards").addEventListener("click", gameReset);
document.getElementById("reset-score").addEventListener("click", scoreReset);

//create
createBoard();
