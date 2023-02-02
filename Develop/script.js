// Assignment Code
// generate button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var passwordLength = prompt("What is the length of the password?");

  if(parseInt(passwordLength) <=8 || parseInt(passwordLength) >= 128) {
    alert("Invalid password length!")
    return "";
  }

  var includeLowercase = confirm("Do you want to include lowercase?"); // boolean

  var includeUppercase = confirm("Do you want to include uppercase?"); // boolean

  var includeSymbol = confirm("Do you want to include symbol?"); // boolean

  var includeNumber = confirm("Do you want to include number?"); // boolean


  if(!includeLowercase && !includeUppercase && !includeSymbol && !includeNumber ) {
    alert("You must choose atleast one!")
    return "";
  }

  // character set for password generator
  var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbol = "!@#$%^&*()-_=+[]{};:'\"\\|,.<>/?";
  var number = "0123456789"


  var selectedSet = "";

  if (includeLowercase === true) {
    selectedSet = selectedSet + lowercaseSet;
  }

  if (includeUppercase === true) {
    selectedSet = selectedSet + uppercaseSet;
  }

  if (includeSymbol === true) {
    selectedSet = selectedSet + symbol;
  }

  if (includeNumber === true) {
    selectedSet = selectedSet + number;
  }

  console.log(selectedSet);

  var password = "";

  for(i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * selectedSet.length);
    var randomChar = selectedSet.charAt(randomNum);
  
    password = password + randomChar;
  }
  



  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
