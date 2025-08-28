let homeScoreEl = document.getElementById("score-home");
let guestScoreEl = document.getElementById("score-guest");

let homeIncrease1 = document.getElementById("home1");
let homeIncrease2 = document.getElementsById("home2");
let homeIncrease3 = document.getElementById("home3");

let guestIncrease1 = document.getElementById("guest1");
let guestIncrease2 = document.getElementById("guest2");
let guestIncrease3 = document.getElementById("guest3");

function scoreIncrease1() {
  let currentScore = Number(homeScoreEl.textContent);
  currentScore += 1;
  homeScoreEl.textContent = currentScore;
}

function scoreIncrease2() {
  let currentScore = Number(homeScoreEl.textContent);
  currentScore += 2;
  homeScoreEl.textContent = currentScore;
}

function scoreIncrease3() {
  let currentScore = Number(homeScoreEl.textContent);
  currentScore += 3;
  homeScoreEl.textContent = currentScore;
}

// guest scores //

function guestScoreIncrease1() {
  let currentScore = Number(guestScoreEl.textContent);
  currentScore += 1;
  guestScoreEl.textContent = currentScore;
}

function guestScoreIncrease2() {
  let currentScore = Number(guestScoreEl.textContent);
  currentScore += 2;
  guestScoreEl.textContent = currentScore;
}

function guestScoreIncrease3() {
  let currentScore = Number(guestScoreEl.textContent);
  currentScore += 3;
  guestScoreEl.textContent = currentScore;
}
