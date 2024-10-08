/*---------- Variables (state) ---------*/
let hp = 100;
let gold = 50;
let xp = 0;
let currentWeaponIndex = 0;
let monsterIndex = 0;
let dragonDefeat = 0;

/*-------------- Constants -------------*/
const areaImage = document.getElementById("areaImage");
const hpText = document.getElementById("hpText");
const goldText = document.getElementById("goldText");
const xpText = document.getElementById("xpText");
const weaponNameText = document.getElementById("weaponNameText");
const weaponPowerText = document.getElementById("weaponPowerText");

const monsterDetails = document.getElementById("monsterDetails");
const monsterName = document.getElementById("monsterName");
const monsterHp = document.getElementById("monsterHp");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const text = document.getElementById("text");

const warning = document.getElementById("warning");

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const monsters = [
  {
    name: "Slime",
    level: 1,
    hp: 5,
  },
  {
    name: "Wolf",
    level: 5,
    hp: 20,
  },
  {
    name: "Goblin",
    level: 13,
    hp: 80,
  },
  {
    name: "Dragon",
    level: 50,
    hp: 200,
  },
  {
    name: "Golden Goose",
    level: 100,
    hp: 5000,
  },
];
const locations = [
  {
    //locations[0]
    name: "Town",
    buttonText: ["Shop", "Forest", "Dragon Den", "???"],
    text: "You are now standing at the town square. To your left is the store. Up ahead is the forest. To the right of the town, lies the fearsome Dragon you have heard from the whispers going around town.",
    text2:
      "Now that you have defeated the dragon, you can't help but wonder is there really only ONE dragon? Wait a minute....what's that??",
    image:
      "https://image.lexica.art/full_webp/a0ad1045-2e7c-44e9-afca-2cf952ae9448",
    alt: "girl standing in the entrance of a forest",
  },
  {
    //locations[1]
    name: "Shop",
    buttonText: ["Town", "Buy HP: 10 gold", "Buy Weapon", "WARNING: 10 gold"],
    text: "Ah, an adventurer! Come now, what can I do for you?",
    image:
      "https://image.lexica.art/full_webp/2cce2637-98ef-4e49-9682-aa352dbad992",
    alt: "shop front",
  },
  {
    //locations[2]
    name: "Forest",
    buttonText: ["Town", "Inner Forest", "Fight Slime"],
    text: "You have enter the Forest.\nThe view in front of you can only be describe as calm and serene. The way back to town is right behind you. Ahead lies the inner forest. Perhaps you can do some training here as Slimes are found abundantly here in the Forest",
  },
  {
    //locations[3]
    name: "Fight",
    buttonText: ["Attack", "Block", "Run"],
    text: "You have engage the monster.",

    // ; The ${monsters[monsterIndex].name}., // think of how to amend the text based on which monster I am attacking. The monsterIndex still not working for wolf. @@
  },
  {
    //locations[4]
    name: "Win",
    buttonText: ["Attack", "Block", "Run"],
    text: `You have engage the monster; The ${monsters[monsterIndex].name}.`, // think of how to amend the text based on which monster I am attacking
  },
  {
    //locations[5] - not in use
    name: "Golden Goose",
    buttonText: ["Attack", "Catch", "Dance"],
    text: `A new location appeared next to town. I mean, it's just there...Why not check it out right?\nA Golden Goose looks at you with disdain. You have no idea what to make of it. All you can think of, is having the goose Hong Kong roasted style! `,
  },
  {
    //locations[6]
    name: "Inner Forest",
    buttonText: ["Town", "Cave", "Fight Wolf"],
    text: "You have enter the Inner Forest. With trunks as huge as a house, and branches reaching way up into the sky. You can't help but be in awe at the sheer magnitude of the trees in this region.\nThe way back to town is through the forest behind you. Ahead lies a cave with a huge entrance. Your instincts tells you, you have to be stronger before proceeding further.",
  },
  {
    //locations[7]
    name: "Cave",
    buttonText: ["Town", "Inner Forest", "Fight Goblin"],
    text: "You have enter the Cave. The air in the cave feels moist and stuffy. You wonder what lies ahead.\nThe way back to town is through the forest behind you. Your senses tells you to leave while you still can.",
  },
  {
    //locations[8]
    name: "Dragon Den",
    buttonText: ["Town", "Fight Dragon", "NOT USED"],
    text: "You have enter the Dragon Den. The beast stares at you with it's petrifying eyes.\nThere is no need to risk your life for this.",
  },
  {
    //locations[9]
    name: "REPLAY",
    buttonText: ["Replay", "Replay", "Replay"],
    text: "You found yourself once more in familiar ground. How would you do things differently this time?",
  },
];

