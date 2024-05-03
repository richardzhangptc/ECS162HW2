let gameBoard = document.querySelector('.tiles');
let guessesDisplay = document.querySelector('.guesses');

let timeDisplay = document.querySelector('.time');
let restartButton = document.querySelector('.restart');

let guesses = 0;
let time = 0;
let interval;

let tiles = [

	{
		value: '🌌',
		visible: false
	}, //track which visible to check win the game
	{
		value: '🌌',
		visible: false
	},
	{
		value: '🛸',
		visible: false
	},
	{
		value: '🛸',
		visible: false
	},
	{
		value: '🌎',
		visible: false
	},
	{
		value: '🌎',
		visible: false
	},
	{
		value: '🚀',
		visible: false
	},
	{
		value: '🚀',
		visible: false
	},

];




function start() {
	randomizeTiles();
	populate();
	startTimer();
}

function startTimer() {
	interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
	time++; //in sec
	timeDisplay.textContent = time;
}


function randomizeTiles() {
	let tilesToShuffle = tiles.slice();

	for (let i = tilesToShuffle.length - 1; i > 0; i--) {

		let randomIndex = Math.floor(Math.random() * (i + 1));
		let temp = tilesToShuffle[i];
		tilesToShuffle[i] = tilesToShuffle[randomIndex];
		tilesToShuffle[randomIndex] = temp;

	}


	tiles = tilesToShuffle;
}



function populate() {

	gameBoard.innerHTML = '';

	for (let i = 0; i < tiles.length; i++) {
		let tileElement = document.createElement('div');
		tileElement.className = 'tile';

		let tile = tiles[i];


		if (tile.visible) {
			tileElement.textContent = tile.value;
		} else {
			tileElement.textContent = '';
		}

		tileElement.addEventListener('click', handleSelection);
		gameBoard.appendChild(tileElement);
	}
}

let selection1 = null;
let selection2 = null;

function handleSelection(event) {
	let selectedTile = event.target;
	let idx = Array.from(gameBoard.children).indexOf(selectedTile);

	if (tiles[idx].visible || selection1 === selectedTile) { //if you click on the same one
		return;
	}

	selectedTile.textContent = tiles[idx].value; //reveal

	if (selection1 == null) {
		selection1 = selectedTile;
	} else {
		selection2 = selectedTile;


		guesses++;
		guessesDisplay.textContent = guesses;
		checkMatch();
	}
}

function checkMatch() {

	if (selection1.textContent === selection2.textContent) {

		let sel1Idx = Array.from(gameBoard.children).indexOf(selection1);
		let sel2Idx = Array.from(gameBoard.children).indexOf(selection2);

		tiles[sel1Idx].visible = true;
		tiles[sel2Idx].visible = true;


		selection1 = null;
		selection2 = null;


		if (allAreMatched()) {
			clearInterval(interval);
			let message = 'Nice! You won the game in ' + guesses + ' guesses and ' + time + ' seconds.';
			alert(message);
		}
	} else {
		setTimeout(function() {
			selection1.textContent = '';
			selection2.textContent = '';
			selection1 = null;
			selection2 = null;
		}, 400);
	}
}


function allAreMatched() {
	for (let i = 0; i < tiles.length; i++) {
		let tile = tiles[i];
		if (tile.visible == false) {
			return false;
		}
	}
	return true;
}



restartButton.addEventListener('click', restartGame);

function restartGame() {
	guesses = 0;
	time = 0;

	guessesDisplay.textContent = guesses;
	timeDisplay.textContent = time;

	for (let i = 0; i < tiles.length; i++) {
		let tile = tiles[i];
		tile.visible = false;
	}

	start();
}

start();