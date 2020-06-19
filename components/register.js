let validation = () => {
  // the locatin of inputs in the form according to name attribute
  let password = document.forms["myForm"]["password"].value;
  let name = document.forms["myForm"]["name"].value;
  // the locatin of inputs in the form according to id attribute
  // for massages to the user
  let nameId = document.getElementById("user_massage");
  let passworId = document.getElementById("pass_massage");

  // user names
  let user1 = "pavel";
  let user2 = "kobi";
  // this condition checks the user name
  if (name.indexOf(user1) && name.indexOf(user2)) {
    nameId.innerHTML = "Wrong user name";

    document.myForm.name.focus();
    return false;
  } else {
    nameId.style.display = "none";
  }
  // this condition checks the password
  if (password !== "1234") {
    passworId.innerHTML = "Wrong password";

    document.myForm.name.focus();
    return false;
  } else {
    passworId.style.display = "none";
  }

  let cookie = () => {
    // checks which user is login and creates cookie with his name
    if (name === "pavel") {
      document.cookie = "Pavel";
    } else {
      document.cookie = "Kobi";
    }
  };

  cookie();
};