const weaponInventory = [];

const weapons = [
  { name: "Trusty Knuckles", power: 1000 },
  { name: "The Stick", power: 3, cost: 50 },
  { name: "Pocket Knife", power: 7, cost: 100 },
  { name: "Le Daggar", power: 15, cost: 200 },
  { name: "Big-Ass-Sword", power: 31, cost: 400 },
  { name: "Accupuncture Set", power: 66, cost: 1000 },
];

/*----- Cached Element References  -----*/
console.log("currentWeapon name:" + weapons[0].name); // why this cannot work
console.log(JSON.stringify(weapons[0])); // this can show?

/*-------------- Functions -------------*/
//CHECKS
console.log(locations[0].buttonText[0]);
console.log(locations[1].buttonText[0]);
console.log(monsterHp);
console.log(currentWeaponIndex);
console.log(weapons[currentWeaponIndex + 5].name);

const init = () => {
  //code to init the game
  console.log(`If initiation works, this text appears`);

  monsterDetails.style.display = "none";
  button1.innerText = locations[0].buttonText[0];
  button2.innerText = locations[0].buttonText[1];
  button3.innerText = locations[0].buttonText[2];

  button1.onclick = goShop;
  button2.onclick = goForest;
  button3.onclick = goDragon;
  render();

  hp = 1000;
  gold = 50;
  xp = 0;
  currentWeaponIndex = 0;
  weaponInventory.push(weapons[currentWeaponIndex]);
  console.log(weaponInventory); // check
  monsterIndex = 0;
  dragonDefeat = 0;

  hpText.innerText = hp;
  goldText.innerText = gold;
  xpText.innerText = xp;
  weaponNameText.innerText = weaponInventory[currentWeaponIndex].name;
  weaponPowerText.innerText = weaponInventory[currentWeaponIndex].power;
};

// is this needed?
const render = () => {
  //code to render
  warning.style.display = "none";
  button4.style.display = "none";
};

const isDragonDefeated = () => {
  monsterDetails.style.display = "none";
  button3.style.display = "block";
  button4.style.display = "block";
  console.log("dragonDefeat should be working");
  button1.innerText = locations[0].buttonText[0];
  button2.innerText = locations[0].buttonText[1];
  button3.innerText = locations[0].buttonText[2];
  button4.innerText = locations[0].buttonText[3];
  text.innerText = locations[0].text2;
  button1.onclick = goShop;
  button2.onclick = goForest;
  button3.onclick = goDragon;
  button4.onclick = goGoose; // when this cannot run, the game is correct
  warning.style.display = "none";
  areaImage.src = locations[0].image; // let's change the image!
  areaImage.alt = locations[0].alt;
};

const goShop = () => {
  //function on button when clicked to go shop
  button1.innerText = locations[1].buttonText[0];
  button2.innerText = locations[1].buttonText[1];
  button3.innerText =
    locations[1].buttonText[2] +
    `: ${weapons[currentWeaponIndex + 1].cost} gold`;
  button4.style.display = "block";
  button4.innerText = locations[1].buttonText[3];

  text.innerText = locations[1].text;
  button1.onclick = goTown;
  button2.onclick = buyHp;
  button3.onclick = buyWeapon;
  button4.onclick = goWarning;
  areaImage.src = locations[1].image;
  areaImage.alt = locations[1].alt;
};

const goTown = () => {
  //function on button when clicked to go town

  console.log(dragonDefeat);
  if (!dragonDefeat === 1) {
    monsterDetails.style.display = "none";
    button3.style.display = "block";
    button1.innerText = locations[0].buttonText[0];
    button2.innerText = locations[0].buttonText[1];
    button3.innerText = locations[0].buttonText[2];
    text.innerText = locations[0].text;
    button1.onclick = goShop;
    button2.onclick = goForest;
    button3.onclick = goDragon;
    areaImage.src = locations[0].image;
    areaImage.alt = locations[0].alt;
    render();
  } else {
    isDragonDefeated();
  }
};

