const guestScore = document.getElementById("guest-score");
const homeScore = document.getElementById("home-score");
const guestScoreContainer = document.getElementById("guest-score-container");
const homeScoreContainer = document.getElementById("home-score-container");
const homeAddOne = document.getElementById("home-add-one");
const homeAddTwo = document.getElementById("home-add-two");
const homeAddThree = document.getElementById("home-add-three");
const guestAddOne = document.getElementById("guest-add-one");
const guestAddTwo = document.getElementById("guest-add-two");
const guestAddThree = document.getElementById("guest-add-three");
const resetBtn = document.getElementById("reset-btn");

let scoreForHome = 0;
let scoreForGuest = 0;

//---Event Listeners for Points Buttons ---

homeAddOne.addEventListener("click", function () {
  homeIncrementer(1);
});

homeAddTwo.addEventListener("click", function () {
  homeIncrementer(2);
});

homeAddThree.addEventListener("click", function () {
  homeIncrementer(3);
});

guestAddOne.addEventListener("click", function () {
  guestIncrementer(1);
});

guestAddTwo.addEventListener("click", function () {
  guestIncrementer(2);
});

guestAddThree.addEventListener("click", function () {
  guestIncrementer(3);
});

//---New Game and Render Function ---

resetBtn.addEventListener("click", newGame);

function newGame() {
  scoreForGuest = 0;
  scoreForHome = 0;
  homeScore.textContent = 0;
  guestScore.textContent = 0;
  guestScoreContainer.classList.remove("leading");
  homeScoreContainer.classList.remove("draw");
  homeScoreContainer.classList.remove("leading");
  guestScoreContainer.classList.remove("draw");
}

function render() {
  homeScore.textContent = scoreForHome;
  guestScore.textContent = scoreForGuest;
}

//---Incremental Points Functions ---

function homeIncrementer(points) {
  scoreForHome += points;
  render();
  leadingTeam();
}

function guestIncrementer(points) {
  scoreForGuest += points;
  render();
  leadingTeam();
}

//---Leading Team Function ---

function leadingTeam() {
  if (scoreForHome > scoreForGuest) {
    redBorderHome();
  } else if (scoreForHome < scoreForGuest) {
    redBorderGuest();
  } else {
    greenBorder();
  }
}

function redBorderHome() {
  homeScoreContainer.classList.add("leading");
  guestScoreContainer.classList.remove("leading");
  homeScoreContainer.classList.remove("draw");
  guestScoreContainer.classList.remove("draw");
}

function redBorderGuest() {
  homeScoreContainer.classList.remove("leading");
  guestScoreContainer.classList.add("leading");
  homeScoreContainer.classList.remove("draw");
  guestScoreContainer.classList.remove("draw");
}

function greenBorder() {
  homeScoreContainer.classList.add("draw");
  guestScoreContainer.classList.add("draw");
}
