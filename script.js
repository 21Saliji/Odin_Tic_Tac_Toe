const startButton = document.querySelector('#start');
startButton.addEventListener("click", () => {
  // Remove the alert and show the grid
  const container = document.querySelector('#grid');
  container.innerHTML = ""; // Clear previous grid if any
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(3, 60px)";
  container.style.gridTemplateRows = "repeat(3, 60px)";
  container.style.gap = "5px";
  for (let i = 1; i <= 9; i++) {
    const item = document.createElement('div');
    item.textContent = "";
    item.style.width = "60px";
    item.style.height = "60px";
    item.style.border = "1px solid #333";
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "center";
    item.style.fontSize = "2rem";
    container.appendChild(item);
  }
});