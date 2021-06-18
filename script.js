// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetters = "abcdefghijklmnopqrstuvwxyz"
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVQXYZ"
var numbers = "0123456789"
var symbols = "!'#$%&()*+,-./:;<=>?@[/]^_{|}"


// Creates function for generating password.
function generatePassword() {
  var passResult = "";
  var allChars = "";

// Prompts user for password length.
  var passLength = prompt("Please input password length. Must be between 8-128 characters.")

// Checks user input to see if content entered is a number and between 8-128 before allowing user to continue.
  if (isNaN(passLength)) {
    window.alert (passLength + " is not a numerical value. Please try again.");
    return;
    }  else if (passLength < 8 || passLength > 128) {
      window.alert ("Password must be between 8-128 characters. Please try again"); 
    return;
  };
  console.log("Password length:", passLength);

// Requests if user would like to include lower case Letters.
  var includeLowLetters = confirm("Include lower case letters?");
  console.log("Include lowercase?:", includeLowLetters);
  if (includeLowLetters) {
    allChars += lowLetters;
  };

// Requests if user would like to include upper case Letters.
  var includeUpLetters = confirm("Include upper case letters?");
  console.log("Include uppercase?:", includeUpLetters);
  if (includeUpLetters) {
    allChars += upLetters;
  };

  // Requests if user would like to include numbers.
  var includeNumbers = confirm("Include numbers?");
  console.log("Include numbers?:", includeNumbers);
  if (includeNumbers) {
    allChars += numbers;
    console.log(allChars);
  };

// Requests if user would like to include special characters.
  var includeSpecial = confirm("Include special characters?");
  console.log("Include special characters?:", includeSpecial);
  if (includeSpecial) {
    allChars += symbols;
    console.log(allChars);
  };

// If the user doesn't select any options, it returns an error.
  if (!includeLowLetters && !includeUpLetters && !includeSpecial) {
    window.alert ("You must select at least one option.");
    return;
};

// Runs the randomization process after prompts answered.
  for (i = 0; i < passLength; i++) {
      passResult += allChars [Math.floor(Math.random() * allChars.length)];
};
  console.log(passResult)
  return passResult;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);