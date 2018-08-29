//function countLetters() {

function countLetters(string){

var combineString = string.split(" ").join("");
var lowercaseString = combineString.toLowerCase();
var letterResult = {};

//return lowercaseString;

 for (var i = 0; i < lowercaseString.length; i++) {
    var counter = 0;
    for (var j = 0; j < lowercaseString.length; j++)
    if (lowercaseString[i] === lowercaseString[j]){
        counter ++;
    }
    // var current = lowercaseString[i]
    letterResult[lowercaseString[i].toString()] = counter;
    }
      return letterResult;
}
//};

console.log(countLetters("Light House"));
