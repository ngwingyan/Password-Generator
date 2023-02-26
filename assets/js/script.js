/* Below are provided in starter code */
// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

/* Below are updated */
// Function to prompt user for password options
function getPasswordOptions() {
  var charpool = [];
  var IsLowerCase = confirm("Would you like to include lower case letters in the password?");
  var IsUppercase = confirm("Would you like to include uppercase letters in the password?");
  var IsSymbols = confirm("Would you like to include symbols in the password?");
  var IsNumbers = confirm("Would you like to include numbers in the password?");

  // add the array of characters into the pool when selected
  if (IsLowerCase === true) {
    charpool = charpool.concat(lowerCasedCharacters);
  };

  if (IsUppercase === true) {
    charpool = charpool.concat(upperCasedCharacters);
  };

  if (IsSymbols === true) {
    charpool = charpool.concat(specialCharacters);
  };

  if (IsNumbers === true) {
    charpool = charpool.concat(numericCharacters);
  };

  // check if user choose cancel for all four options, if so, need to try again with selecting the length
  if (IsLowerCase === false && IsUppercase === false && IsSymbols === false && IsNumbers === false) {
    alert("You must choose at least ONE option of lowercase, uppercase, numbers or special characters. Please try again.")
    generatePassword();
  };
  return charpool;
};

// Function for getting a random element from an array
function getRandom(arr) {

  // get random index value
  var randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  var randomChar = arr[randomIndex];
  return randomChar;
};


// Function to generate password with user input
function generatePassword() {
  // ask user to choose how long the password should be
  var chosenPasswordLength = parseInt(prompt("How long do you want the password to be? (Choose from 10 to 64)"));
  
  // validate user input to be a number and between 10 to 64 (both inclusive)
  if (isNaN(chosenPasswordLength) || chosenPasswordLength < 10 || chosenPasswordLength > 64) {
    
    // if input is not a number, password length not between 10 and 64, need to try again
    alert("Passowrd length must be between 10 and 64 digits long. Please try again");
    return generatePassword();
  }

  // call out the function with selected character pool
  var charpool = getPasswordOptions();

  // call out getRandom function to pick a random character from the character pool and add to ouput until the length chosen
  passwordoutput = [];
  for (var i = 0; i < chosenPasswordLength; i++) {
    passwordoutput += getRandom(charpool);
  }
  return passwordoutput;
};

/* Below are provided in starter code */
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);