//**  FUNCTIONS

function generateGrid(container) {
  container.innerHTML = "";
  for (i = 1; i <= 100; i++) {
    const boxEl = generateBox(i);
    container.append(boxEl);
  }
}

function generateBox(i) {
  const box = document.createElement("div");
  box.innerText = i;
  box.setAttribute("data-i", i);
  box.classList.add("box");

  box.addEventListener("click", function () {
    this.classList.toggle("clicked");
    console.log(this.getAttribute("data-i"));
  });
  return box;
}
