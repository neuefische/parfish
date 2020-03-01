import { users } from "./user_data.js";

const errorboxText = "Email bereits vorhanden!";

const body = document.querySelector("body");
const emailInput = document.querySelector("input[name=email]");
const passwordInput = document.querySelector("input[name=password]");
const submitButton = document.querySelector(
  ".register-form__go-fishing button"
);

const init = () => deactivateButton();

emailInput.addEventListener("keyup", event => {
  checkEmailDuplicated(users, errorboxText);
});
passwordInput.addEventListener("keyup", event => {
  checkEmailDuplicated(users, errorboxText);
});

const checkEmailDuplicated = (users, errorboxTest) => {
  checkButton();
  clearErrorbox();
  users.forEach(user => {
    if (user.email === event.target.value) createErrorbox(errorboxText);
  });
};

const createErrorbox = errorboxText => {
  const errorbox = document.createElement("div");
  errorbox.classList.add("errorbox");
  errorbox.textContent = errorboxText;
  emailInput.parentNode.appendChild(errorbox);
  deactivateButton();
};

const clearErrorbox = () => {
  if (document.querySelector(".errorbox"))
    document.querySelector(".errorbox").remove();
};

const checkButton = () =>
  emailInput.value === "" ||
  passwordInput.value === "" ||
  emailInput.validity.typeMismatch
    ? deactivateButton()
    : activateButton();

const deactivateButton = () => {
  submitButton.disabled = true;
  submitButton.classList.add("form___button__disabled");
};

const activateButton = () => {
  submitButton.classList.remove("form___button__disabled");
  submitButton.disabled = false;
};

init();
