let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].required == true && inputs[i].type != "password") {
    inputs[i].addEventListener("input", check);
  }
}
function check (e) {
  console.log(e.target.value);
  if (e.target.value != "") {
    e.target.classList.add("confirmation");
  }
  else {
    e.target.classList.remove("confirmation");
  }
}

let password = document.querySelector("#password");
let confirmation = document.querySelector("#confirmation");
let create = document.querySelector("#create");
let form = document.querySelector("form")
form.addEventListener("submit", confirm);
function confirm (e) {
  if (password.value != confirmation.value) {
    e.preventDefault();
    setTimeout((() => {
      create.classList.add("shake");
      create.textContent = "Passwords must match";
      }), 0);

    setTimeout((() => {
      create.classList.remove("shake");
      create.textContent = "Create Account";
      }), 300);
    return false;
  }
  
  return true;
}