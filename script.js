const grid = document.querySelector('.grid-container');
const showSize = document.querySelector('.js-size-value');
const sizeSlider = document.querySelector('#js-size-slider');


let size = 16;
//show size
sizeSlider.addEventListener('mouseup', (event) => {
    size = event.target.value;
    
});
//get size
sizeSlider.addEventListener('input', (event) => {
    showSize.textContent = `Size: ${event.target.value}`; 
});
//create grid
function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('grid-item');
        grid.appendChild(row);
        for(let j = 0; j < size; j++) {
            let col = document.createElement('div');
            col.classList.add('grid-item');
            row.appendChild(col);
        }
    }
}

function changeColor() {
    document.querySelector('#js-color-pick').addEventListener('change', (event) => {
        console.log(event.target.value);
    })
}

changeColor();

