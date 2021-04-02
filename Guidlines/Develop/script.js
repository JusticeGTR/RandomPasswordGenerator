// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//pseudo code first
//google how to generate a random character
//use a for loop to generate N number of random characters