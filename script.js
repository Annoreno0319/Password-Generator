// Assignment code here
function ifYes(input) {
  return input && input.toLowerCase().trim() == 'yes';
}
var generateBtn = document.querySelector("#generate");

function getLength(){
  console.log("getting my password");
  // 
  var length = prompt("What password length would you like? Enter a length 8 - 128");
  console.log(length);
  if(length > 7 && length < 129){
    console.log("it's valid");
    return length;
  }
  return getLength()
}

function getUpperCase(characterSet){
  
  var userInput = prompt("Do you want uppercase letters in your password? Enter yes or no.");
  if (ifYes(userInputserInput)) {
   //how to join two strings!?
   characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }  
  //return my characters that the user wants in the password
  return characterSet;
}

function getLowerCase(characterSet){
  
  var userInput = prompt("Do you want lowercase letters in your password? Enter yes or no.");
  if (ifYes(userInputserInput)) {
   //how to join two strings!?
   characterSet += "abcdefghijklmnopqrstuvwxyz";
  }  
  //return my characters that the user wants in the password
  return characterSet;
}

function getNumbers(characterSet){
  
  var userInput = prompt("Do you want numbers in your password? Enter yes or no.");
  if (ifYes(userInputserInput)) {
   //how to join two strings!?
   characterSet += "1234567890";
  }  
  //return my characters that the user wants in the password
  return characterSet;
}
function getSpecial(characterSet){
  
  var userInput = prompt("Do you want Special Characters in your password? Enter yes or no.");
  if (ifYes(userInput)) {
   //how to join two strings!?
   characterSet += " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }  
  //return my characters that the user wants in the password
  return characterSet;
}




function generatePassword() {
  console.log ("It worked");
  var characterSet = "";

  var passwordLength = getLength();
  console.log(passwordLength);
  console.log("Just got my length above!");

  characterSet = getUpperCase(characterSet);
  characterSet = getLowerCase(characterSet);
  characterSet = getSpecial(characterSet);
  characterSet = getNumbers(characterSet);
  var pass = "";
  for (var i = 0; i < passwordLength; i++) {
    pass += characterSet[Math.random(characterSet.length)];
  }
  

  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);
