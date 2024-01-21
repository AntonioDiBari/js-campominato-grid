//**  FUNCTIONS
/**
 * Funzione che genera la griglia con ciclo per generare i box e la mette in pagina, svuotando eventuali griglie già presenti
 * @param {elementoHtml} container dove andrà inserità la grid
 * @param {*} level livello di difficoltà che indica il numero di box
 */
function generateGrid(container, level) {
  container.innerHTML = "";
  const bombArray = bombArrayGen(level);
  console.table(bombArray);
  let boxEl = "";
  for (i = 1; i <= level * level; i++) {
    boxEl = generateBox(i, level, bombArray);
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
  let box = document.createElement("div");
  box.innerText = i;
  box.setAttribute("data-i", i);
  box.classList.add("box");
  box.classList.add(`box-${level}`);
  box.addEventListener("click", function () {
    if (!isGameOver) {
      if (bomblist.includes(parseInt(this.getAttribute("data-i")))) {
        let boxCollection = document.getElementsByClassName("box");
        for (index = 1; index < boxCollection.length; index++) {
          if (bomblist.includes(parseInt(boxCollection[index].innerText))) {
            boxCollection[index].classList.add("error");
          }
        }
        alert("Hai perso, riprova!! Punteggio: " + points);
        isGameOver = true;
      } else {
        this.classList.add("safe");
        points += 1;
        if (points >= level * level - 16) {
          alert("Hai vinto, hai fatto un punteggio di " + points);
          isGameOver = true;
          let boxCollection = document.getElementsByClassName("box");
          for (index = 1; index < boxCollection.length; index++) {
            if (bomblist.includes(parseInt(boxCollection[index].innerText))) {
              boxCollection[index].classList.add("error");
            }
          }
        }
      }
    }
  });
  return box;
}

/**
 * Crea l'array delle bombe "uniche" casualmente, controllando che non si generi loop infinito per problemi con l'offset
 * @param {number} level livello di difficoltà selezionato
 * @returns array di bombe
 */
function bombArrayGen(level) {
  const bombArray = [];
  let min = 1;
  let max = level * level;
  let offset = max - min;
  if (offset >= 16) {
    while (bombArray.length < 16) {
      let bomb = Math.floor(Math.random() * (max - min + 1) + min);
      if (!bombArray.includes(bomb)) {
        bombArray.push(bomb);
      }
    }
  }
  // console.table(bombArray);
  return bombArray;
}
