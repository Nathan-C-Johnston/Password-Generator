//This section defines the passwordLength variable by connecting it to the range slider, and ensuring that it updates as the slider is moved.
var passwordLength = document.getElementById('passwordLengthRange');

passwordLength.addEventListener('input', updatePasswordLength);
document.addEventListener('submit', function(event){
    event.preventDefault();
 });

function updatePasswordLength(e) {
    const value = e.target.value;
    passwordLength.value = value;
};
//This section generates the password by making a string out of all checked character selections then psuedo randomly picking from that string a # of times based on the password length.
function generatePassword() {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+-=[]{},.<>/?";

  const includeLowercase = lowercaseCheckbox.checked;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeNumbers = numberCheckbox.checked;
  const includeSpecialCharacters = specialCharacterCheckbox.checked;

  let potentialCharacters = "";

  potentialCharacters += includeLowercase ? lowercaseLetters : "";
  potentialCharacters += includeUppercase ? uppercaseLetters : "";
  potentialCharacters += includeNumbers ? numbers : "";
  potentialCharacters += includeSpecialCharacters ? specialCharacters : "";
  
  if(potentialCharacters.length < 1) {
    alert("Please select at least one set of characters.");
  }

  let generatedPassword = "";

  for(var i = 0; i < passwordLength.value; i++) {
    generatedPassword += potentialCharacters.charAt(Math.floor(Math.random()*potentialCharacters.length));
  }

  return generatedPassword;
}
// This section connects the generated password to the display textbox.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.innerText = password;
}
// This section makes the generate button work.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

  