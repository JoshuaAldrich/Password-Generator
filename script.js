// Assignment code here
//create constant variables
//create other variables
//prompt length of password
//prompt upper case letters
//prompt lower case letters
//prompt numbers 
//prompt special characters
//if not selected anything run again
//generate password 

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

function generatePassword() {

}

let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}|:"<>?~';
let passwordLength = 8;
let passwordValue = '';


//Create password
const createPassword = () => {
  passwordValue = '';

  for (let i = 0; )
}


