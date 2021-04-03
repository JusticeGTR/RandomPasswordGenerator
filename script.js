// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //var passwordSize = 0;
  passwordText.value = password;
}

function generatePassword() {
  var passwordSize = parseInt(prompt("How long would you like your password to be?:", "It must be between 8 and 128 characters long"));
  password = "";
  
    console.log(typeof passwordSize)
    console.log(passwordSize);
    
    //how to deal with canceling out of the first prompt to go back to index?
    // if(passwordSize === null || passwordSize === "" || passwordSize === "It must be between 8 and 128 characters long") {
      //   passwordText = "Canceled";
      // }
      
      //setting limits to the password size and type
      if (isNaN(passwordSize)) {
        alert("Please enter a number for the password length")
        writePassword()
      }
      
      if (passwordSize < 8) {
        alert("Password must be longer than 8 characters!")
        writePassword()
      }
      
      if (passwordSize > 128) {
        alert("Password must be shorter than 128 characters!")
        writePassword()
      }
      
      console.log(passwordSize)
      
      //a place to store the user's answers
      var userPassword = {
        pLength: passwordSize,
        isSpChar: true,
        isNumber: true,
        isUpperCase: true,
        isLowerCase: true
      }
      
      //storing the user's answers in the object
      if (confirm("Would you like to include special characters?") === true) {
        userPassword.isSpChar = true;
      } else {
        userPassword.isSpChar = false;
      }
      
      if (confirm("Would you like to include numbers?") === true) {
        userPassword.isNumber = true;
      } else {
        userPassword.isNumber = false;
      }
      
      if (confirm("Would you like to use uppercase letters?") === true) {
        userPassword.isUpperCase = true;
      } else {
        userPassword.isUpperCase = false;
      }
      
      if (confirm("Would you like to use lowercase letters?") === true) {
        userPassword.isLowerCase = true;
      } else {
        userPassword.isLowerCase = false;
      }
      
      console.log(userPassword)
      
      //making arrays of all password character options and using user input from the object to determine what options are desired.
      var numbersArr = ["1", "2", "3", "4", "5", "6", "7","8","9", "0"];
      var symbolsArr = ["!", "\"", "#", "$", "'", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "\]", "^", "_", "`", "{", "|", "}", "~"];
      var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      
      var passwordArr = [];
      
      if (userPassword.isSpChar === true) {
        for(var i = 0; i < symbolsArr.length; i++) {
          passwordArr.push(symbolsArr[i]);
        }
      }
      
      if (userPassword.isNumber === true) {
        for(var i = 0; i < numbersArr.length; i++) {
          passwordArr.push(numbersArr[i]);
        }
      }
      
      if (userPassword.isUpperCase === true) {
        for(var i = 0; i < upperCaseArr.length; i++) {
          passwordArr.push(upperCaseArr[i]);
        }
      }
      
      if (userPassword.isLowerCase === true) {
        for(var i = 0; i < lowerCaseArr.length; i++) {
          passwordArr.push(lowerCaseArr[i]);
        }
      }
      
      console.log(passwordArr);
      
      
      //creating the random generator to make the actual password based on desired length and all options from the arrays chosen
      for (var i = 0; i <= passwordSize; i++) {
        var nextCharacter = passwordArr[Math.floor(Math.random() * passwordArr.length)];
        password = password + nextCharacter;
      }
      // return 
      console.log(password)
      return password
    }
    //turning the generated password into a value and putting it on the page?
    
    // console.log(writePassword())
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    // textSpace = document.getElementById("#password")
    // textSpace.textContent = password
    
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