const container = document.querySelector('#grid');
for (let i = 1; i <= 9; i++) {
  const item = document.createElement('div');
  item.textContent = i;
  container.appendChild(item);
}