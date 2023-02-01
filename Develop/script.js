// Assignment Code
// generate button
var generateBtn = document.querySelector("generate");

console.log(generateBtn)

// character set for password generator
charSet = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  symbol: "!@#$%^&*()-_=+[]{};:'\"\\|,.<>/?",
};

// Write password to the #password input
function writePassword() {
  // prompt for the length of the password
  let length = parseInt(prompt("Please enter the length of your password. Must be between 8 - 128"));
  // formula to check if its between 8 to 128
  if (length >= 8 || length <= 128) {
    break;
  }
  // Else, alert and loop back to choose a valid number
  alert("Password lenght must be between 8 to 128");
}

  // confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercase
  var uppercase
  var numeric
  var symbol


// WHEN I answer each prompt

// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
var password = generatePassword();
for (var i = 0; i <= Lenght; i++) {
  var randomNumber = Math.floor(Math.random() * characters.length);
  password += Characters.substring(randomNumber, randomNumber +1);
}

var passwordText = document.querySelector("#password");

passwordText.value = password;

console.log(writePassword)

// THEN the password is either displayed in an alert or written to the page

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

