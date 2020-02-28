import { users } from "./user_data.js";
import { createCard } from "./functions.js";

const mainContainer = document.querySelector(".swarm__main__container");

users.forEach(user => {
  mainContainer.appendChild(createCard(user));
});

//console.log(card);

//mainContainer.appendChild(card);
