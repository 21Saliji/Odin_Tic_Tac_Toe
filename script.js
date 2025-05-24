const startButton = document.querySelector('#start');
let currentPlayer = "X";
let board = Array(9).fill(null);

function handleSquareClick(e) {
  const index = Number(e.target.dataset.index);
  if (board[index] || checkWinner(board)) return; // Ignore if already filled or game over

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  if (checkWinner(board)) {
    document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
    return;
  }
  if (board.every(cell => cell)) {
    document.getElementById('message').textContent = "It's a draw!";
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
}

startButton.addEventListener("click", () => {
  // Remove the alert and show the grid
  const container = document.querySelector('#grid');
  container.innerHTML = ""; // Clear previous grid if any
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(3, 60px)";
  container.style.gridTemplateRows = "repeat(3, 60px)";
  container.style.gap = "5px";
  board = Array(9).fill(null);
  currentPlayer = "X";
  document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
  for (let i = 0; i < 9; i++) {
    const item = document.createElement('div');
    item.textContent = "";
    item.style.width = "60px";
    item.style.height = "60px";
    item.style.border = "1px solid #333";
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "center";
    item.style.fontSize = "2rem";
    item.dataset.index = i;
    item.addEventListener('click', handleSquareClick);
    container.appendChild(item);
  }
});

const restartButton = document.querySelector('#restart');
restartButton.addEventListener("click", () => {
  const container = document.querySelector('#grid');
  container.innerHTML = "";
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(3, 60px)";
  container.style.gridTemplateRows = "repeat(3, 60px)";
  container.style.gap = "5px";
  board = Array(9).fill(null);
  currentPlayer = "X";
  document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
  for (let i = 0; i < 9; i++) {
    const item = document.createElement('div');
    item.textContent = "";
    item.style.width = "60px";
    item.style.height = "60px";
    item.style.border = "1px solid #333";
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "center";
    item.style.fontSize = "2rem";
    item.dataset.index = i;
    item.addEventListener('click', handleSquareClick);
    container.appendChild(item);
  }
});

// Winner check function
function checkWinner(b) {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diags
  ];
  return winPatterns.some(pattern =>
    b[pattern[0]] && b[pattern[0]] === b[pattern[1]] && b[pattern[1]] === b[pattern[2]]
  );
}