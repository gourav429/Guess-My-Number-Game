'use strict';

function generateRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

const displayMeassage = message => {
  document.querySelector('.message').textContent = message;
};

const updateBackgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const updateWidth = width => {
  document.querySelector('.number').style.width = width;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const updateHighestScore = highestScore => {
  document.querySelector('.highscore').textContent = highestScore;
};

const updateScore = score => {
  document.querySelector('.score').textContent = score;
};

let secretNumber = generateRandomNumber();
let score = 20;
let highestScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMeassage('⛔️ No Number');
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMeassage('🎉 Correct Number');

    updateWidth('30rem');
    updateBackgroundColor('#60b347');

    if (score > highestScore) {
      highestScore = score;
      updateHighestScore(score);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      updateScore(score);
      displayMeassage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
    } else {
      updateScore(0);
      displayMeassage('💥 You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayNumber('?');
  updateScore(score);
  updateWidth('15rem');
  updateBackgroundColor('#222');
  displayMeassage('Start guessing...');
  secretNumber = generateRandomNumber();
  document.querySelector('.guess').value = '';
});
