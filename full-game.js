function iChingGame() {

  //Get Upper and Lower Hexagrams
    //within Generate Hexagram
      //var hexArray = [
                      // [--, -, -],
                      // [--, -, -]
                      // ]
      // var hexObject = {
// upper: ["____   ____", "___________", "___________"]
// lower: ["____   ____", "___________", "___________"]
// }
//
//
//
//
//
// upper
// -----------
// lower






////////////////////////////////////////////////////
    //Generate Hexagram
    //generate six lines
    //return six lines (full hexagram)
    ////////////////////////////////////////////////////
    // Generate Line
    // The Coin Toss
    // Toss three coins
    // each coin tossed has value of 3 (heads) or 2 (tails)


    // flip one coin and return a value of 3 (heads) or 2 (tails)
    function flipOneCoin() {
        return Math.round(Math.random()) + 2;
    }

    // flip 3 coins and return a value of 6, 7, 8, 9
    function tossResult() {
        var totalNumber = 0;

        for (var i = 1; i <= 3; i++) {
            totalNumber += flipOneCoin();
        }
        return (totalNumber);
    }


    function convertNumberToLine() {
        var tossOutcome = tossResult();
        if (tossOutcome % 2 === 0) {
            return ("____   ____");
        } else {
            return ("___________");
        }

    }

    // function generateHexagramString() {
    //     var hexString = "";
    //
    //     for (var i = 1; i <= 6; i++) {
    //         hexString += convertNumberToLine() + i +"\n";
    //
    //
    //     }
    //     return (hexString);
    // }
    // console.log(generateHexagramString());

    function generateHexagramArray() {
        var hexArray = [];

        for (var i = 1; i <= 6; i++) {
            hexArray.push(convertNumberToLine() + i);
        }
        return (hexArray);
    }
    // console.log(generateHexagramArray());

    function displayHexArrayCorrectly() {
      var hexArray = generateHexagramArray();
      var hexString = ""
      for (var i = 5; i >= 0; i--) {
        hexString += hexArray[i] + "\n"
      }
      return hexString;
    }
    console.log(displayHexArrayCorrectly());


};
//function close

iChingGame();
