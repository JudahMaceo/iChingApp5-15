
function coinToss(numPennies, numThrows)
//(math random (2) is happening three times (is like the 'j') ) is happening (x or ) 6 number of throws (is like the 'i')

//math random to get a 1 or 2 (heads or tails)

function assignValue()
//assign heads or tails the value of 2 or 3

function mapValue()
//map the value of 2 or 3 to a dashed or solid lineArray
//if 6 or a 9 then special case

function horizontalValue()
//top three lines need to generate a horizontal axis value based on iching chart

function verticalValue()
//bottom three lines need to generate a vertical axis value based on iching chart

//model the iching chart as a 2 dimensional array

//each point on the chart is a link to a page



user1Game.coinToss(1)
user1Game.coinToss(2)
user1Game.coinToss(3)
user1Game.assignValue()

iching{
key:function coinToss(lineNumber){

},
key:function assignValue(){
},
key:function mapValue(),
key:function(),
key:function(),
key:function(),

}


var lineArray = [];


for (var i = 1; i <= 6; i++) {

console.log("this is line " + i);

var coinThrowArray = [];
console.log("about to throw coin number: ");
for (var j = 1; j <= 3; j++) {
    console.log(j);
    coinThrowArray.push(j);

  }
  lineArray.push(coinThrowArray);
}
console.log(lineArray);
