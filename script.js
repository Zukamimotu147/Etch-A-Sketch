const grid = document.querySelector('.grid-container');
const showSize = document.querySelector('.js-size-value');
const sizeSlider = document.querySelector('#js-size-slider');


let size = 16;
//get size
sizeSlider.addEventListener('mouseup', (event) => {
    
    size = event.target.value;
    console.log(size);
    createGrid(size);
    
});

//show size
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
            let currentColor = changeColor();
            col.classList.add('grid-item-sub');
            col.addEventListener('mousedown', () => {
                col.style.backgroundColor = currentColor;
            })
            row.appendChild(col);
        }
    }
}

function changeColor() {
    document.querySelector('#js-color-pick').addEventListener('change', (event) => {
        let color = event.target.value;

        return color;
    })
}



