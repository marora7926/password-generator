// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables in global scope
var pwd = "";
var length = 0;
var lowerCase = false;
var upperCase = false;
var numericCh = false;
var specialCh = false;
var includeACh = false;

//defining the arrays to be included in the new password
var lowerCaseArray = ['a', 'b', 'c', 'd',  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericChArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];
var anyCharacterArray = [""];

// variable if a charater is included
var includedLowerCase = false;
var includedUpperCase = false;
var includedNumericCh = false;
var includedSpecialCh = false;
var validPwd = false;

// PROMPTS and CONFIRM functions
// prompting user to add a number for the desired length of their password
function lengthPrompt() {
    this.length = prompt("write a number between 8 and 128 charaters (inclusive) for your password length");
    if (validLength() === false) {
        alert("your password must have between 8 and 128 charaters");
        this.lengthPrompt();
    }
};

// prompting user confirming for including a lower case in their password
function lowerCasePrompt() {
    this.lowerCase = confirm("Do you wish to have lowercase character/s in your password");
    if (this.lowerCase === true){
        this.anyCharacterArray = this.anyCharacterArray.concat(lowerCaseArray);
        this.includeACh = true;
    }
};

// prompting user confirming for including a upper case in their password
function upperCasePrompt () {
    this.upperCase = confirm("Do you wish to have uppercase character/s in your password");
    if (this.upperCase === true){
        this.anyCharacterArray = this.anyCharacterArray.concat(upperCaseArray); //this will add a uppercase character/s to a blank field.
        this.includeACh = true;
    }
};

// prompting user confirming for including a number in their password
function numericChPrompt() {
    this.numericCh = confirm("Do you wish to have number character/s in your password");
    if (this.numericCh === true){
        this.anyCharacterArray = this.anyCharacterArray.concat(this.numericChArray); //this will add a number character/s to a blank field.
        this.includeACh = true;
    }
};

// // prompting user confirming for including a special charater in their password
function specialChPrompt() {
    this.specialCh = confirm("Do you wish to have special character/s in your password");
    if (this.specialCh === true) {
        this.anyCharacterArray = this.anyCharacterArray.concat(specialChArray); //this will add a special character/s to a blank field.
        this.includeACh = true;
    }
};
    
// function for validating the password for each charater seperately
function validPassword () {
    // for lower case
    if (lowerCase) {
        for (var i = 0; i < length; i++) {
            if (lowerCaseArray.includes(pwd[i])) {
                includedLowerCase = true;
                break;
            }
        }
    }  
        
    // for upper case
    if (upperCase) {
        for (var i = 0; i < length; i++) {
            if (upperCaseArray.includes(pwd[i])) {
                includedUpperCase = true;
                break;
            }
        }
    }

    // for number character
    if (numericCh) {
        for (var i = 0; i < length; i++) {
            if (numericChArray.includes(pwd[i])) {
                includedNumericCh = true;
                break;
            }
        }
    }
        
    // for special character
    if (specialCh) {
        for (var i = 0; i < length; i++) {
            if (specialChArray.includes(pwd[i])) {
                includedSpecialCh = true;
                break;
            }
        }
    }
    
    // final validity check
    if (includedLowerCase === true && includedUpperCase === true && includedNumericCh === true && includedSpecialCh === true) {
        validPwd = true;
    } else {
            validPwd = false;
            pwd = "";
        }
}

// Generate password function
function generatePassword() {
    // Prompt for length,lowercase, uppercase, numeic charater/s and special character/
    lengthPrompt();
    console.log(includeACh) //verifying the step

    while (includeACh === false){
        lowerCasePrompt(); 
        console.log(includeACh) //verifying the step
        upperCasePrompt();
        console.log(includeACh) //verifying the step
        numericChPrompt(); 
        console.log(includeACh) //verifying the step
        specialChPrompt();
        console.log(includeACh) //verifying the step
    
        // alert in case if any of the charater selection critreia is not selected.
        if (includeACh === false) {
            alert("your password must have at least a lowercase, an uppercase, a number and a special character");
        }
    }

    // variable for creating a random password.
    var aNumber = 0;
    var aCharacter = "";

    // creating a password using the rnadom character
    while (validPwd === false) {
        for (var i = 0; i < length; i++) {
            aNumber = Math.floor(Math.random() * anyCharacterArray.length);
            aCharacter = anyCharacterArray[aNumber];
            pwd = pwd.concat(aCharacter);
        }
        validPassword();
    }
    // Return the new password to be written to the textArea
    return pwd;
};

// validating the length of the password
function validLength() {
    if (this.length < 8 || this.length > 128){
        return false;
    } 
    else {
        return true;
    } 
};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);