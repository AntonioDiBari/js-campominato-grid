//**  FUNCTIONS

function generateGrid(container) {
  container.innerHTML = "";
  for (i = 0; i < 100; i++) {
    const boxEl = generateBox();
    container.append(boxEl);
  }
}

function generateBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  box.addEventListener("click", function () {
    box.classList.toggle("clicked");
  });
  return box;
}
