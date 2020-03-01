export const createCard = user => {
  const card = document.createElement("section");
  card.classList = "swarm__main__container__item";
  ////
  const avatarImage = document.createElement("img");
  avatarImage.src = `./assets/${user.avatar}`;
  avatarImage.alt = user.nickname;
  ////
  const nickname = document.createElement("h1");
  nickname.classList = "swarm__main__container__item__nickname";
  const nicknameText = document.createTextNode(user.nickname);
  nickname.appendChild(nicknameText);
  ////
  const profileContainer = document.createElement("div");
  profileContainer.classList = "swarm__main__container__item__profile";

  const profileBox1 = document.createElement("div");
  profileBox1.classList = "swarm__main__container__item__profile__box";
  const age = document.createElement("div");
  age.classList =
    "swarm__main__container__item__draught-age  swarm__main__container__item__data";
  const ageText = document.createTextNode(user.age);
  age.appendChild(ageText);

  const distance = document.createElement("div");
  distance.classList =
    "swarm__main__container__item__draught-distance  swarm__main__container__item__data";
  const distanceText = document.createTextNode(user.distance);
  distance.appendChild(distanceText);

  profileBox1.appendChild(age);
  profileBox1.appendChild(distance);

  //2. Box

  const profileBox2 = document.createElement("div");
  profileBox2.classList = "swarm__main__container__item__profile__box";
  const relationship = document.createElement("div");
  relationship.classList =
    "swarm__main__container__item__draught-relationship swarm__main__container__item__data";
  const relationshipText = document.createTextNode(user.relationship);
  relationship.appendChild(relationshipText);

  const bio = document.createElement("div");
  bio.classList =
    "swarm__main__container__item__draught-bio  swarm__main__container__item__data";
  const bioText = document.createTextNode(user.biography);
  bio.appendChild(bioText);

  profileBox2.appendChild(relationship);
  profileBox2.appendChild(bio);

  profileContainer.appendChild(profileBox1);
  profileContainer.appendChild(profileBox2);

  ////

  const buttonBox = document.createElement("div");
  buttonBox.classList = "swarm__main__container__item__button-box";

  const noBtn = document.createElement("button");
  noBtn.classList =
    "swarm__main__container__item__button swarm__main__container__item__button-no";

  const noImg = document.createElement("img");
  noImg.src = `./assets/fish-bone_x.png`;
  noImg.alt = "No match button";

  noBtn.appendChild(noImg);
  buttonBox.appendChild(noBtn);

  //

  const yesBtn = document.createElement("button");
  yesBtn.classList =
    "swarm__main__container__item__button swarm__main__container__item__button-yes";

  const yesImg = document.createElement("img");
  yesImg.src = `./assets/match-fish.svg`;
  yesImg.alt = "Match button";

  yesBtn.appendChild(yesImg);
  buttonBox.appendChild(yesBtn);

  ////
  card.appendChild(avatarImage);
  card.appendChild(nickname);
  card.appendChild(profileContainer);
  card.appendChild(buttonBox);

  return card;

  ////
};
