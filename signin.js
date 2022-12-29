var form = document.querySelector("form");

form.addEventListener("submit", formSubmitted);

var userDataArr = JSON.parse(localStorage.getItem("account-data")) || [];

function formSubmitted(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#password").value;

  var userDataObj = {
    name: name,
    email: email,
    pass: pass,
  };

  userDataArr.push(userDataObj);

  localStorage.setItem("account-data", JSON.stringify(userDataArr));

  console.log(userDataArr);
}