const goForest = () => {
  //function on button when clicked to go forest
  button1.innerText = locations[2].buttonText[0];
  button2.innerText = locations[2].buttonText[1];
  button3.innerText = locations[2].buttonText[2];
  text.innerText = locations[2].text;
  button1.onclick = goTown;
  button2.onclick = goInnerForest;
  button3.onclick = fightSlime;
  button4.style.display = "none";
};

const goInnerForest = () => {
  //function on button when clicked to go inner forest
  monsterIndex = 1;
  console.log(monsters[monsterIndex].name);
  button1.innerText = locations[6].buttonText[0];
  button2.innerText = locations[6].buttonText[1];
  button3.innerText = locations[6].buttonText[2];
  text.innerText = locations[6].text;
  button1.onclick = goTown;
  button2.onclick = goCave;
  button3.onclick = fightWolf;
};

const goCave = () => {
  //function on button when clicked to go cave
  monsterIndex = 2;
  console.log(monsters[monsterIndex].name);
  button1.innerText = locations[7].buttonText[0];
  button2.innerText = locations[7].buttonText[1];
  button3.innerText = locations[7].buttonText[2];
  text.innerText = locations[7].text;
  button1.onclick = goTown;
  button2.onclick = goInnerForest;
  button3.onclick = fightGoblin;
};

const goDragon = () => {
  //function on button when clicked to go Dragon Den
  monsterIndex = 3;
  button3.style.display = "none";
  button4.style.display = "none";
  console.log(monsters[monsterIndex].name);
  button1.innerText = locations[8].buttonText[0];
  button2.innerText = locations[8].buttonText[1];
  button3.innerText = locations[8].buttonText[2];
  text.innerText = locations[8].text;
  button1.onclick = goTown;
  button2.onclick = fightDragon;
  button3.onclick = "";
};

const goGoose = () => {
  //function on button when clicked to go ???
  button1.innerText = locations[5].buttonText[0];
  button2.innerText = locations[5].buttonText[1];
  button3.innerText = locations[5].buttonText[2];
  text.innerText = locations[5].text;
  button1.onclick = fightGoose;
  button2.onclick = fightGoose;
  button3.onclick = fightGoose;
  button4.style.display = "none";
};

const goReplay = () => {
  //this function is to replay. same functions for winning or losing

  init();
  text.innerText = locations[9].text;
};

const fightIni = () => {
  button1.innerText = locations[3].buttonText[0];
  button2.innerText = locations[3].buttonText[1];
  button3.innerText = locations[3].buttonText[2];
  text.innerText = `${locations[3].text} \n`;

  monsterDetails.style.display = "block";
  monsterName.innerText = monsters[monsterIndex].name;
  monsterHp.innerText = monsters[monsterIndex].hp;

  button1.onclick = goAttack;
  button2.onclick = goBlock;
  button3.onclick = goTown;
};
const fightSlime = () => {
  monsterIndex = 0;
  fightIni();
  text.innerText += "The Slime smiles at you while bouncing on the spot.";

  /*
  const monster = [
    {
      name: "Slime",
      level: 1,
      hp: 5,
    },
  ];
*/
};

const fightWolf = () => {
  monsterIndex = 1;
  fightIni();
  text.innerText +=
    "The Wolf stares at you while bearing it's fangs menacingly.";

  /*
    const monster = [
      {
    name: "Wolf",
    level: 5,
    hp: 20,
  },
  */
};

const fightGoblin = () => {
  monsterIndex = 2;
  fightIni();
  text.innerText +=
    "'FEE FIA FOE FUM', says the Goblin in a cave-rumbling voice.";

  /*
    const monster = [
      {
    name: "Goblin",
    level: 13,
    hp: 50,
  },
  */
};

const fightDragon = () => {
  //function on button when clicked to go fight dragon
  monsterIndex = 3;
  fightIni();

  text.innerText +=
    "The Dragon stares at you, while arching it's body just like a cat, ready to pounce at you.";
  button3.style.display = "block";
  /*
  {
    name: "Dragon",
    level: 50,
    hp: 200,
  },
  */
};

const fightGoose = () => {
  monsterIndex = 4;
  fightIni();

  text.innerText +=
    "You can't stop drooling as you stare at the plump Golden Goose";
};

