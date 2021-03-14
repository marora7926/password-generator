// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Prompting for length for a password between 8 and 128 characters inclusive.
passwordLength: function() {
  this.length = prompt ("Your password length should be between 8 and 128 charaters inclusive");
}

//Prompting for inclusion of a lowercase charater/s for a password.
passwordLower: function(){
  this.lower = confirm ("Your password should have lowercase character/s"); 
}

//Prompting for inclusion of an uppercase charater/s for a password.
passwordUpper: function(){
  this.upper = confirm ("Your password should have uppercase character/s"); 
}

//Prompting for inclusion of a numeric charater/s for a password.
passwordNumber: function(){
  this.number = confirm ("Your password should have numberic character/s"); 
}

//Prompting for inclusion of special charater/s for a password.
passwordSpecial: function(){
  this.special = confirm ("Your password should have an uppercase character"); 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
