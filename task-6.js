const validationInput = document.querySelector("#validation-input");

function inputFocusChange() {
  if (validationInput.value.length < validationInput.dataset.length) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
validationInput.addEventListener("blur", inputFocusChange);
