const difficultLvl = document.getElementById("difficult");
const startBtn = document.getElementById("start");
const gameboard = document.getElementById("gameboard");

startBtn.addEventListener("click", function () {
  generateGrid(gameboard);
});
