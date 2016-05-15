function iChingGame(){
//Generate Hexagram
  //generate six lines
    //return six lines (full hexagram)




////////////////////////////////////////////////////
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


function convertNumberToLine(){
  var tossOutcome = tossResult();
  if( tossOutcome % 2 === 0 ){
    return("____   ____");
  }
  else{
    return("___________");
  }

}

function generateHexagram(){

var i = 1;
var hexString = "";
while(i <= 6){
  hexString+= convertNumberToLine() + "\n";
  i++;
}
return(hexString);

}

console.log(generateHexagram());


};
//function close

iChingGame();
