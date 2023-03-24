const guestScore = document.getElementById("guest-score");
const homeScore = document.getElementById("home-score");
const guestScoreContainer = document.getElementById("guest-score-container");
const homeScoreContainer = document.getElementById("home-score-container");
const guestText = document.getElementById("guest-text");
const homeText = document.getElementById("home-text");
const scoreboardContainer = document.querySelector(".scoreboard-container")
const resetBtn = document.getElementById("reset-btn");
const score = document.getElementsByClassName(".score")

let scoreForHome = 0;
let scoreForGuest = 0;

//---Event Listener for Points Buttons ---

scoreboardContainer.addEventListener("click", function(e){
  const target = e.target
  const homePoints = target.dataset.homeAdd
  const guestPoints = target.dataset.guestAdd
  
  if (homePoints){
    scoreForHome += +homePoints
    homeScore.textContent = scoreForHome
  } 
  
  if (guestPoints) {
    scoreForGuest += +guestPoints
    guestScore.textContent = scoreForGuest
} 
  leadingTeam()
})


//---New Game and Render Function ---

resetBtn.addEventListener("click", newGame);

function newGame() {
  scoreForGuest = 0;
  scoreForHome = 0;
  homeScore.textContent = scoreForHome;
  guestScore.textContent = scoreForGuest;
  homeScore.classList.remove("leading", "draw");
  guestScore.classList.remove("leading","draw");
  homeText.classList.remove("highlight");
  guestText.classList.remove("highlight")
}

function render() {
  leadingTeam()
  homeScore.textContent = scoreForHome;
  guestScore.textContent = scoreForGuest;
}


//---Leading Team Function ---

function leadingTeam() {
  homeScore.classList.toggle("leading", scoreForHome > scoreForGuest)
  guestScore.classList.toggle("leading", scoreForGuest > scoreForHome)
  homeScore.classList.toggle("draw", scoreForHome === scoreForGuest)
  if(scoreForHome === 0 && scoreForGuest === 0){
    homeScore.classList.remove("draw")
  }
  guestScore.classList.toggle("draw", scoreForHome === scoreForGuest)
  if(scoreForHome === 0 && scoreForGuest === 0){
    guestScore.classList.remove("draw")
  }
  homeText.classList.toggle("highlight", scoreForHome > scoreForGuest)
  guestText.classList.toggle("highlight", scoreForGuest > scoreForHome)
}
if (homeScore === 0 && guestScore === 0){
  homeScore.classList.remove("draw")
}