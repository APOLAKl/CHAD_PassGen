// Assignment Code
// generate button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ask for the password lenght first
  var passwordLength = prompt("What is the length of the password?");
  //must be atleast 8 upto 128 in lenght and will trigger a warning if it is not within the required input
  if(parseInt(passwordLength) <=7 || parseInt(passwordLength) >= 129) {
    alert("Invalid password length, Please choose between 8 upto 128! ❌")
    return "";
  }

  // text on dialog box asking if you want to include these variables to your password
  var includeLowercase = confirm("Do you want to include lowercase? 🔡");

  var includeUppercase = confirm("Do you want to include uppercase? 🔠");

  var includeSymbol = confirm("Do you want to include symbol? 🔣");

  var includeNumber = confirm("Do you want to include number? 🔢");

  // trigger warning that you must choose atlease one of the 4 variables arrays
  if(!includeLowercase && !includeUppercase && !includeSymbol && !includeNumber ) {
    alert("Please choose atleast one! ❌")
    return "";
  }

  // the 4 character sets for password generator
  var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbol = "!@#$%^&*()-_=+[]{};:'\"\\|,.<>/?";
  var number = "0123456789"

  // selectedSet having null value at start
  var selectedSet = "";

  // asks you to confirm if you want to add these 4 variables to your password
  if (includeLowercase === true) {
    selectedSet = selectedSet + lowercaseSet;
  }  // boolean

  if (includeUppercase === true) {
    selectedSet = selectedSet + uppercaseSet;
  }  // boolean

  if (includeSymbol === true) {
    selectedSet = selectedSet + symbol;
  }  // boolean

  if (includeNumber === true) {
    selectedSet = selectedSet + number;
  }  // boolean

    // trigger before giving generated password that one of the 4 variables is selected
    if(includeLowercase || includeUppercase || includeSymbol || includeNumber ) {
      alert("You have chosen atleast one of the variables, Here is your password!✔️");
    }

  // password having null value at start
  var password = "";

  // loop to generate random character based on chosen password lenght
  for(i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * selectedSet.length);
    var randomChar = selectedSet.charAt(randomNum);
    // password is null plus the generated password
    password = password + randomChar;
  }
  
  // returns the new pasword
  return password
}

// Writes the password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);
