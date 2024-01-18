//**  FUNCTIONS

function generateGrid(container, level) {
  container.innerHTML = "";
  for (i = 1; i <= level * level; i++) {
    const boxEl = generateBox(i, level);
    container.append(boxEl);
  }
}

function generateBox(i, level) {
  const box = document.createElement("div");
  box.innerText = i;
  box.setAttribute("data-i", i);
  box.classList.add("box");
  console.log(level);
  if (level == 10) {
    box.classList.add("box-10");
  } else if (level == 9) {
    box.classList.add("box-9");
  } else if (level == 7) {
    box.classList.add("box-7");
  }
  box.addEventListener("click", function () {
    this.classList.toggle("clicked");
    console.log(this.getAttribute("data-i"));
  });
  return box;
}
