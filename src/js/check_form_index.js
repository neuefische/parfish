import { users } from "./user_data.js";

const errorboxText = "Email bereits vorhanden!";

const body = document.querySelector("body");
const emailInput = document.querySelector("input[name=email]");
const passwordInput = document.querySelector("input[name=password]");
const submitButton = document.querySelector(
  ".register-form__go-fishing button"
);

// All function calls that are to be executed after the page has been loaded come into this function
const init = () => deactivateButton();

// functions are addet to the elements
emailInput.addEventListener("keyup", event => {
  checkEmailDuplicated(users, errorboxText);
});
passwordInput.addEventListener("keyup", event => {
  checkEmailDuplicated(users, errorboxText);
});

// function checked if the emailadress is in the users json file
const checkEmailDuplicated = (users, errorboxTest) => {
  checkButton();
  clearErrorbox();
  users.forEach(user => {
    if (user.email === event.target.value) createErrorbox(errorboxText);
  });
};

// errorbox, when the email is in the users json file
const createErrorbox = errorboxText => {
  const errorbox = document.createElement("div");
  errorbox.classList.add("errorbox");
  errorbox.textContent = errorboxText;
  emailInput.parentNode.appendChild(errorbox);
  deactivateButton();
};

// no duplicate email no errorbox
const clearErrorbox = () => {
  if (document.querySelector(".errorbox"))
    document.querySelector(".errorbox").remove();
};

// submitbutton disabled or not disabled
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

// Function call, immediately after loading the page
init();
