const startButton = document.querySelector('#start');
const restartButton = document.querySelector('#restart');
const gridContainer = document.querySelector('#grid');
const messageDiv = document.getElementById('message');
let currentPlayer = "X";
let board = Array(9).fill(null);
let playerNames = { X: "Player X", O: "Player O" };

function updateMessage(text) {
  messageDiv.textContent = text;
}

function createGrid() {
  gridContainer.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const item = document.createElement('div');
    item.textContent = "";
    item.className = "cell";
    item.dataset.index = i;
    item.addEventListener('click', handleSquareClick);
    gridContainer.appendChild(item);
  }
}

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = "X";
  createGrid();
  updateMessage(`${playerNames[currentPlayer]}'s turn`);
}

function handleSquareClick(e) {
  const index = Number(e.target.dataset.index);
  if (board[index] || checkWinner(board)) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  if (checkWinner(board)) {
    updateMessage(`${playerNames[currentPlayer]} wins!`);
    return;
  }
  if (board.every(cell => cell)) {
    updateMessage("It's a draw!");
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateMessage(`${playerNames[currentPlayer]}'s turn`);
}

function checkWinner(b) {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return winPatterns.some(pattern =>
    b[pattern[0]] && b[pattern[0]] === b[pattern[1]] && b[pattern[1]] === b[pattern[2]]
  );
}

startButton.addEventListener("click", () => {
  const p1 = document.getElementById('player1').value.trim() || "Player X";
  const p2 = document.getElementById('player2').value.trim() || "Player O";
  playerNames = { X: p1, O: p2 };
  resetGame();
});

restartButton.addEventListener("click", resetGame);