// function countLetters(string){

//   var combineString = string.split(" ").join("");
//   var lowercaseString = combineString.toLowerCase();
//   var letterResult = {};

//   //return lowercaseString;

//   for (var i = 0; i < lowercaseString.length; i++) {
//     // setting up object key
//     var letters = new Object((letterResult[lowercaseString.toString()]));
//     //setting up property to object key

//     for (var j = 0; j < lowercaseString.length; j++) {
//       if (lowercaseString[i] === lowercaseString[j]) {
//           i++;
//       }
//     }

//     letterResult[lowercaseString[i].toString()] = index;
//   }
//   return letterResult;
// }

// console.log(countLetters("Light House In The House"));

// console.log(index);



function countLetters(string){

  var combineString = string.split(" ").join("");
  var lowercaseString = combineString.toLowerCase();
  var letterResult = {};

  //return lowercaseString;

  for (var i = 0; i < lowercaseString.length; i++) {
    var array = [];
    for (var j = 0; j < lowercaseString.length; j++) {
      if (lowercaseString[i] === lowercaseString[j]){
          array.push(j);
      }
    }
    letterResult[lowercaseString[i]] = array;
  }
  return letterResult;
}
//};

console.log(countLetters("Light House"));
