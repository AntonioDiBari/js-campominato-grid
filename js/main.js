const difficultLvlInput = document.getElementById("difficult");
const startBtn = document.getElementById("start");
const gameboard = document.getElementById("gameboard");

startBtn.addEventListener("click", function () {
  difficultLvl = parseInt(difficultLvlInput.value);
  const bombArray = [];
  let min = 1;
  let max = difficultLvl * difficultLvl;
  let offset = max - min;
  if (offset >= 16) {
    while (bombArray.length < 16) {
      let bomb = Math.floor(Math.random() * (max - min + 1) + min);
      if (!bombArray.includes(bomb)) {
        bombArray.push(bomb);
      }
    }
  }
  console.table(bombArray);
  generateGrid(gameboard, difficultLvl);
});
