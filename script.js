
function convertToUppercase() {
  var inputElement = document.getElementById("inputText");
  var inputValue = inputElement.value;
  var uppercaseValue = inputValue.toUpperCase();
  document.getElementById("convertedText").textContent = uppercaseValue;
}
