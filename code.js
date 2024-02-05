console.log('hi');
const container = document.querySelector('.container');
let rows = 16;
createCamva(rows);
paint();

function createCamva(pixels) {
    for (let i = 1; i <= pixels; i++) {
        let row = document.createElement('div');
        row.className = "row";
        container.appendChild(row);
        
        for (let j = 1; j <= pixels; j++) {
            let pixel = document.createElement('div');
            pixel.className = "pixel";

            row.appendChild(pixel);
        }
        console.log('create Div');
    }
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const canvaSize = prompt('Give the canva size (1-100)!!!!');
    const rows = document.querySelectorAll('.row');
    
    if (canvaSize > 0 && canvaSize <= 100 ) {
        for (let row of rows ) {
            container.removeChild(row);            
        }   
    }
        else {
            alert("Please choose a range between 1-100!!!!");
        } 
    createCamva(canvaSize);
    paint();
})


function paint() {
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'red';
            console.log('hover');
        })
    })
}