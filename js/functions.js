//**  FUNCTIONS
/**
 * Funzione che genera la griglia con ciclo per generare i box e la mette in pagina, svuotando eventuali griglie già presenti
 * @param {elementoHtml} container dove andrà inserità la grid
 * @param {*} level livello di difficoltà che indica il numero di box
 */
function generateGrid(container, level) {
  container.innerHTML = "";
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
  for (i = 1; i <= level * level; i++) {
    const boxEl = generateBox(i, level, bombArray);
    container.append(boxEl);
  }
}
/**
 * Funzione che genera i box e ne gestisce il click
 * @param {*} i indice del box
 * @param {*} level livello di difficoltà che indica le dimensioni del box
 * @returns elemento div da inserire nella griglia
 */
function generateBox(i, level, bomblist) {
  const box = document.createElement("div");
  box.innerText = i;
  box.setAttribute("data-i", i);
  box.classList.add("box");
  console.log(level);

  box.classList.add(`box-${level}`);

  box.addEventListener("click", function () {
    if (!isGameOver) {
      if (bomblist.includes(parseInt(this.getAttribute("data-i")))) {
        this.classList.add("error");
        alert("Hai perso, riprova!! Punteggio: " + points);
        isGameOver = true;
      } else {
        this.classList.add("safe");
        points += 1;
        if (points == level * level - 16) {
          alert("Hai vinto, hai fatto un punteggio di " + points);
          isGameOver = true;
        }
      }
    }
  });
  return box;
}
