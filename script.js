// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetters = "abcdefghijklmnopqrstuvwxyz"
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVQXYZ"
var numbers = "0123456789"
var symbols = "!'#$%&()*+,-./:;<=>?@[/]^_{|}"

// Write password to the #password input
function writePassword() {
  var passLength = prompt("Please input password length. Must be between 8-128 characters.");

// Checks user input to see if content entered is a number and between 8-128 before allowing user to continue.
  if (isNaN(passLength)) {
    window.alert (passLength + " is not a numerical value. Please try again.");
    }  else if (passLength < 8 || passLength > 128) {
      window.alert ("Password must be between 8-128 characters.");
    }
  var password = generatePassword(

  );
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Writing out functions for grabbing random assortment from each string.
// function grabLower (); {
// }
// function grabUpper (); {
// }
// function grabNumbers (); {
// }
// function grabSymbols (); {
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// grabLower = lowLetters.length;
// for(var i = 0 ; i <length; i++)