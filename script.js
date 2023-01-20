let xp = 0,
	health = 100,
	gold = 50,
	currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");
const locations = [
	{
		name: "town square",
		"button text": ["Go to store", "Go to cave", "Fight dragon"],
		"button function": [goToStore, goToCave, fightDragon],
		text: 'You are in the town square. You see a sign that says "store"',
	},
	{
		name: "store",
		"button text": [
			"Buy 10 health (10 gold)",
			"Buy weapon (30 gold)",
			"Go to Town Square",
		],
		"button function": [buyHealth, buyWeapon, goTown],
		text: "You will enter the store",
	},
];

button1.onClick = goToStore;
button2.onClick = goToCave;
button3.onClick = fightDragon;

function update(location) {
	button1.innerText = location["button text"][0];
	button2.innerText = location["button text"][1];
	button3.innerText = location["button text"][2];
	button1.onClick = location["button function"][0];
	button2.onClick = location["button function"][1];
	button3.onClick = location["button function"][2];
	text.innerText = location.text;
}

function goTown() {
	update(locations[0]);
}

function goToStore() {
	update(locations[1]);
}

function goToCave() {
	console.log("Going to store");
}

function fightDragon() {
	console.log("Going to store");
}

function buyHealth() {}

function buyWeapon() {}
