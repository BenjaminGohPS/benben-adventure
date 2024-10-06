/*-------------- Constants -------------*/
const areaImage = document.getElementById("areaImage");
const hpText = document.getElementById("hpText");
const goldText = document.getElementById("goldText");
const xpText = document.getElementById("xpText");

const monsterName = document.getElementById("monsterName");
const monsterHealth = document.getElementById("monsterHealth");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const text = document.getElementById("text");

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
    text: 'You have engage the monster.', // think of how to amend the text based on which monster I am attacking
  },
];

const monster = [
  {
    name: "Slime",
    level: 1,
    health: 5,
  },
];

const weapons = [
  { name: "trusty knuckles", power: 1 },
  { name: "The Stick", power: 5 },
];
/*---------- Variables (state) ---------*/
let hp = 100;
let gold = 50;
let xp = 0;
let currentWeapon = weapons[0];
console.log(weapons[0]);

/*----- Cached Element References  -----*/

/*-------------- Functions -------------*/
//CHECKS
console.log(locations[0].buttonText[0]);
console.log(locations[1].buttonText[0]);

const init = () => {
  //code to init the game
  console.log(`If initiation works, this text appears`);

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
};

const fightSlime = () => {
  //function on button when clicked to go store
  /* ref
  button1.innerText = locations[2].buttonText[0];
  button2.innerText = locations[2].buttonText[1];
  button3.innerText = locations[2].buttonText[2];
  text.innerText = locations[2].text;
  button1.onclick = goTown;
  button2.onclick = goInnerForest;
  button3.onclick = fightSlime;
  */

  button1.innerText = locations[3].buttonText[0];
  button2.innerText = locations[3].buttonText[1];
  button3.innerText = locations[3].buttonText[2];
  text.innerText = `${locations[3].text} \n The Slime smiles at you while bouncing on the spot`;

  button1.onclick = goAttack;
  button2.onclick = goBlock;
  button3.onclick = goTown;

  /*
  const monster = [
    {
      name: "Slime",
      level: 1,
      health: 5,
    },
  ];
*/
};

const fightDragon = () => {
  //function on button when clicked to go store
};

const goAttack = () => {
  //attack codes
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
