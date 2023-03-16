import "./style.css";

const form = document.querySelector("form");
const email = document.getElementById("email");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const emailError = document.querySelector("#email + span.error");
const zipCodeError = document.querySelector("#zipCode + span.error");
const passwordError = document.querySelector("#password + span.error");
const confirmError = document.querySelector("#confirm + span.error");

function showEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}

function showZipCodeError() {
  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = "You need to enter a zip code.";
  } else {
    zipCodeError.textContent = "Entered value needs to be a valid zip code.";
  }
  zipCodeError.className = "error active";
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else {
    passwordError.textContent = "Password must be 8-12 characters and contain uppercase, lowercase, numbers, and specials characters.";
  }
  passwordError.className = "error active";
}

function showConfirmError() {
  if (confirm.validity.valueMissing) {
    confirmError.textContent = "You need to enter a confirm.";
  } else if (confirm.value !== password.value) {
    confirmError.textContent = "Confirm value does not match password.";
  } else {
    confirmError.textContent = "";
  }
  confirmError.className = "error active";
}

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    showEmailError();
  }
});

zipCode.addEventListener("input", (event) => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = ""; // Reset the content of the message
    zipCodeError.className = "error"; // Reset the visual state of the message
  } else {
    showZipCodeError();
  }
});

password.addEventListener("input", (event) => {
  if (password.validity.valid) {
    passwordError.textContent = ""; // Reset the content of the message
    passwordError.className = "error"; // Reset the visual state of the message
  } else {
    showPasswordError();
  }
});

confirm.addEventListener("input", (event) => {
  if (confirm.validity.valid) {
    confirmError.textContent = ""; // Reset the content of the message
    confirmError.className = "error"; // Reset the visual state of the message
  } else {
    showConfirmError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }
});
