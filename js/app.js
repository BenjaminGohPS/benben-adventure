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
  },
  {
    name: "Shop",
    buttonText: ["Shop", "Forest", "Dragon"],
    // buttonFunction: [goShop, goForest, fightDragon],
  },
];

const monster = [
  {
    name: "Slime",
    health: 5,
    attack: 1,
    gold: 7,
  },
];

/*---------- Variables (state) ---------*/
let hp = 100;
let gold = 50;
let xp = 0;

/*----- Cached Element References  -----*/

/*-------------- Functions -------------*/

console.log(locations[0].buttonText[0]);

const init = () => {
  //code to init the game
  //   button1.onclick = goShop;
  //   button2.onclick = goForest;
  //   button3.onclick = fightDragon;

  button1.innerText = locations[0].buttonText[0];
  console.log(locations[0].buttonText[0]);
  button2.innerText = locations[0].buttonText[1];
  button3.innerText = locations[0].buttonText[2];
};

const render = () => {
  //code to render
};

// const goShop = () = {
//     //function on button when clicked to go shop
// };

// const goForest = () = {
//     //function on button when clicked to go forest
// };

// const fightDragon = () = {
//     //function on button when clicked to go store
// };

init();
/*----------- Event Listeners ----------*/
//button1.addEventListener('click', goStore);
