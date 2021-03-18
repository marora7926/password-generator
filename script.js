// Assignment Code
var generateBtn = document.querySelector("#generate");

//define arrays
var newPwd = {
  lowerCh1: ['a', 'b', 'c', 'd',  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCh1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numericCh1: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //special charaters from OWASP website
  specialCh1: ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'],
}
//verify the above arrays - self-check #1
console.log(newPwd)


// defining the properties of the current (baseline definition) password
var curPwd = {
  pwd0: "",
  length: 0,
  lowerCh0: false,
  upperCh0: false,
  numericCh0: false,
  specialCh0: false,
}
//verify the above steps - self-check #2
console.log(curPwd)

// Create new password by prompting (window.prompt command) or confirming (window.confirm command) different aspects of the new password.
var createPwd:{
  function() {
    curPwd.length = window.prompt("write a number between 8 and 128 charaters (inclusive) for your password length");
    if (curPwd.length <8 || curPwd.length >128){
    return false;
    }
    else {
    return true;
    } 
  }

  function() {
    curPwd.lowerCh0 = window.confirm("Do you wish to have lowercase character/s in your password");
  } 
  
  function() {
    curPwd.upperCh0 = window.confirm("Do you wish to have uppercase character/s in your password");
  }
  
  function() {
    curPwd.numericCh0 = window.confirm("Do you wish to have number character/s in your password");
  }

  function() {
    curPwd.specialCh0 = window.confirm("Do you wish to have special character/s in your password");
  }
};



//Prompt to choose ("prompt" command) the length for a password between 8 and 128 characters inclusive.
passwordLength: function() {
  this.length = prompt ("Your password length should be between 8 and 128 charaters inclusive");
}

//Prompt to choose ("confirm" command) lowercase charater/s for a password.
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

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
