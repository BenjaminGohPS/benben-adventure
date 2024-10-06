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
    name: "Town",
    buttonText: ["Shop", "Forest", "Dragon"],
    // buttonFunction: [goShop, goForest, fightDragon],
    text: "You are now standing at the town square. To your left is the store. Up ahead is the forest. To the right of the town, lies the fearsome Dragon you have heard from the whispers going around town.",
  },
  {
    name: "Shop",
    buttonText: ["Buy Health", "Buy Weapon", "Town"],
    // buttonFunction: [buyHealth, buyWeapon, goTown],
    text: "Ah, an adventurer! Come now, what can I do for you?",
  },
];

const monster = [
  {
    name: "Slime",
    level: 1,
    health: 5,
  },
];

/*---------- Variables (state) ---------*/
let hp = 100;
let gold = 50;
let xp = 0;

/*----- Cached Element References  -----*/

/*-------------- Functions -------------*/
//CHECKS
console.log(locations[0].buttonText[0]);
console.log(locations[1].buttonText[0]);

const init = () => {
  //code to init the game
  console.log(`If initiation works, this text appears`);

  button1.onclick = goShop;
  button2.onclick = goForest;
  button3.onclick = fightDragon;

  button1.innerText = locations[0].buttonText[0];
  button2.innerText = locations[0].buttonText[1];
  button3.innerText = locations[0].buttonText[2];

  //   button2.onclick = goForest;
  //   button3.onclick = fightDragon;
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
  button3.onclick = goTown;
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
};

const fightDragon = () => {
  //function on button when clicked to go store
};

// const buyHealth = () => {
//   //buy health
// };

// const buyWeapon = () => {
//   //buy weapon
// };

init();

/*----------- Event Listeners ----------*/
//button1.addEventListener('click', goStore);

/*----------- PERSONAL NOTES ----------*/
/*
monster gold, monster attack -> will be randomise by math formula
*/
