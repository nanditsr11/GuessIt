# GuessIt - Higher, Lower, or Equal

A simple and engaging number-guessing game built with HTML, CSS, and JavaScript.

## Overview
**Higher, Lower, or Equal** is a fun game where players predict whether the next randomly generated number will be higher, lower, or equal to the current number. The game tracks the player's score and highest score across rounds.

## Features
- Player name input and display.
- Random number generation for unpredictable outcomes.
- Score tracking for the current game and the highest score achieved.
- Visual and interactive feedback for correct and incorrect guesses.
- Responsive design for desktop and mobile devices.

## Technologies Used
- **HTML5**: Structure and content.
- **CSS3**: Styling and layout.
- **JavaScript**: Game logic and interactivity.

## Getting Started
1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser to play the game.

## How to Play
1. Upon starting, enter your name when prompted.
2. Observe the current number displayed on the screen.
3. Use the **Higher**, **Lower**, or **Equal** buttons to make your guess about the next number.
4. If your guess is correct, your score increases, and the game continues.
5. If your guess is incorrect, the game ends, and your highest score is updated.
6. Use the **Play Again** button to restart the game.

## Customization
### Modify the Number Range
To change the range of random numbers:
- Open `script.js`.
- Update the `generateRandomNumber` function to reflect your desired range:
  ```javascript
  function generateRandomNumber() {
    return Math.floor(Math.random() * <YOUR_RANGE>) + <MIN_VALUE>;
  }


"main.py" contains the code to run the app on terminal.
