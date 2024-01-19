const difficultLvlInput = document.getElementById("difficult");
const startBtn = document.getElementById("start");
const gameboard = document.getElementById("gameboard");
let isGameOver = false;
let points = 0;

startBtn.addEventListener("click", function () {
  difficultLvl = parseInt(difficultLvlInput.value);
  generateGrid(gameboard, difficultLvl);
});
