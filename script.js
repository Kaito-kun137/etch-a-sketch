document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const resizeButton = document.querySelector('#resize-btn');
  const boardSize = 960;

  function createGrid(size) {
    container.replaceChildren();

    const squareSize = boardSize / size;
    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i += 1) {
      const square = document.createElement('div');
      square.className = 'square';
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;

      square.addEventListener('mouseenter', () => {
        square.classList.add('active');
      });

      container.appendChild(square);
    }
  }

  resizeButton.addEventListener('click', () => {
    const input = prompt('Enter the number of squares per side (max 100):');

    if (input === null) {
      return;
    }

    const size = Number(input);

    if (!Number.isInteger(size) || size <= 0 || size > 100) {
      alert('Please enter a whole number between 1 and 100.');
      return;
    }

    createGrid(size);
  });

  createGrid(16);
});
