import { users } from "./user_data.js";
import { createCard } from "./functions.js";

const mainContainer = document.querySelector(".swarm__main__container");

// no fishes younger than 21
const age = 21;
let usersFilter = users.filter(user => user.age >= age);
// young fishes first
let usersSort = usersFilter.sort((user1, user2) => user1.age - user2.age);
// create HTML code and hook it into the maincontainer div
usersSort
  .map(user => createCard(user))
  .forEach(card => mainContainer.appendChild(card));
