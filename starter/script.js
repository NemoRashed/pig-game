//toggle-no-off
//write code here
var score = [0, 0];
var currentScore = 0;
var active = 0;

function call_message() {
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;
  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
}
call_message();

function call_function() {
  currentScore = 0;
  document.querySelector(`#current--${active}`).textContent = 0;
  active === 0 ? (active = 1) : (active = 0);

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

//NEW GAME BUTTON
document.querySelector(".btn--new").addEventListener("click", function () {
  call_message();
  document.querySelector(".btn--roll").style.display = "block";
  document.querySelector(`.player--${active}`).style.background = "gray";
});

//ROLL-DICE-BUTTON
document.querySelector(".btn--roll").addEventListener("click", function () {
  var dice = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice").src = `dice-${dice}.png`;
  document.querySelector(".dicee").src = `dice-${dice2}.png`;

  if (dice != 1 && dice2 != 1) {
    currentScore = currentScore + dice + dice2;
    document.querySelector(`#current--${active}`).textContent = currentScore;
  } else if (dice == 1 && dice2 == 1) {
    call_function();
  }
});

//HOLD-BUTTON
document.querySelector(".btn--hold").addEventListener("click", function () {
  score[active] = score[active] + currentScore;
  document.querySelector(`#score--${active}`).textContent = score[active];
  if (score[active] >= 100) {
    document.querySelector(`.player--${active}`).style.background = "black";
    document.querySelector(".btn--roll").style.display = "none";
  }
  call_function();
});

//make function swicht intan qabanaya
//  currentScore = 0;
//  document.querySelector(`#current--${active}`).textContent = 0;
//  active === 0 ? (active = 1) : (active = 0);  // waa if statement short form ah

//  document.querySelector(".player--0").classList.toggle("player--active");
//  document.querySelector(".player--1").classList.toggle("player--active");
