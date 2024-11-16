let currentNumber = 0;
let nextNumber = 0;
let currentScore = 0;
let highestScore = 0;
let playerName = "";

// Initialize the game
function initGame() {
  playerName = prompt("Enter your name:") || "Player";
  document.getElementById("player-name-display").innerText = playerName;
  resetGame();
}

// Generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Update the display
function updateDisplay(message = "") {
  document.getElementById("current-number").innerText = currentNumber;
  document.getElementById("current-score").innerText = currentScore;
  document.getElementById("highest-score").innerText = highestScore;
  document.getElementById("game-result").innerText = message;
}

// Handle user guess
function handleGuess(guess) {
  nextNumber = generateRandomNumber();
  let resultMessage = "";

  if (
    (guess === "higher" && nextNumber > currentNumber) ||
    (guess === "lower" && nextNumber < currentNumber) ||
    (guess === "equal" && nextNumber === currentNumber)
  ) {
    currentScore++;
    resultMessage = `You guessed right!`;
  } else {
    resultMessage = `Wrong guess! The next number was ${nextNumber}.`;
    endGame();
    return;
  }

  currentNumber = nextNumber;
  highestScore = Math.max(highestScore, currentScore);
  updateDisplay(resultMessage);
}

// Reset the game
function resetGame() {
  currentScore = 0;
  currentNumber = generateRandomNumber();
  updateDisplay("Game started! Make your guess.");
  document.getElementById("restart-area").classList.add("hidden");
  document.querySelectorAll(".game-area button").forEach((btn) => btn.disabled = false);
}

// End the game
function endGame() {
  updateDisplay("Game over! Click 'Play Again' to restart.");
  document.getElementById("restart-area").classList.remove("hidden");
  document.querySelectorAll(".game-area button").forEach((btn) => btn.disabled = true);
}

// Add event listeners
document.getElementById("higher").addEventListener("click", () => handleGuess("higher"));
document.getElementById("lower").addEventListener("click", () => handleGuess("lower"));
document.getElementById("equal").addEventListener("click", () => handleGuess("equal"));
document.getElementById("restart").addEventListener("click", resetGame);

// Start the game
initGame();
