function iChingGame(){
// Generate Line
  // The Coin Toss
    // Toss three coins
    // each coin tossed has value of 3 (heads) or 2 (tails)


// flip one coin and return a value of 3 (heads) or 2 (tails)
function flipOneCoin(){
   return Math.round( Math.random() ) + 2;
}

// flip 3 coins and return a value of 6, 7, 8, 9
function tossResult(){
var totalNumber = 0;

  for (var i = 1; i <= 3; i++) {
    totalNumber+= flipOneCoin();
  }
  return(totalNumber);
}

console.log(tossResult());

//if the number is even then
  //the line looks like this "____   ____"
//else the line is odd
  //and looks like this "___________"

// "____   ____"
// "___________"

};

iChingGame();