const goAttack = () => {
  //attack codes
  /* for easy ref
  const weapons = [
    { name: "trusty knuckles", power: 1 },
    { name: "The Stick", power: 5 },
  ];
  */

  // think simple first. how do you attack the slime?
  // next, how does the slime attack you?

  let currentMonsterHp = monsterHp.innerText;

  if (currentMonsterHp > 1) {
    // testing stats
    let humanAttack =
      Math.floor(Math.random() * xp) + weapons[currentWeaponIndex].power;
    currentMonsterHp -= humanAttack;

    // check for human damage
    console.log(`human damaged dealt: ${humanAttack}`);
    console.log(hp);
    monsterHp.innerText = currentMonsterHp;
    return isMonsterDefeated();
  } else {
    monsterDetails.style.display = "none";

    defeatMonster();
  }
};

const isPlayerDefeated = () => {
  if (hpText.innerText <= 0) {
    monsterDetails.style.display = "none";
    button1.innerText = locations[9].buttonText[0];
    button2.innerText = locations[9].buttonText[0];
    button3.innerText = locations[9].buttonText[0];
    text.innerText = `You have been defeated. Want to try again?`;
    button1.onclick = goReplay;
    button2.onclick = goReplay;
    button3.onclick = goReplay;
    console.log("isPlayerDefeated is running");
  }
};

const isMonsterDefeated = () => {
  if (monsterHp.innerText <= 0) {
    monsterDetails.style.display = "none";

    defeatMonster();
  } else {
    let monsterAttack =
      Math.floor(Math.random() * monsters[monsterIndex].level) +
      monsters[monsterIndex].level;
    hp -= monsterAttack; // how does the monster dmg me?
    hpText.innerText = hp;
    // check for monster damage
    console.log(`monster damaged dealt: ${monsterAttack}`);

    text.innerText = `You have attacked the monster with your ${
      weapons[currentWeaponIndex].name
    }, and dealt ${
      Math.floor(Math.random() * xp) + weapons[currentWeaponIndex].power
    } damage.\n
    The ${monsterName.innerText} hits you for ${monsterAttack} damage`;

    // check monster level
    console.log(`monster level: ${monsters[monsterIndex].level}`);

    // check monster hp
    console.log(`monsterHp = ${monsterHp.innerText}`);

    isPlayerDefeated();
  }
};

const defeatMonster = () => {
  gold += Math.floor(monsters[monsterIndex].level * 3);
  goldText.innerText = gold;

  xp += Math.floor(monsters[monsterIndex].level);
  xpText.innerText = xp;
  text.innerText = `You have defeated the ${monsters[monsterIndex].name}.
  Gold obtained: ${Math.floor(monsters[monsterIndex].level * 3)}
  XP obtained: ${Math.floor(monsters[monsterIndex].level)}`;

  checkLocations();
};

const checkLocations = () => {
  if (monsterIndex === 0) {
    button1.innerText = locations[2].buttonText[0];
    button2.innerText = locations[2].buttonText[1];
    button3.innerText = locations[2].buttonText[2];

    button1.onclick = goTown;
    button2.onclick = goInnerForest;
    button3.onclick = fightSlime;
  } else if (monsterIndex === 1) {
    button1.innerText = locations[6].buttonText[0];
    button2.innerText = locations[6].buttonText[1];
    button3.innerText = locations[6].buttonText[2];

    button1.onclick = goTown;
    button2.onclick = goCave;
    button3.onclick = fightWolf;
  } else if (monsterIndex === 2) {
    button1.innerText = locations[7].buttonText[0];
    button2.innerText = locations[7].buttonText[1];
    button3.innerText = locations[7].buttonText[2];

    button1.onclick = goTown;
    button2.onclick = goInnerForest;
    button3.onclick = fightGoblin;
  } else if (monsterIndex === 3) {
    button1.innerText = locations[1].buttonText[0];
    button2.innerText = locations[1].buttonText[0];
    button3.innerText = locations[1].buttonText[0];
    text.innerText = `You have defeated the ${monsters[monsterIndex].name}. The town is safe once again. But is that really it?`;
    button1.onclick = goTown;
    button2.onclick = goTown;
    button3.onclick = goTown;
    dragonDefeat = 1;
    console.log(dragonDefeat);
    // incomplete function
    // button4.style.display = "block";
  } else {
    button1.innerText = locations[9].buttonText[0];
    button2.innerText = locations[9].buttonText[0];
    button3.innerText = locations[9].buttonText[0];
    text.innerText = `You have defeated the ${monsters[monsterIndex].name}. The town is safe once again. This time, it really is done. Enjoy your roasted golden goose, Hong Kong Style!`;
    button1.onclick = goReplay;
    button2.onclick = goReplay;
    button3.onclick = goReplay;
    dragonDefeat = 1;
    // incomplete function
    // button4.style.display = "block";
  }
};

