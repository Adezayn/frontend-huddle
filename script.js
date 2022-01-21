const email = document.querySelector(".input-email");
const formEl = document.getElementById("form");
const spanTarget = document.querySelector(".form-box-span");

const validateEmail = function (e) {
  let emailRegex =
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === "") {
    spanTarget.textContent = "Input your email address";
    e.preventDefault();
  } else if (!emailRegex.test(email.value)){
    spanTarget.textContent = "Check your email please";
    spanTarget.classList.add('alert');
    e.preventDefault();
  }else{
    spanTarget.textContent = "";
  }
};

formEl.addEventListener('submit', validateEmail);
