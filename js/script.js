let validation = () => {
  // the locatin of inputs in the form according to name attribute
  let password = document.forms["myForm"]["password"].value;
  let name = document.forms["myForm"]["name"].value;
  // the locatin of inputs in the form according to id attribute
  let nameId = document.getElementById("user_massage");
  let passworId = document.getElementById("pass_massage");

  if (name !== "abcd") {
    nameId.innerHTML = "Wrong user name";

    document.myForm.name.focus();
    return false;
  } else {
    nameId.style.display = "none";
  }

  if (password !== "1234") {
    passworId.innerHTML = "Wrong password";

    document.myForm.name.focus();
    return false;
  } else {
    passworId.style.display = "none";
  }
};
