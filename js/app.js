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
const godMode = document.getElementById("godMode");

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
    image:
      "https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=1024,f=jpeg,q=85/posts/images/613920095827259840/26f82663-388c-48f9-87f9-52b89cfda399.jpg",
    alt: "green slime",
  },
  {
    name: "Wolf",
    level: 5,
    hp: 20,
    image:
      "https://image.lexica.art/full_webp/d6a82bfa-9afe-432d-9399-fd7cd9f0e734",
    alt: "menancing wolf with the full moon in the background",
  },
  {
    name: "Goblin",
    level: 13,
    hp: 80,
    image:
      "https://image.lexica.art/full_webp/2e7cd441-1412-4722-adc7-d323e555b916",
    alt: "fierce goblin",
  },
  {
    name: "Dragon",
    level: 50,
    hp: 200,
    image:
      "https://image.lexica.art/full_webp/a3373ad9-d757-4c2e-82dc-3f90a2279097",
    alt: "portrait of a of a blue-scaled dragon with a golden shimmer",
  },
  {
    name: "Golden Goose",
    level: 100,
    hp: 5000,
    image:
      "https://image.lexica.art/full_webp/3e045ced-7849-4ef5-a329-84414f997c52",
    alt: "golden goose flying",
  },
];
const locations = [
  {
    //locations[0]
    name: "Town",
    buttonText: ["Shop", "Forest", "Dragon Den", "???"],
    text: `You are now standing at the town square. To your left is the store. Up ahead is the forest. To the right of the town, lies the Den where the fearsome Dragon reside.\n
    You heard of how the health of the townsfolks have suffered ever since the dragon appeared, and causing the surrounding monsters to be agressive towards any who transpasses. Granny Emma greets you warmly, before breaking into a series of cough and wheezing. Bless the soul of Granny Emma. `,
    text2: `The town square is bustling with people. You recognised Granny Emma, who always greets you when you returned to town from your adventures, walking towards you.\n
      Granny Emma grabs you on your arm, and with a wide smile on her face, lets you know that the persistent cough she had, is no longer bothering her.\nShe gestured to the crowd in front of the store, and said that many of the townfolks' condition have alivated. However, Granny Emma mentioned that I should still be cautious when entering the Forest and beyond.\n
      Now that you have defeated the dragon, you can't help but wonder is there really only ONE dragon? Wait a minute....what's that??`,
    image:
      "https://image.lexica.art/full_webp/13925c76-0410-411f-9307-b961b0347d95",
    alt: "cottage looking town",
  },
  {
    //locations[1]
    name: "Shop",
    buttonText: ["Town", "Buy HP: 10 gold", "Buy Weapon", "WARNING: 10 gold"],
    text: '"Ah, an adventurer! Come now, what can I do for you?"',
    image:
      "https://image.lexica.art/full_webp/2cce2637-98ef-4e49-9682-aa352dbad992",
    alt: "shop front",
  },
  {
    //locations[2]
    name: "Forest",
    buttonText: ["Town", "Inner Forest", "Fight Slime"],
    text: "You have enter the Forest.\nThe view in front of you can only be describe as calm and serene. The way back to town is right behind you. Ahead lies the inner forest. Perhaps you can do some training here as Slimes are found abundantly here in the Forest",
    image:
      "https://image.lexica.art/full_webp/a0ad1045-2e7c-44e9-afca-2cf952ae9448",
    alt: "girl standing in the entrance of a forest",
  },
  {
    //locations[3]
    name: "Fight",
    buttonText: ["Attack", "Block", "Run"],
    text: "You have engage the monster.",
  },
  {
    //locations[4]
    name: "Win",
    buttonText: ["Attack", "Block", "Run"],
    text: `You have engage the monster; The ${monsters[monsterIndex].name}.`,
  },
  {
    //locations[5]
    name: "Golden Goose",
    buttonText: ["Attack", "Catch", "Dance"],
    text: `A new location appeared next to town. I mean, it's just there...Why not check it out right?\nA Golden Goose looks at you with disdain. You have no idea what to make of it. All you can think of, is having the goose Hong Kong roasted style! `,
    image:
      "https://image.lexica.art/full_webp/8245210f-8c4c-4fb9-8f02-feef47f29365",
    alt: "lake in a forest",
  },
  {
    //locations[6]
    name: "Inner Forest",
    buttonText: ["Town", "Cave", "Fight Wolf"],
    text: "You have enter the Inner Forest. With trunks as huge as a house, and branches reaching way up into the sky. You can't help but be in awe at the sheer magnitude of the trees in this region.\nThe way back to town is through the forest behind you. Ahead lies a cave with a huge entrance. Your instincts tells you, you have to be stronger before proceeding further.",
    image:
      "https://image.lexica.art/full_webp/afefdaf0-64bd-4858-811c-de1e33d4e9f5",
    alt: "dark forest",
  },
  {
    //locations[7]
    name: "Cave",
    buttonText: ["Town", "Inner Forest", "Fight Goblin"],
    text: "You have enter the Cave. The air in the cave feels moist and stuffy. You wonder what lies ahead.\nThe way back to town is through the forest behind you. Your senses tells you to leave while you still can.",
    image:
      "https://image.lexica.art/full_webp/af2181ee-94ca-4d9e-81d3-66f135dcda0e",
    alt: "cave",
  },
  {
    //locations[8]
    name: "Dragon Den",
    buttonText: ["Town", "Fight Dragon", "NOT USED"],
    text: "You have enter the Dragon Den. The beast stares at you with it's petrifying eyes.\nThere is no need to risk your life for this.",
    image:
      "https://image.lexica.art/full_webp/a606c7e5-2141-4990-8fc1-1b01adc50a2f",
    alt: "open space with flying dragon",
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
  { name: "Trusty Knuckles", power: 1 },
  {
    name: "The Stick",
    power: 3,
    cost: 50,
    text: 'You can\'t believe you paid 50 gold for a stick. "THE STICK, you mean?", says the ShopKeeper. *SIGH* ',
  },
  {
    name: "Pocket Knife",
    power: 7,
    cost: 100,
    text: "Now this is what I am talking about! A Pocket Knife will help in dispatching the monsters faced in your journeys",
  },
  {
    name: "Le Daggar",
    power: 15,
    cost: 200,
    text: "You finally get the feeling, that you are getting into the league where the big boys plays! Let's go Le Daggar! I choose you!",
  },
  {
    name: "Big-Ass-Sword",
    power: 31,
    cost: 400,
    text: `With a name like this, you are confident that no monster shall be able to withstand your prowess! Watch out for my Big-Ass mother...\n
    'No swearing in here, or I will break you!', says the ShopKeeper.`,
  },
  {
    name: "Accupuncture Set",
    power: 1000,
    cost: 1000,
    text: "You are not sure what to make out of the Accupuncture Set. It can either relieve the monster's years of aliments, or relieve them of their lives... ",
  },
];

/*----- Cached Element References  -----*/

/*-------------- Functions -------------*/

const init = () => {
  //code to init the game

  monsterDetails.style.display = "none";
  button1.innerText = locations[0].buttonText[0];
  button2.innerText = locations[0].buttonText[1];
  button3.innerText = locations[0].buttonText[2];

  button1.onclick = goShop;
  button2.onclick = goForest;
  button3.onclick = goDragon;
  render();

  hp = 100;
  gold = 50;
  xp = 0;
  currentWeaponIndex = 0;
  weaponInventory.push(weapons[currentWeaponIndex]);
  weapons[currentWeaponIndex].power = 1;
  weapons[1].power = 3;
  weapons[2].power = 7;
  weapons[3].power = 15;
  weapons[4].power = 31;
  weapons[5].power = 1000;

  monsterIndex = 0;
  dragonDefeat = 0;

  hpText.innerText = hp;
  goldText.innerText = gold;
  xpText.innerText = xp;
  weaponNameText.innerText = weaponInventory[currentWeaponIndex].name;
  weaponPowerText.innerText = weaponInventory[currentWeaponIndex].power;

  areaImage.src = locations[2].image;
  areaImage.alt = locations[2].alt;
};

const render = () => {
  //code to render
  warning.style.display = "none";
  button4.style.display = "none";
};

const isDragonDefeated = () => {
  monsterDetails.style.display = "none";
  button3.style.display = "block";
  button4.style.display = "block";

  button1.innerText = locations[0].buttonText[0];
  button2.innerText = locations[0].buttonText[1];
  button3.innerText = locations[0].buttonText[2];
  button4.innerText = locations[0].buttonText[3];
  text.innerText = locations[0].text2;
  button1.onclick = goShop;
  button2.onclick = goForest;
  button3.onclick = goDragon;
  button4.onclick = goGoose;
  warning.style.display = "none";
  areaImage.src = locations[0].image;
  areaImage.alt = locations[0].alt;
};

const goShop = () => {
  //function on button when clicked to go shop
  button1.innerText = locations[1].buttonText[0];
  button2.innerText = locations[1].buttonText[1];

  button4.style.display = "block";
  button4.innerText = locations[1].buttonText[3];

  text.innerText = locations[1].text;
  button1.onclick = goTown;
  button2.onclick = buyHp;
  button3.onclick = buyWeapon;
  button4.onclick = goWarning;
  areaImage.src = locations[1].image;
  areaImage.alt = locations[1].alt;

  if (currentWeaponIndex < 5) {
    button3.innerText =
      locations[1].buttonText[2] +
      `: ${weapons[currentWeaponIndex + 1].cost} gold`;
  } else {
    button3.style.display = "none";
  }
};

const goTown = () => {
  //function on button when clicked to go town

  if (dragonDefeat === 0) {
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
  areaImage.src = locations[2].image;
  areaImage.alt = locations[2].alt;
};

const goInnerForest = () => {
  //function on button when clicked to go inner forest
  monsterIndex = 1;

  button1.innerText = locations[6].buttonText[0];
  button2.innerText = locations[6].buttonText[1];
  button3.innerText = locations[6].buttonText[2];
  text.innerText = locations[6].text;
  button1.onclick = goTown;
  button2.onclick = goCave;
  button3.onclick = fightWolf;
  areaImage.src = locations[6].image;
  areaImage.alt = locations[6].alt;
};

const goCave = () => {
  //function on button when clicked to go cave
  monsterIndex = 2;

  button1.innerText = locations[7].buttonText[0];
  button2.innerText = locations[7].buttonText[1];
  button3.innerText = locations[7].buttonText[2];
  text.innerText = locations[7].text;
  button1.onclick = goTown;
  button2.onclick = goInnerForest;
  button3.onclick = fightGoblin;
  areaImage.src = locations[7].image;
  areaImage.alt = locations[7].alt;
};

const goDragon = () => {
  //function on button when clicked to go Dragon Den
  monsterIndex = 3;
  button3.style.display = "none";
  button4.style.display = "none";

  button1.innerText = locations[8].buttonText[0];
  button2.innerText = locations[8].buttonText[1];
  button3.innerText = locations[8].buttonText[2];
  text.innerText = locations[8].text;
  button1.onclick = goTown;
  button2.onclick = fightDragon;
  areaImage.src = locations[8].image;
  areaImage.alt = locations[8].alt;
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
  areaImage.src = locations[5].image;
  areaImage.alt = locations[5].alt;
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

  if (dragonDefeat === 1 && monsterIndex < 3) {
    monsterHp.innerText = monsters[monsterIndex].hp * 10;
  }
};

const fightSlime = () => {
  monsterIndex = 0;
  fightIni();
  text.innerText += "The Slime smiles at you while bouncing on the spot";

  if (dragonDefeat === 1) {
    let text2 = `\nWithout the supressing aura of the dragon in this region, the monsters have increased in strength.`;
    text.innerText += text2;
  }

  areaImage.src = monsters[0].image;
  areaImage.alt = monsters[0].alt;
};

const fightWolf = () => {
  monsterIndex = 1;
  fightIni();
  text.innerText +=
    "The Wolf stares at you while bearing it's fangs menacingly.";

  if (dragonDefeat === 1) {
    let text2 = `\nWithout the supressing aura of the dragon in this region, the monsters have increased in strength.`;
    text.innerText += text2;
  }

  areaImage.src = monsters[1].image;
  areaImage.alt = monsters[1].alt;
};

const fightGoblin = () => {
  monsterIndex = 2;
  fightIni();
  text.innerText +=
    "'FEE FIA FOE FUM', says the Goblin in a cave-rumbling voice.";

  if (dragonDefeat === 1) {
    let text2 = `\nWithout the supressing aura of the dragon in this region, the monsters have increased in strength.`;
    text.innerText += text2;
  }

  areaImage.src = monsters[2].image;
  areaImage.alt = monsters[2].alt;
};

const fightDragon = () => {
  //function on button when clicked to go fight dragon
  monsterIndex = 3;
  fightIni();

  text.innerText +=
    "The Dragon stares at you, while arching it's body just like a cat, ready to pounce at you.";
  button3.style.display = "block";

  areaImage.src = monsters[3].image;
  areaImage.alt = monsters[3].alt;
};

const fightGoose = () => {
  monsterIndex = 4;
  fightIni();

  text.innerText +=
    "You can't stop drooling as you stare at the plump Golden Goose";

  areaImage.src = monsters[4].image;
  areaImage.alt = monsters[4].alt;
};

const goAttack = () => {
  //attack codes

  let currentMonsterHp = monsterHp.innerText;
  if (currentMonsterHp > 1) {
    let humanAttack =
      Math.floor(Math.random() * xp) + weapons[currentWeaponIndex].power;
    currentMonsterHp -= humanAttack;

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
  }
};

const isMonsterDefeated = () => {
  if (monsterHp.innerText <= 0) {
    monsterDetails.style.display = "none";

    defeatMonster();
  } else {
    // how does the monster dmg me?
    let monsterAttack =
      Math.floor(Math.random() * monsters[monsterIndex].level) +
      monsters[monsterIndex].level;

    if (dragonDefeat === 1 && monsterIndex < 3) {
      let monsterAttack2 =
        Math.floor(Math.random() * monsters[monsterIndex].level * 10) +
        monsters[monsterIndex].level;
      hp -= monsterAttack2;
      hpText.innerText = hp;

      text.innerText = `You have attacked the monster with your ${
        weapons[currentWeaponIndex].name
      }, and dealt ${
        Math.floor(Math.random() * xp) + weapons[currentWeaponIndex].power
      } damage.\n
      The ${monsterName.innerText} hits you for ${monsterAttack2} damage`;
    } else {
      hp -= monsterAttack;
      hpText.innerText = hp;

      text.innerText = `You have attacked the monster with your ${
        weapons[currentWeaponIndex].name
      }, and dealt ${
        Math.floor(Math.random() * xp) + weapons[currentWeaponIndex].power
      } damage.\n
      The ${monsterName.innerText} hits you for ${monsterAttack} damage`;
    }

    isPlayerDefeated();
  }
};

const defeatMonster = () => {
  let goldGain = 0;
  let xpGain = 0;
  if (dragonDefeat === 1 && monsterIndex < 3) {
    goldGain = Math.floor(monsters[monsterIndex].level * 3 * 10);
    gold += goldGain;
    goldText.innerText = gold;

    xpGain = Math.floor(monsters[monsterIndex].level * 10);
    xp += xpGain;
    xpText.innerText = xp;
  } else {
    goldGain = Math.floor(monsters[monsterIndex].level * 3);
    gold += goldGain;
    goldText.innerText = gold;

    xpGain = Math.floor(monsters[monsterIndex].level);
    xp += xpGain;
    xpText.innerText = xp;
  }
  text.innerText = `You have defeated the ${monsters[monsterIndex].name}.
  Gold obtained: ${goldGain}
  XP obtained: ${xpGain}`;

  checkLocations();
};

const checkLocations = () => {
  switch (monsterIndex) {
    case 0:
      button1.innerText = locations[2].buttonText[0];
      button2.innerText = locations[2].buttonText[1];
      button3.innerText = locations[2].buttonText[2];

      button1.onclick = goTown;
      button2.onclick = goInnerForest;
      button3.onclick = fightSlime;
      break;
    case 1:
      button1.innerText = locations[6].buttonText[0];
      button2.innerText = locations[6].buttonText[1];
      button3.innerText = locations[6].buttonText[2];

      button1.onclick = goTown;
      button2.onclick = goCave;
      button3.onclick = fightWolf;
      break;
    case 2:
      button1.innerText = locations[7].buttonText[0];
      button2.innerText = locations[7].buttonText[1];
      button3.innerText = locations[7].buttonText[2];

      button1.onclick = goTown;
      button2.onclick = goInnerForest;
      button3.onclick = fightGoblin;

      areaImage.src = locations[7].image;
      areaImage.alt = locations[7].alt;
      break;
    case 3:
      button1.innerText = locations[1].buttonText[0];
      button2.innerText = locations[1].buttonText[0];
      button3.innerText = locations[1].buttonText[0];
      text.innerText += `\n
    You have defeated the ${monsters[monsterIndex].name}. The town is safe once again, right? But is that really it? Let's head back to town.`;
      button1.onclick = goTown;
      button2.onclick = goTown;
      button3.onclick = goTown;
      dragonDefeat = 1;
      break;
    case 4:
      button1.innerText = locations[9].buttonText[0];
      button2.innerText = locations[9].buttonText[0];
      button3.innerText = locations[9].buttonText[0];
      text.innerText = `You have defeated the ${monsters[monsterIndex].name}. The town is safe once again. This time, it really is done. The townfolks are no longer plague with illness. The monsters, while still there, are no longer hostile to the townfolks. Enjoy your roasted Golden Goose, Hong Kong Style, you deserved it!\n
    Thank you for playing! Hope you had as much fun, as I did creating this!\n
    Yours Truly: Benjamin Goh`;
      button1.onclick = goReplay;
      button2.onclick = goReplay;
      button3.onclick = goReplay;
      dragonDefeat = 1;
      break;
  }
};

const goBlock = () => {
  //block codes
  let monsterAttack = 0;
  let blockAmount = Math.floor(weapons[currentWeaponIndex].power * 0.5);
  let amountRecovered = Math.floor(Math.random() * blockAmount);

  if (dragonDefeat === 1 && monsterIndex < 3) {
    monsterAttack =
      Math.floor(Math.random() * monsters[monsterIndex].level * 10) +
      monsters[monsterIndex].level;
  } else {
    monsterAttack =
      Math.floor(Math.random() * monsters[monsterIndex].level) +
      monsters[monsterIndex].level;
  }

  let damageTaken = monsterAttack - blockAmount;

  if (damageTaken > 0) {
    hp -= damageTaken;
    hp += amountRecovered;
    hpText.innerText = hp;

    text.innerText = `You have blocked the incoming attack from the monster with your ${weapons[currentWeaponIndex].name}, and suffered ${damageTaken} damage. You repositon yourself, and gain ${amountRecovered} of HP.`;
  } else if (
    damageTaken <= 0 &&
    weapons[currentWeaponIndex].power <= monsters[monsterIndex].hp
  ) {
    hp += Math.floor(amountRecovered * 0.1);
    hpText.innerText = hp;

    text.innerText = `You have blocked the incoming attack from the monster with your ${
      weapons[currentWeaponIndex].name
    }, and suffered zero damage. You repositon yourself, and gain ${Math.floor(
      amountRecovered * 0.1
    )} of HP.`;
  } else {
    text.innerText = `You have blocked the incoming attack from the monster with your ${weapons[currentWeaponIndex].name}, and suffered zero damage. You repositon yourself, ready to strike.`;
  }

  isPlayerDefeated();
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
  warning.style.display = "none";
  if (gold >= weapons[currentWeaponIndex + 1].cost) {
    gold -= weapons[currentWeaponIndex + 1].cost;
    goldText.innerText = gold;
    currentWeaponIndex++;

    if (currentWeaponIndex < 5) {
      button3.innerText =
        locations[1].buttonText[2] +
        `: ${weapons[currentWeaponIndex + 1].cost} gold`;
      weaponNameText.innerText = weapons[currentWeaponIndex].name;
      weaponPowerText.innerText = weapons[currentWeaponIndex].power;
      text.innerText = `You have purchased, and equipped a new weapon.\n"No refunds accepted for goods sold!", says the Shopkeeper.\n${weapons[currentWeaponIndex].text}`;
    } else {
      button3.innerText = "";
      button3.style.display = "none";
      weaponNameText.innerText = weapons[currentWeaponIndex].name;
      weaponPowerText.innerText = weapons[currentWeaponIndex].power;
      return (text.innerText = `You have purchased, and equipped a new weapon.\n"That's the last of it. No more weapons for you.", says the Shopkeeper.\n${weapons[currentWeaponIndex].text}`);
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

const youStrong = () => {
  hp = 10000;
  gold = 5000;
  weapons[currentWeaponIndex].power = 5000;

  hpText.innerText = hp;
  goldText.innerText = gold;
  weaponPowerText.innerText = weapons[currentWeaponIndex].power;

  text.innerText = `Hey now, you do know technically this is not fair right. Then again...Nothing is fair. Shall we save the townfolks now :)`;
};

init();
/*----------- Event Listeners ----------*/
document.querySelector("#buttons").addEventListener("click", playGame);
document.querySelector("#godMode").addEventListener("click", youStrong);
/*----------- PERSONAL NOTES ----------*/
