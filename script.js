//set variables
var characterLength = 8;
var choiceArray = [];

var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //returns true or false for questions below.
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  }
  else {
    passwordText.value = "";

  }
  }

//generate password based on prompts
function generatePassword() {
  var password = "";
  for (let i = 0; i < characterLength; i++){
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts(){//prompt length of password
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters would you like in your password? Choose a number between 8-128."));

if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  window.alert("Please choose a number between 8-128.");
  return getPrompts();
}

if (confirm("Would you like lowercase letters in your password?")) {
  choiceArray = choiceArray.concat(lowercaseArray);
}
if (confirm("Would you like uppercase letters in your password?")) {
  choiceArray = choiceArray.concat(uppercaseArray);
}
if (confirm("Would you like special characters in your password?")) {
  choiceArray = choiceArray.concat(specialArray);
}
if (confirm("Would you like numbers in your password?")) {
  choiceArray = choiceArray.concat(numberArray);
}
if (choiceArray < 1){
  window.alert("No choices were made, so I chose numbers for you instead.")
  choiceArray = choiceArray.concat(numberArray);
}

return true;

};


