const color = document.querySelector('#js-color-pick');
const size = document.querySelector('#js-size-slider');
const sizeVal = document.querySelector('.js-size-value');
const grid = document.querySelector('#js-grid-container');
const rainbow = document.querySelector('#js-rainbow-color');
const eraser = document.querySelector('#js-eraser');
const clear = document.querySelector('#js-clear-grid');

let currentSize = 16;
let currentColor = '#000000';
let toggleRainbow = false;
let toggleEraser = false;

//create the default size grid 16x16
createGrid(currentSize);

//Event Listener
size.addEventListener('mouseup', (event) => {
  let size = getSizeValue(event.target.value);
  createGrid(size);
});

size.addEventListener('input', (event) => updateSizeValue(event.target.value));

rainbow.addEventListener('click', () => {
  toggleEraser = false;
  toggleRainbow = true;
});

eraser.addEventListener('click', () => {
  toggleRainbow = false;
  toggleEraser = true;
});

clear.addEventListener('click', () => resetGrid());

color.addEventListener('change', (event) => {
  toggleEraser = false;
  toggleRainbow = false;
  currentColor = event.target.value;
});

//functions
function getSizeValue(newSize) {
  currentSize = newSize;

  return currentSize;
}

function updateSizeValue(size) {
  return (sizeVal.textContent = `Size: ${size} x ${size}`);
}

function createGrid(size) {
  grid.innerHTML = '';
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('grid-item-row');
    for (let j = 0; j < size; j++) {
      let col = document.createElement('div');
      col.classList.add('grid-item-col');
      col.addEventListener('mouseover', () => {
        if (toggleRainbow === true) {
          col.style.backgroundColor = generateRainbow();
        } else if (toggleEraser === true) {
          col.style.backgroundColor = '#fff';
        } else {
          col.style.backgroundColor = currentColor;
        }
      });
      row.appendChild(col);
    }
    grid.appendChild(row);
  }
}

function resetGrid() {
  createGrid(currentSize);
}

function generateRainbow() {
  let randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
  return randomColor;
}
