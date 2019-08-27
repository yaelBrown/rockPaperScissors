console.log("app.js");

// Computer's value for Rock Paper Scissors
var compSel = Math.floor((Math.random() * 3) + 1);

// Converts numerical value to string of RPS
var rps = (num) => {
  let rpsVal;
  switch (num) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    default: 
      return "Scissors";
      break;
  }
};

// Application logic for who wins. 

var rpsGame = (p1, comp) => {
  var winner;
  
  // rock
  if (p1 === 1) {
    if (comp === 1) {
      winner = "Draw";
    } else if (comp === 2) {
      winner = "Computer";
    } else {
      winner = "Player"
    }
  
  // paper
  } else if (p1 === 2) {
    if (comp === 1) {
      winner = "Player";
    } else if (comp === 2) {
      winner = "Draw";
    } else {
      winner = "Computer"
    }
  
  // Scissors
  } else {
    if (comp === 3) {
      winner = "Computer";
    } else if (comp === 2) {
      winner = "Player";
    } else {
      winner = "Draw"
    }
  }

  return winner;
}