export const createCard = user => {
  const card = createSection(user);
  const avatarImage = createAvatarImage(user);
  const nickname = createNickname(user);

  const profileContainer = createProfilContainer(user);
  const profilBox1 = createProfileBox(user.age, user.distance + " km");
  const profilBox2 = createProfileBox(user.relationship, user.biography);
  profileContainer.appendChild(profilBox1);
  profileContainer.appendChild(profilBox2);

  const buttonBox = createButtonBox(user);
  const buttonNo = createButtonNo(user);
  const buttonYes = createButtonYes(user);
  buttonBox.appendChild(buttonNo);
  buttonBox.appendChild(buttonYes);

  card.appendChild(avatarImage);
  card.appendChild(nickname);
  card.appendChild(profileContainer);
  card.appendChild(buttonBox);

  return card;

  ////
};

const createSection = user => {
  const card = document.createElement("section");
  card.classList = "swarm__main__container__item";
  return card;
};

const createAvatarImage = user => {
  const avatarImage = document.createElement("img");
  avatarImage.src = `./assets/${user.avatar}`;
  avatarImage.alt = user.nickname;
  return avatarImage;
};

const createNickname = user => {
  const nickname = document.createElement("h1");
  nickname.classList = "swarm__main__container__item__nickname";
  const nicknameText = document.createTextNode(user.nickname);
  nickname.appendChild(nicknameText);
  return nickname;
};

const createProfilContainer = user => {
  const profileContainer = document.createElement("div");
  profileContainer.classList = "swarm__main__container__item__profile";
  return profileContainer;
};

const createProfileBox = (text1, text2) => {
  const profileContainer = document.createElement("div");
  profileContainer.classList = "swarm__main__container__item__profile";

  const profileBox = document.createElement("div");
  profileBox.classList = "swarm__main__container__item__profile__box";
  const div1 = document.createElement("div");
  div1.classList =
    "swarm__main__container__item__draught-age  swarm__main__container__item__data";
  const div1Text = document.createTextNode(text1);
  div1.appendChild(div1Text);

  const div2 = document.createElement("div");
  div2.classList =
    "swarm__main__container__item__draught-distance  swarm__main__container__item__data";
  const div2Text = document.createTextNode(text2);
  div2.appendChild(div2Text);
  profileBox.appendChild(div1);
  profileBox.appendChild(div2);
  return profileBox;
};

const createButtonBox = user => {
  const buttonBox = document.createElement("div");
  buttonBox.classList = "swarm__main__container__item__button-box";
  return buttonBox;
};

const createButtonNo = user => {
  const noBtn = document.createElement("button");
  noBtn.classList =
    "swarm__main__container__item__button swarm__main__container__item__button-no";

  const noImg = document.createElement("img");
  noImg.src = `./assets/fish-bone_x.png`;
  noImg.alt = "No match button";

  noBtn.appendChild(noImg);
  return noBtn;
};

const createButtonYes = user => {
  const yesBtn = document.createElement("button");
  yesBtn.classList =
    "swarm__main__container__item__button swarm__main__container__item__button-yes";

  const yesImg = document.createElement("img");
  yesImg.src = `./assets/match-fish.svg`;
  yesImg.alt = "Match button";

  yesBtn.appendChild(yesImg);
  return yesBtn;
};
