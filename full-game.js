function iChingGame() {
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
            return ("____   ____ even ");
        } else {
            return ("___________ odd ");
        }

    }


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


    function separateLowerUpperHex() {
        var lowerHex = [];
        var upperHex = [];
        var hex = [];

        for (var i = 0; i < 6; i++) {

            if (i < 3) {
                lowerHex.push("lower hex" + generateHexagramArray()[i]);

            } else {
                upperHex.push("upper hex" + generateHexagramArray()[i])
            }


        }
        hex.push(lowerHex);
        hex.push(upperHex);
        return (hex);

    }
    console.log(separateLowerUpperHex());

    //     function hexKeys() {
    //       if(convertNumberToLine() === "____   ____"){
    //         console.log("divided lines are actually even");
    //       }
    //     }
    //
    // hexKeys();
};
//function close

iChingGame();
