// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //var passwordSize = 0;
  var passwordSize = parseInt(prompt("How long would you like your password to be?:", "It must be between 8 and 128 characters long"));

console.log(typeof passwordSize)
console.log(passwordSize);
  if(isNaN(passwordSize)){
    alert("Please enter a number for the password length")
    writePassword()
    // passwordSize = prompt("How long would you like your password to be?:", "It should be between 8 and 128 characters long")
  } 
  if (passwordSize < 8) {
      alert("Password must be longer than 8 characters!")
      writePassword()
      }
    if(passwordSize > 128) {
          alert("Password must be shorter than 128 characters!")
          // passwordSize = prompt("How long would you like your password to be?:", "It should be between 8 and 128 characters long")
          writePassword()
      } 
  
console.log(passwordSize)
var numberOption
  passwordText.value = password;
return
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//pseudo code first
//google how to generate a random character
//use a for loop to generate N number of random characters

//we're already connected to the button and it already has an event listener on it
//we have the initial function to write the password on the page started with
// a variable set to become the password generated from another function that  is already
//named. another variable is already set to connect to where the password will appear?
//
//somewhere passwordText.textContent=? will need to exist I think. in the generatePassword function?

//upon click, it runs the writePassword function. the function needs to bring up a prompt that asks how many digits the password
//will be and what you want to include in the password one by one, including numbers, symbols, uppercase and lowercase letters.
//first it needs to take the number given by the user and dictate how long the password will be. then, as each option  is included,
// it needs to add that option to the list of things to include in the password. once it finishes making the list of available
//options, it then needs to pick, at random, the correct amount of letters/numbers/symbols and store it in a variable. it then
//needs to generate that variable to the space provided on the page.






// var spChar = ["#","%"]
// var lowerCase = ["a","b"]

// var password = {
//   len: passwordSize,
//   isSpChar:true
// }
// var arr;
// if(isSpChar === true){
//   arr = [spChar]
// }
// if(lowerCase === true){
//   arr join lowecase arr    ///HINT: Concat()
// }

// random function to get the arr upto the length of the password