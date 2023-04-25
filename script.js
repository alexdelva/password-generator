// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password
}

// Need an array for uppercase letters
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// need an array for lowercase letters
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// need an array for numberic characters
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
// need an array for special characters 
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '-', '+']
// Generate a random index number


// Pull random values out of array
function getRandomValueFromArray(array) {
  var randomArrayPosition = getRandomNumber(0, array.length);
  return array[randomArrayPosition];
}
// Get random number

// store it within password array variable
function getRandomNumber(min, max) {
  var randomNumber = Math.random() // Random number between 0 and 0.99
  var randomNumberUpToMax = randomNumber * max // Random number between 0 and max - 0.1
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange); // Remove the decimal places
}

// repeat as many times as passwordLength

// use the join method to combine all the values within password array variable

// return the joined password

function generatePassword() {
  // ASKING USER FOR LENGTH OF PASSWORD
  var passwordLength = prompt("HOW LONG SHOULD THE PASSWORD BE?( at least 8 characters, but not more than 128 characters");

  while(passwordLength<8 || passwordLength>128 || isNaN(passwordLength)){
    passwordLength = prompt("HOW LONG SHOULD THE PASSWORD BE?( at least 8 characters, but not more than 128 characters");
  }
  // ASKING USER FOR UPPERCASE LETTERS
  var askupperLetters = confirm("SHOULD I INCLUDE UPPERCASE LETTERS?");
  var asklowercaseLetters = confirm("SHOULD I INCLUDE LOWERCASE LETTERS?");
  var asknumbers = confirm("SHOULD I INCLUDE NUMBERS?");
  var askspecialcharacters = confirm("SHOULD I INCLUDE SPECIAL CHARACTERS?");

  var generatedPassword = "";

  while(passwordLength > generatedPassword.length) {
    if (askupperLetters && (passwordLength > generatedPassword.length)) {
      
      generatedPassword = generatedPassword + getRandomValueFromArray(uppercaseLetters)
    };
    // ASKING USER FOR LOWERCASE LETTERS
    if (asklowercaseLetters&& (passwordLength > generatedPassword.length)) {
      
      generatedPassword = generatedPassword + getRandomValueFromArray(lowercaseLetters)
    }
    //ASKING USER FOR NUNMBERS
    
    if (asknumbers&& (passwordLength > generatedPassword.length)) {
      generatedPassword = generatedPassword + getRandomValueFromArray(numbers)
    }
    //ASKING FOR SPECIAL CHARACTERS
    
    if (askspecialcharacters&& (passwordLength > generatedPassword.length)) {
      generatedPassword = generatedPassword + getRandomValueFromArray(specialCharacters)
    }
    console.log(generatedPassword)
  }
  return generatedPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);














// When I click the button, an alert comes up on the screen
//function buttonClick()
//var generateBtn = prompt("HOW MANY CHARACTERS SHOULD THE PASSWORD CONTAIN?")
// The user will be asked a series of questions creating the password 
// criteria.
// The prompt will ask the user for the following criteria
// "HOW LONG SHOULD THE PASSWORD BE?( at least 8 characters, but not more than 128 characters")
// prompt("HOW MANY CHARACTERS SHOULD THE PASSWORD CONTAIN?")
// // "WHAT KINDS OF CHARACTER TYPES SHOULD THE PASSWORD HAVE"(LETTERS AND NUMBERS?)
// prompt("WHAT CHARACTER TYPES SHOULD THE PASSOWRD CONTAIN?")
// // "SHOULD I INCLUDE LOWERCASE, UPPERCASE, NUMBERIC, AND/OR SPECIAL CHARACTERS?"
// prompt("SHOULD I INCLUDE LOWERCASE LETTERS?")
// prompt("SHOULD I INCLUDE UPPERCASE LETTERS?")
// prompt("SHOULD I INCLUDE NUMERIC CHARACTERS?")
// prompt("SHOULD I INCLUDE SPECIAL CHARACTERS?")

// WHEN ALL THE PROMPTS ARE ANSWERED, THEN A SERIES OF CONDITIONAL STATEMENTS WILL TAKE PLACE
//NUMBER OF CHARACTERS
//if ( === true){
//   ("")
// }
// else
// // 
// if ( === true){
//   ("")
// }
// else

// if (=== true){
//   ("")
// }
//else
// THE PASSWORD WILL BE GENERATED
// THEN THE PASSWORD WILL BE ALERTED TO THE SCREEN, AND ITLL MATCH THE CRITERIA CREATED BY THE USER
// 
//alert (password)





//CONSOLE.LOG TO TEST THAT SOMETHING WORKS
// IF A YES OR NO QUESTION USE A BOOLEAN
// .DOCUMENT REFERS TO THE HTML
// RETURN IS ONLY FOR FUNCTIONS