const goBlock = () => {
  //block codes
};

const buyHp = () => {
  //buy health
  warning.style.display = "none";
  if (gold >= 10) {
    gold -= 10;
    hp += 10;
    goldText.innerText = gold;
    hpText.innerText = hp;
    text.innerText = "Your body fills with vitality!";
  } else {
    text.innerText =
      '"Looks like you ran out of gold.", says the Shopkeeper, as he looks at you judgementally.';
  }
};

const buyWeapon = () => {
  //buy weapon
  /* 
  start simple. when button is clicked, buys weapon.
  weapon goes to array.
  */
  warning.style.display = "none";
  if (gold >= weapons[currentWeaponIndex + 1].cost) {
    gold -= weapons[currentWeaponIndex + 1].cost;
    goldText.innerText = gold;
    currentWeaponIndex++;

    if (currentWeaponIndex < 5) {
      console.log(currentWeaponIndex);
      button3.innerText =
        locations[1].buttonText[2] +
        `: ${weapons[currentWeaponIndex + 1].cost} gold`;
      weaponNameText.innerText = weapons[currentWeaponIndex].name;
      weaponPowerText.innerText = weapons[currentWeaponIndex].power;
      text.innerText = `You have purchased, and equipped a new weapon.\n"No refunds accepted for goods sold!", says the Shopkeeper.`;
    } else {
      button3.style.display = "none";
      weaponNameText.innerText = weapons[currentWeaponIndex].name;
      weaponPowerText.innerText = weapons[currentWeaponIndex].power;
      return (text.innerText = `You have purchased, and equipped a new weapon.\n"That's the last of it. No more weapons for you.", says the Shopkeeper.`);
    }
  } else {
    text.innerText = `"No touching! You break it, I break you!!"`;
  }
};

const goWarning = () => {
  // mini game for a chance to earn coins
  warning.style.display = "block";
  text.innerText = `"Fancy a game? Win, and I will give you 10 gold. Lose, and you owe me 10 gold! Tied? We play again, and winner takes all!"`;
};

let score = 0;
let computerChoice = "";
let playerChoice = "";
let goldPool = 0;

const choices = ["scissors", "paper", "stone"];
const scoreElement = document.querySelector("#score");

const printResult = (message) => {
  const results =
    `You chose ${playerChoice} and the computer chose ${computerChoice}. ` +
    message;

  text.innerText = results;
  scoreElement.innerText = "score " + score;
};

const compareChoices = () => {
  let message = "";

  if (playerChoice === computerChoice) {
    goldPool += 20;
    message = `You both tied. Gold pool is now ${goldPool}. Winner takes all!`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    message = "You won.";
    score++;
    gold += 20 + goldPool;
    goldText.innerText = gold;
    goldPool = 0;
  } else if (playerChoice === "paper" && computerChoice === "stone") {
    message = "You won.";
    score++;
    gold += 20 + goldPool;
    goldText.innerText = gold;
    goldPool = 0;
  } else if (playerChoice === "stone" && computerChoice === "scissors") {
    message = "You won.";
    score++;
    gold += 20 + goldPool;
    goldText.innerText = gold;
    goldPool = 0;
  } else {
    message = "You lost.";
    goldText.innerText = gold;
    goldPool = 0;
  }

  printResult(message);
};

const getComputerSelection = () => {
  const idx = Math.floor(Math.random() * choices.length);
  computerChoice = choices[idx];
};

const getButtonClick = (event) => {
  playerChoice = event.target.id;
};

const playGame = (event) => {
  getButtonClick(event);
  if (gold >= 10) {
    gold -= 10;
    goldText.innerText = gold;
    getComputerSelection();
    compareChoices();
  } else {
    text.innerText = '"Bah! Come back when you have more coins for me!"';
  }
};

init();
/*----------- Event Listeners ----------*/
document.querySelector("#buttons").addEventListener("click", playGame);

/*----------- PERSONAL NOTES ----------*/
/*
monster gold, monster attack -> will be randomise by math formula

warning.style.display = "none";
button4.style.display = "none";
*/
