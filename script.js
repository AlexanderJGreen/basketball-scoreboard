let homeScoreEl = document.getElementById("score-home");
let awayScoreEl = document.getElementById("score-away");

let homeIncrease1 = document.getElementById("home1");
let homeIncrease2 = document.getElementsById("home2");
let homeIncrease3 = document.getElementById("home3");

let awayIncrease1 = document.getElementById("away1");
let awayIncrease2 = document.getElementById("away2");
let awayIncrease3 = document.getElementById("away3");

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

// away scores //

function awayScoreIncrease1() {
  let currentScore = Number(awayScoreEl.textContent);
  currentScore += 1;
  guestScoreEl.textContent = currentScore;
}

function awayScoreIncrease2() {
  let currentScore = Number(awayScoreEl.textContent);
  currentScore += 2;
  guestScoreEl.textContent = currentScore;
}

function awayScoreIncrease3() {
  let currentScore = Number(awayScoreEl.textContent);
  currentScore += 3;
  guestScoreEl.textContent = currentScore;
}
