//set variables
function generatePassword() {


let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}|:"<>?~,./;';
let passwordLength = 8;
let passwordValue = '';



//prompt numbers 
//prompt special characters
//if not selected anything run again
//generate password

//prompt length of password
numberofCharacters = prompt("How many characters would you like in your password? Choose a number between 8-128.");
if (numberofCharacters < 8 || numberofCharacters > 128) {
  return "Please choose a number between 8-128.";
}
else if (isNaN(numberofCharacters)) {
  numberofCharacters = prompt("Please pick a number between 8 and 128.");
}
else {
  alert("You've chosen a password of" + numberofCharacters + " characters long.");
}

//prompt upper case letters
letterUppercase = confirm("Do you want uppercase characters?");
if (letterUppercase) {
  var chooseUppercase = alert("Your password will include uppercase characters");
}
else {
  alert("Your password will not include uppercase characters.");
}


//prompt lower case letters
letterLowercase = confirm("Do you want lowercase characters?");
if (letterLowercase) {
  var chooseLowercase = alert("Your password will include lowercase characters.");
}
else {
  alert("Your password will not include lowercase characters.");
}










//Create password
const writePassword = () => {
  passwordValue = '';

  for (let i = 0; i < passwordLength; i++) {
    let number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.substring(number, number + 1);
  }

  password.value = passwordValue;
}


//Events

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);