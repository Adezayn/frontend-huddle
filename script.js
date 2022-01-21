const email = document.querySelector(".input-email");
const formEl = document.getElementById("form");
const labelTarget = document.querySelector(".form-box-label");

const validateEmail = function (e) {
  let emailRegex =
    /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === "") {
    labelTarget.textContent = "Input your email address";
    e.preventDefault();
  } else if (!emailRegex.test(email.value)){
    labelTarget.textContent = "Check your email please";
    labelTarget.classList.add('alert');
    e.preventDefault();
  }else{
    labelTarget.textContent = "";
  }
};

formEl.addEventListener('submit', validateEmail);
