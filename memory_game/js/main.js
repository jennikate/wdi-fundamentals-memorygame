
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
      //alert("You found a match");
      gameOutcomeText = "You found a match!";
      gameOutcome = "win";
    } else {
      //alert("Sorry, try again");
      gameOutcomeText = "Sorry try again";
      gameOutcome = "lose";
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
    document.getElementById("game-result").setAttribute("class", gameOutcome);
    document.getElementById("reset-cards").setAttribute("class", "show");
    document.getElementById("reset-score").setAttribute("class", "show");
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
  document.getElementById("game-result").textContent = ""; //hides win/lose text
  cardsInPlay = []; //sets back to no cards selected
  cardReset();
  createBoard();
};

document.getElementById("reset-cards").addEventListener("click", gameReset);
//document.getElementById("reset-score").addEventListener("click", scoreReset);
createBoard();

/*

*/
