//ADAPTATION FROM OPEN SOURCE REPO https://github.com/kubowania/space-invaders

/*
DOCUMENTATION: 

Features of the game, its based off of space invaders:
Player control: Move the shooter left and right using the left and right arrow keys.
Shooting: Fire lasers upwards using the up arrow key. You can alsohold down this key
Alien movement: Aliens move horizontally across the screen, changing direction when reaching the edges.
Score tracking: Keep track of the player's score, aka how many aliens they have destroyed
Game over/win detection: Display "GAME OVER" if the player's shooter collides with an alien or "YOU WIN" if all aliens are destroyed.


Movement:
Use the left and right arrow keys to move the shooter horizontally.
The shooter cannot move beyond the edges of the game grid.


Shooting:
Press the up arrow key to shoot lasers upwards from the shooter. You can hold this key for rapid fireing
Lasers destroy alien shipson contact.


Gameplay:
Aliens move horizontally across the screen, changing direction when reaching the edges.
If an alien reaches the bottom row, the game ends with a "GAME OVER" message.
Destroy all aliens to win the game, then you get in alert "YOU WIN" message.


CODING ASPECTS (ADAPTED FROM THE REPO)

Constants:
grid: Represents the game grid container.
resultDisplay: Represents the element displaying the score or game result.
width: Defines the width of the game grid.
currentShooterIndex: Tracks the index of the shooter's position.
aliensRemoved: Stores indices of removed aliens.
invadersId: Stores the ID of the interval controlling alien movement.
isGoingRight: Indicates the direction of alien movement.
direction: Represents the direction of alien movement (-1 for left, 1 for right).
results: Tracks the player's score.

Functions:
draw(): Draws the alien invaders on the grid.
remove(): Removes alien invaders from the grid.
moveShooter(e): Moves the shooter based on keyboard input.
moveInvaders(): Controls the movement of alien invaders.
shoot(e): Handles shooting lasers from the shooter.




*/
// selecting the grid and result display elements from the DOM
const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".results");

// initializing variables for game logic
let currentShooterIndex = 202; // initial position of the player shooter
const width = 15; // width of the game grid
const aliensRemoved = []; // array to store removed alien invaders
let invadersId; // ID for the setInterval function controlling the movement of invaders
let isGoingRight = true; // flag to track the direction of alien movement
let direction = 1; // variable to represent the direction of alien movement
let results = 0; // variable to store player's score

// creating the game grid
for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

// creating an array of squares representing the game grid
const squares = Array.from(document.querySelectorAll(".grid div"));

// array representing the initial positions of the alien invaders
const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

// function to draw the alien invaders on the grid
function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)) { 
      squares[alienInvaders[i]].classList.add("invader"); 
    }
  }
}

// initial draw of the alien invaders on the grid
draw();

// adding the player shooter to the grid
squares[currentShooterIndex].classList.add("shooter");

// function to remove the alien invaders from the grid
function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invader"); 
  }
}

// function to move the player shooter based on keyboard input
function moveShooter(e) {
  squares[currentShooterIndex].classList.remove("shooter"); 

  switch (e.key) {
    case "ArrowLeft":
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1; 
      break;
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1; 
      break;
  }

  squares[currentShooterIndex].classList.add("shooter"); 
}

// listening for keyboard input to move the player shooter
document.addEventListener("keydown", moveShooter);

// function to move the alien invaders
function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0; 
  const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1; 

  remove();

  if (rightEdge && isGoingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width + 1;
      direction = -1;
      isGoingRight = false;
    }
  }

  if (leftEdge && !isGoingRight) { 
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width - 1
      direction = 1;
      isGoingRight = true;
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction;
  }

  draw();

  // checking for collision with the player shooter
  if (squares[currentShooterIndex].classList.contains("invader")) {
    resultDisplay.innerHTML = "GAME OVER";
    clearInterval(invadersId);
  }

  // checking for victory condition
  if (aliensRemoved.length === alienInvaders.length) {
    resultDisplay.innerHTML = "YOU WIN";
    clearInterval(invadersId);
  }
}

// setting the interval for moving the alien invaders
invadersId = setInterval(moveInvaders, 600);

// function to handle shooting mechanism
function shoot(e) {
  let laserId;
  let currentLaserIndex = currentShooterIndex;

  function moveLaser() {
    squares[currentLaserIndex].classList.remove("laser"); 
    currentLaserIndex -= width; 

    if (currentLaserIndex < 0) {
      clearInterval(laserId); 
      return;
    }

    squares[currentLaserIndex].classList.add("laser"); 

    // checking for collision with alien invaders
    if (squares[currentLaserIndex].classList.contains("invader")) {
      squares[currentLaserIndex].classList.remove("laser"); 
      squares[currentLaserIndex].classList.remove("invader"); 
      squares[currentLaserIndex].classList.add("boom"); 

      // resetting the explosion effect after a delay
      setTimeout(() => squares[currentLaserIndex].classList.remove("boom"), 300); 

      clearInterval(laserId); 

      // updating the score and displaying it
      const alienRemoved = alienInvaders.indexOf(currentLaserIndex); 
      aliensRemoved.push(alienRemoved); 
      results++; 
      resultDisplay.innerHTML = "Score: " + results; 
    }
  }

  // initiating the shooting mechanism upon arrow key press
  if (e.key === "ArrowUp") {
    laserId = setInterval(moveLaser, 100); 
  }
}

// listening for arrow key press to trigger shooting
document.addEventListener('keydown', shoot);
