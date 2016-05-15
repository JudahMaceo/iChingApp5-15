function iChingGame() {

//NEXT STEPS
  //divide the hexagram into upper and lower hexagrams (arrays) using NESTED ARRAY


  //Get Upper and Lower Hexagrams
    //within Generate Hexagram

      //NESTED ARRAY
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


//CONVERT NUMBER TO A LINE THAT IS BINARY IN NATURE IN THAT IT IS EITHER 0 OR 1
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
        var lowArray = [];
        var upperArray = [];

        for (var i = 1; i <= 6; i++) {
            // hexArray.push("hello");
            // hexArray.push(convertNumberToLine() + i);
            if(i < 4){
              // console.log("bye" + i);
              lowArray.push("low hex" + i)
            }
            else{
              upperArray.push("upper hex" + i)
          }


        }
        hexArray.push(lowArray);
        hexArray.push(upperArray);
        console.log(hexArray);
        // return (hexArray);
    }

generateHexagramArray();
    // console.log(generateHexagramArray());
    //
    // function displayHexArrayCorrectly() {
    //   var hexArray = generateHexagramArray();
    //   var hexString = ""
    //   for (var i = 5; i >= 0; i--) {
    //     hexString += hexArray[i] + "\n"
    //   }
    //   return hexString;
    // }
    // console.log(displayHexArrayCorrectly());


};
//function close

iChingGame();
