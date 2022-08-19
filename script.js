// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generateBtn();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event listener
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function() {
    prompt('How many characters do you want in your password?')
    
})