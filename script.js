// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password rules
var masterPwd = {
    pwd1: "", //blank field
    length1: 0, //length when 0
    lowerCase1: false, // no lowercase charater
    upperCase1: false, //no uppercase character
    numericCh1: false, //no number charater
    specialCh1: false, // no special charater
    includeACh1: false, //does not include a charater from each of the above four

    //defining the arrays to be include in the new password
    lowerCase2: ['a', 'b', 'c', 'd',  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperCase2: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numericCh2: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    specialCh2: ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'], //special charaters from OWASP website
    chArray2: [],

    // PROMPTS and CONFIRM message
    // prompting user to add a number for the desired length of their password
    lengthPrompt: function(){
        masterPwd.length1 = window.prompt("write a number between 8 and 128 charaters (inclusive) for your password length"
        );
        if (this.validlength() === false) {
            alert("your password must have between 8 and 128 inclusive charaters");
            masterPwd.lengthPrompt();
        }
    },    
        
    // Defining password rules (#3); prompting/confirming the rules to be included and validating the user input
    validlength: function () {
        if (pwdRule1.length1 <8 || pwdRule1.length >128){
        return false;
        }
        else {
        return true;
        } 
    },
    
    lowerCasePrompt: function() {
        pwdRule1.lowerCase1 = window.confirm("Do you wish to have lowercase character/s in your password");
        if (masterPwd.lowerCase1 === true){
            masterPwd.chArray2 = masterPwd.chArray2.concat(masterPwd.lowerCase2) //this will add a lowercase charater to a blank field.
            masterPwd.includeACh1 === true;        
        }
    },
  
    upperCasePrompt: function () {
        masterPwd.upperCase1 = window.confirm("Do you wish to have uppercase character/s in your password");
        if (masterPwd.upperCase1 === true){
            masterPwd.pwd1 = masterPwd.chArray2.concat(masterPwd.upperCase2) //this will add a uppercase charater to a blank field.
            masterPwd.includeACh1 === true;
        }
    },
  
    numberChPrompt: function() {
        masterPwd.numericCh1 = window.confirm("Do you wish to have number character/s in your password");
        if (masterPwd.numericCh1 === true){
            masterPwd.pwd1 = masterPwd.chArray2.concat(masterPwd.numbericCh2) //this will add a number charater to a blank field.
            masterPwd.includeACh1 === true;
        }
    },

    specialChPrompt: function() {
        masterPwd.specialCh1 = window.confirm("Do you wish to have special character/s in your password");
        if (masterPwd.specialCh1 === true){
            masterPwd.pwd1 = masterPwd.chArray2.concat(masterPwd.specialCh2) //this will add a special charater to a blank field.
            masterPwd.includeACh1 === true;
        }
    },

    validPassword(),
    
    clearPassword()
}


// Defining password rules (#4); validating the password
pwdRule4: function{
    var lowerCase4 = false;
    if (pwdRule4.lowerCase4) {
        for (var i = 0; i < length; i++) {
            if (pwdRule2.lowerCase2.includes(pwdRule1.pwd1[i])) {
                lowerCase4 = true;
                break;
            }
        }
    }

    var upperCase4 = false;
    if (pwdRule4.upperCase4) {
        for (var i = 0; i < length; i++) {
            if (pwdRule2.upperCase2.includes(pwdRule1.pwd1[i])) {
                upperCase4 = true;
                break;
            }
        }
    }

    var numericCh4 = false;
    if (pwdRule4.numericCh4) {
        for (var i = 0; i < length; i++) {
            if (pwdRule2.numericCh2.includes(pwdRule1.pwd1[i])) {
                numericCh4 = true;
                break;
            }
        }
    }
    
    var specialCh4 = false;
    if (pwdRule4.specialCh4) {
        for (var i = 0; i < length; i++) {
            if (pwdRule2.specialCh2.includes(pwdRule1.pwd1[i])) {
                specialCh4 = true;
                break;
            }
        }
    }
}


// Defining password rules (#5); reseting the password
var pwdRule5 = {

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
