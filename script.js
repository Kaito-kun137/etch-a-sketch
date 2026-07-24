document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const gridSize = 16;
  const totalSquares = gridSize * gridSize;

  for (let i = 0; i < totalSquares; i += 1) {
    const square = document.createElement('div');
    square.className = 'square';

    square.addEventListener('mouseover', () => {
      square.classList.add('active');
    });

    container.appendChild(square);
  }
});
