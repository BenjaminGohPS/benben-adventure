/*---------- Variables (state) ---------*/
let hp = 100;
let gold = 50;
let xp = 0;
let currentWeaponIndex = 0;
let monsterIndex = 0;

/*-------------- Constants -------------*/
const areaImage = document.getElementById("areaImage");
const hpText = document.getElementById("hpText");
const goldText = document.getElementById("goldText");
const xpText = document.getElementById("xpText");

const monsterDetails = document.getElementById("monsterDetails");
const monsterName = document.getElementById("monsterName");
const monsterHp = document.getElementById("monsterHp");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const text = document.getElementById("text");

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
    buttonText: ["Shop", "Forest", "Dragon Den"],
    // buttonFunction: [goShop, goForest, fightDragon],
    text: "You are now standing at the town square. To your left is the store. Up ahead is the forest. To the right of the town, lies the fearsome Dragon you have heard from the whispers going around town.",
    image:
      "https://image.lexica.art/full_webp/a0ad1045-2e7c-44e9-afca-2cf952ae9448",
    alt: "girl standing in the entrance of a forest",
  },
  {
    //locations[1]
    name: "Shop",
    buttonText: ["Town", "Buy HP", "Buy Weapon"],
    // buttonFunction: [goTown, buyHp, buyWeapon, ],
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
    //locations[5] - Haven't amend it yet
    name: "Lose",
    buttonText: ["Attack", "Block", "Run"],
    text: `You have engage the monster; The ${monsters[monsterIndex].name}.`,
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
];

const weapons = [
  { name: "trusty knuckles", power: 100 },
  { name: "The Stick", power: 5 },
];

/*----- Cached Element References  -----*/
console.log("currentWeaponIndex:" + weapons[0]); // why this cannot work
console.log(weapons[0]); // this can show?

/*-------------- Functions -------------*/
//CHECKS
console.log(locations[0].buttonText[0]);
console.log(locations[1].buttonText[0]);
console.log(monsterHp);

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
  button4.style.display = "none";
};

// is this needed?
const render = () => {
  //code to render
};

const goShop = () => {
  //function on button when clicked to go shop
  button1.innerText = locations[1].buttonText[0];
  button2.innerText = locations[1].buttonText[1];
  button3.innerText = locations[1].buttonText[2];
  text.innerText = locations[1].text;
  button1.onclick = goTown;
  button2.onclick = buyHp;
  button3.onclick = buyWeapon;
  areaImage.src = locations[1].image;
  areaImage.alt = locations[1].alt;
};

const goTown = () => {
  //function on button when clicked to go town
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
  console.log(monsters[monsterIndex].name);
  button1.innerText = locations[8].buttonText[0];
  button2.innerText = locations[8].buttonText[1];
  button3.innerText = locations[8].buttonText[2];
  text.innerText = locations[8].text;
  button1.onclick = goTown;
  button2.onclick = fightDragon;
  button3.onclick = "";
};

const goReplay = () => {
  //this function is to replay. same functions for winning or losing
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
  text.innerText += "The Slime smiles at you while bouncing on the spot";

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
    "The Wolf stares at you while bearing it's fangs menacingly";

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
    "The Dragon stares at you, while arching it's body just like a cat, ready to pounce at you";
  button3.style.display = "block";
  /*
  {
    name: "Dragon",
    level: 50,
    hp: 200,
  },
  */
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

    monsterHp.innerText = currentMonsterHp;
    return isMonsterDefeated();
  } else {
    monsterDetails.style.display = "none";

    defeatMonster();
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

    // check for monster damage
    console.log(`monster damaged dealt: ${monsterAttack}`);

    hpText.innerText = hp;
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
    // } else if (currentMonsterHp === 0) {
    //   monsterDetails.style.display = "none";

    //   defeatMonster();
  }
};

const defeatMonster = () => {
  gold += Math.floor(monsters[monsterIndex].level * 3);
  goldText.innerText = gold;

  xp += Math.floor(monsters[monsterIndex].level);
  xpText.innerText = xp;

  checkLocation();
};

const checkLocation = () => {
  if (monsterIndex === 0) {
    button1.innerText = locations[2].buttonText[0];
    button2.innerText = locations[2].buttonText[1];
    button3.innerText = locations[2].buttonText[2];
    text.innerText = `You have defeated the ${monsters[monsterIndex].name}`;
    button1.onclick = goTown;
    button2.onclick = goInnerForest;
    button3.onclick = fightSlime;
  } else if (monsterIndex === 1) {
    button1.innerText = locations[6].buttonText[0];
    button2.innerText = locations[6].buttonText[1];
    button3.innerText = locations[6].buttonText[2];
    text.innerText = `You have defeated the ${monsters[monsterIndex].name}`;
    button1.onclick = goTown;
    button2.onclick = goCave;
    button3.onclick = fightWolf;
  } else if (monsterIndex === 2) {
    button1.innerText = locations[7].buttonText[0];
    button2.innerText = locations[7].buttonText[1];
    button3.innerText = locations[7].buttonText[2];
    text.innerText = `You have defeated the ${monsters[monsterIndex].name}`;
    button1.onclick = goTown;
    button2.onclick = goInnerForest;
    button3.onclick = fightGoblin;
  } else if (monsterIndex === 3) {
    button1.innerText = locations[8].buttonText[0];
    button2.innerText = locations[8].buttonText[0];
    button3.innerText = locations[8].buttonText[0];
    text.innerText = `You have defeated the ${monsters[monsterIndex].name}`;
    button1.onclick = goReplay;
    button2.onclick = goReplay;
    button3.onclick = goReplay;
    // incomplete function
    button4.style.display = "block";
  }
};

const goBlock = () => {
  //block codes
};

const buyHp = () => {
  //buy health
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
};

init();

/*----------- Event Listeners ----------*/
//button1.addEventListener('click', goStore);

/*----------- PERSONAL NOTES ----------*/
/*
monster gold, monster attack -> will be randomise by math formula
*/
