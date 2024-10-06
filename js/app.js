/*---------- Variables (state) ---------*/
let hp = 100;
let gold = 50;
let xp = 0;
let currentWeaponIndex = [0];
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
];
const locations = [
  {
    //location[0]
    name: "Town",
    buttonText: ["Shop", "Forest", "Dragon"],
    // buttonFunction: [goShop, goForest, fightDragon],
    text: "You are now standing at the town square. To your left is the store. Up ahead is the forest. To the right of the town, lies the fearsome Dragon you have heard from the whispers going around town.",
  },
  {
    //location[1]
    name: "Shop",
    buttonText: ["Town", "Buy HP", "Buy Weapon"],
    // buttonFunction: [goTown, buyHp, buyWeapon, ],
    text: "Ah, an adventurer! Come now, what can I do for you?",
  },
  {
    //location[2]
    name: "Forest",
    buttonText: ["Town", "Inner Forest", "Fight Slime"],
    text: "You have enter the Forest. The view in front of you can only be describe as calm and serene. The way back to town is right behind you. Ahead lies the inner forest. Perhaps you can do some training here as Slimes are found abundantly here in the Forest",
  },
  {
    //location[3]
    name: "Fight",
    buttonText: ["Attack", "Block", "Run"],
    text: `You have engage the monster.; The ${monsters[monsterIndex].name}.`, // think of how to amend the text based on which monster I am attacking. The monsterIndex still not working for wolf. @@
  },
  {
    //location[4]
    name: "Win",
    buttonText: ["Attack", "Block", "Run"],
    text: `You have engage the monster; The ${monsters[monsterIndex].name}.`, // think of how to amend the text based on which monster I am attacking
  },
  {
    //location[5] - Haven't amend it yet
    name: "Lose",
    buttonText: ["Attack", "Block", "Run"],
    text: `You have engage the monster; The ${monsters[monsterIndex].name}.`,
  },
  {
    //location[6]
    name: "Inner Forest",
    buttonText: ["Town", "Cave", "Fight Wolf"],
    text: "You have enter the Inner Forest. With trunks as huge as a house, and branches reaching way up into the sky. You can't help but be in awe at the sheer magnitude of the trees in this region.\nThe way back to town is through the forest behind you. Ahead lies a cave with a huge entrance. Your instincts tells you, you have to be stronger before proceeding further.",
  },
];

const weapons = [
  { name: "trusty knuckles", power: 1 },
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
  button3.onclick = fightDragon;
};

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
};

const goTown = () => {
  //function on button when clicked to go town
  monsterDetails.style.display = "none";
  button1.innerText = locations[0].buttonText[0];
  button2.innerText = locations[0].buttonText[1];
  button3.innerText = locations[0].buttonText[2];
  text.innerText = locations[0].text;
  button1.onclick = goShop;
  button2.onclick = goForest;
  button3.onclick = fightDragon;
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
};

const fightSlime = () => {
  monsterIndex = 0;
  button1.innerText = locations[3].buttonText[0];
  button2.innerText = locations[3].buttonText[1];
  button3.innerText = locations[3].buttonText[2];
  text.innerText = `${locations[3].text} \n The Slime smiles at you while bouncing on the spot`;

  monsterDetails.style.display = "block";
  monsterName.innerText = monsters[monsterIndex].name;
  monsterHp.innerText = monsters[monsterIndex].hp;

  button1.onclick = goAttack;
  button2.onclick = goBlock;
  button3.onclick = goTown;

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

  button1.innerText = locations[3].buttonText[0];
  button2.innerText = locations[3].buttonText[1];
  button3.innerText = locations[3].buttonText[2];
  text.innerText = `${locations[3].text} \n The Wolf stares at you while bearing it's fangs menacingly`;

  monsterDetails.style.display = "block";
  monsterName.innerText = monsters[monsterIndex].name;
  monsterHp.innerText = monsters[monsterIndex].hp;

  button1.onclick = goAttack;
  button2.onclick = goBlock;
  button3.onclick = goTown;

  /*
    const monster = [
      {
    name: "Wolf",
    level: 5,
    hp: 20,
  },
  */
};

const fightDragon = () => {
  //function on button when clicked to go store
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
  let currentMonsterHp = monsterHp.innerText;
  let currentHp = hpText.innerText;

  if (monsterHp.innerText > 1) {
    // testing stats
    currentMonsterHp -= Math.floor(Math.random() * xp) + 1;

    // check for damage
    console.log(`damaged dealt: ${Math.floor(Math.random() * xp) + 1}`);

    monsterHp.innerText = currentMonsterHp;
    currentHp -= monsters[0].level;
    hp.innerText = currentHp;
    text.innerText = "You have attacked the monster";

    // check monster hp
    console.log(`monsterHp = ${currentMonsterHp}`);
  } else {
    monsterDetails.style.display = "none";

    defeatMonster();
  }
  //   if (monsterHp.innerText > 0) {
  //     monsterHp -= 1;
  //     monsterHp.innerText = monsterHp;
  //     text.innerText = "You have attacked the monster";
  //   } else {
  //     monsterDetails.style.display = "none";
  //     text.innerText = "You have defeated the monster";
  //   }
};

const defeatMonster = () => {
  gold += Math.floor(monsters[monsterIndex].level * 7);
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
