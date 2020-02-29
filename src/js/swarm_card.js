import { age, userKey } from "./setup.js";
import { users } from "./user_data.js";
import { createCard } from "./functions.js";

const mainContainer = document.querySelector(".swarm__main__container");

/* 
4 steps to deliver the swarm cards on the swarm.html
Step 1: array function filter 
don't show fishes younger than 21, constante 'age' was set in setup.js
 
Step 2: array function sort 
sorting fishes, here young fishes first, constante 'userKey' was set in setup.js.
If you use a variable/constante for an object attribute you couldn't use the point syntax,
you must use square brackets => user1[userKey].

Step 3: array function map
map create a new array, in each item is a html code for the card

Step 4: array function forEach
The cards were hook into the maincontainer div
*/

users
  .filter(user => user.age >= age)
  .sort((user1, user2) => user1[userKey] - user2[userKey])
  .map(user => createCard(user))
  .forEach(card => mainContainer.appendChild(card));
