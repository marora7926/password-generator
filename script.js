// Assignment Code
var generateBtn = document.querySelector("#generate");

//define minimum and maximum length
goodlength: function(){
  if (this.length <8 && this.lenght>128){
    return false;
    }
  else {
    return true;
    } 
}

//define arrays
var lowercase = ['a', 'b', 'c', 'd',  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//special charaters from OWASP website
var special = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~']

//Prompt to choose ("prompt" command) the length for a password between 8 and 128 characters inclusive.
passwordLength: function() {
  this.length = prompt ("Your password length should be between 8 and 128 charaters inclusive");
}

//Prompt to choos ("confirm" command) lowercase charater/s for a password.
passwordLower: function(){
  this.lower = confirm ("Do you wish to have lowercase character/s in your password"); 
}

//Prompt to choose ("confirm" command) uppercase charater/s for a password.
passwordUpper: function(){
  this.upper = confirm ("Do you wish to have uppercase character/s in your password"); 
}

//Prompt to choose ("confirm" command) numeric charater/s for a password.
passwordNumber: function(){
  this.number = confirm ("Do you wish to have muneric character/s in your password"); 
}

//Prompt to choose ("confirm" command) special charater/s for a password.
passwordSpecial: function(){
  this.special = confirm ("Do you wish to have special character/s in your password"); 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
