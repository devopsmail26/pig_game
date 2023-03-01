'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let playing = true;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let score = [0, 0];
let current_score = 0;
let activePlayer = 0;

// Rolling Dice Functionality

btnRollDice.addEventListener('click', rolled);

btnHold.addEventListener('click', hold);

btnNewGame.addEventListener('click', resetGame);

function rolled() {
  //generate a rnadom number for dice
  if (playing) {
    const ran_dice_number = Math.trunc(Math.random() * 6 + 1);

    // show the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${ran_dice_number}.png`;

    console.log(ran_dice_number);

    if (ran_dice_number !== 1) {
      //add the dice to the current score

      // current_score = current_score + ran_dice_number;
      current_score += ran_dice_number;
      // document.querySelector('#current--1').textContent = current_score;
      // current0El.textContent = current_score;
      document.getElementById(`current--${activePlayer}`).textContent =
        current_score;
    } else {
      // switch to the next player
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      activePlayer = activePlayer === 0 ? 1 : 0;
      current_score = 0;
      // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
}

function hold() {
  //   score[activePlayer] += current_score;

  if (playing) {
    // 1. add current socre to the active player
    if (activePlayer === 0) {
      score[0] = score[0] + current_score;
      score0El.textContent = score[0];
      // 2. check if the player score is > than or equal to 100 then finish the game
      if (score[0] >= 100) {
        // player0El.style.backgroundColor = '#2f2f2f';
        player0El.classList.add('player--winner');
        playing = false;
        diceEl.classList.add('hidden');
      }
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      // 3. switch to next player
      activePlayer = activePlayer === 0 ? 1 : 0;
      current_score = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    } else {
      score[1] = score[1] + current_score;
      score1El.textContent = score[1];
      if (score[1] >= 100) {
        // player1El.style.backgroundColor = '#2f2f2f';
        player1El.classList.add('player--winner');
        playing = false;
        diceEl.classList.add('hidden');
      }
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      // 3. switch to next player
      activePlayer = activePlayer === 0 ? 1 : 0;
      current_score = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
}

function resetGame() {
  playing = true;
  activePlayer = 0;
  current_score = 0;
  score0El.textContent = current_score;
  score1El.textContent = current_score;
  current0El.textContent = current_score;
  current1El.textContent = current_score;
  //   player1El.style.backgroundColor = '#2f2f2f';
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  score = [0, 0];
}
// const a = Math.random();
// console.log(a);
// const b = a * 6;
// console.log(b);
// const c = Math.trunc(b);
// console.log(c);
