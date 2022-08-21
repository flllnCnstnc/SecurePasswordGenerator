// Assignment Code


// Write password to the #password input
function writePassword() {
    var password = code();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Event listener
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)


function code() {
    var plength = parseInt(prompt('How many characters do you want in your password?'))
    // This 'if else' statment ensures that the chosen number of characters is within the allowed range
    if (plength < 8 || plength > 128 || isNaN(plength)) {
        return "Password must be more that 7 and less than 129"
    }
    var act1 = confirm("Would you like to use captital letters?")
    var act2 = confirm("Would you like to use numbers?")
    var act3 = confirm("Would you like to use lowercase letters?")
    var act4 = confirm("Would you like to use special characters?")
    var allowedCharacters = []

    if(!act1 && !act2 && !act3 && !act4){
        return "At least one must be chosen"
    }
    
    if (act1) {
        allowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (act2) {
        allowedCharacters += "0123456789"
    }

    if (act3) {
        allowedCharacters += "abcdefghijklmnopqrstuvwxyz"
    }

    if (act4) {
        allowedCharacters += "!@#$%^&*()-_"
    }
    



}
