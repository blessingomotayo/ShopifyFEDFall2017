  /**
By: Blessing Omotayo; blessing.omotayo@carleton.ca
**/
function determineBtnSubmitOutput() {
  var emailvar = getValueFromEmailInput();
  if(!emailvar) { // if the email input value is empty
    document.getElementById("submitButtonError").innerHTML = "There was an error with your email.";
  }
  return false;
}

function getValueFromEmailInput() {
  return document.getElementById("email").value;
}