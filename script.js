// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defining password rules (#1); defining the properties of the baseline password for setting rules
var pwdRule1 = {
  pwd1: "", //blank field
  length1: 0, //length when 0
  lowerCh1: false, // no lowercase charater
  upperCh1: false, //no uppercase character
  numericCh1: false, //no number charater
  specialCh1: false, // no special charater
  includeACh1: false, //does not include a charater from each of the above four
}
//verify the above steps - self-check #1
console.log(pwdRule1)

// Defining password rules (#2); defining the arrays to be include in the new password
var pwdRule2 = {
  lowerCh2: ['a', 'b', 'c', 'd',  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCh2: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numericCh2: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  specialCh2: ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'], //special charaters from OWASP website

}
//verify the above arrays - self-check #2
console.log(pwdRule2)


// Defining password rules (#3); prompting/confirming the rules to be included and validating the user input
var pwdRule3 = {
    length3: function () {
    pwdRule1.length1 = window.prompt("write a number between 8 and 128 charaters (inclusive) for your password length");
    if (pwdRule1.length1 <8 || pwdRule1.length >128){
        return false;
        }
    else {
        return true;
        } 
    },

    lowerCh3: function() {
        pwdRule1.lowerCh1 = window.confirm("Do you wish to have lowercase character/s in your password");
        if (pwdRule1.lowerCh1 === true){
            pwdRule1.pwd1 = pwdRule1.pwd1.concat(pwdRule2.lowerCh2) //this will add a value to a blank field.
        }
    },
  
    upperCh3: function () {
        pwdRule1.upperCh1 = window.confirm("Do you wish to have uppercase character/s in your password");
        if (pwdRule1.upperCh1 === true){
            pwdRule1.pwd1 = pwdRule1.pwd1.concat(pwdRule2.upperCh2) //this will add a value to a blank field.
        }
    },
  
    numberCh3: function() {
        pwdRule1.numericCh1 = window.confirm("Do you wish to have number character/s in your password");
        if (pwdRule1.numeric1 === true){
            pwdRule1.pwd1 = pwdRule1.pwd1.concat(pwdRule2.numbericCh2) //this will add a value to a blank field.
        }
    },

    specialCh3: function() {
        pwdRule1.specialCh1 = window.confirm("Do you wish to have special character/s in your password");
        if (pwdRule1.specialCh1 === true){
            pwdRule1.pwd1 = pwdRule1.pwd1.concat(pwdRule2.specialCh2) //this will add a value to a blank field.
        }
    },
}

// Generate password function
function generatePassword() {
// Declare variables for a number that is random and any type of charater
  var aNumber = 0;
  var aCharacter = '';

  // Prompt for length of password, length is checked and validated or prompted again
  Password.length3();

  if (pwdRule1.includeACh === false) {
      pwdRule3.lowerCh3();
      pwdRule3.upperCh3();
      pwdRule3.numericCh3();
      pwdRule3.specialCh3(); {
          alert("your password must have at least a lowercase, an uppercase, a number and a special character");
        } 
    } 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
