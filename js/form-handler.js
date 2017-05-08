console.log("I'm the form handler.");


//
// Capture user-email and send confirmation
function capture() {
  var emailValue;
  //stop form submit
  event.preventDefault();
  emailValue = document.customerEmail.email.value;
  document.customerEmail.email.value = "";
  console.log("Thanks for signing up for our mailing list: " + emailValue);
}
