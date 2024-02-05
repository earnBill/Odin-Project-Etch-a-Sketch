
const container = document.querySelector('.container');
let rows = 16;
let mouseDown = false;

document.body.onmousedown = () => {(mouseDown = true); console.log(mouseDown)};
document.body.onmouseup = () => {(mouseDown = false); console.log(mouseDown)}

createCamva(rows);
paint('red');

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
    paint('red');
})

const randomBtn = document.querySelector('.random');

randomBtn.addEventListener('click', () => {
    randomPaint();
})

function paint(color) {
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', (e) => {
            console.log(e.type);
            if (e.type === 'mouseover' && mouseDown === true) {
                console.log(e.type);
                pixel.style.backgroundColor = color;
            }
        })
        pixel.addEventListener('mousedown', () => {
                pixel.style.backgroundColor = color;
        })
    })
}

function randomPaint() {
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = randomColor();
            console.log('hover');
        })
    })
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    })
    paint('red');
})

function randomNum() {
    return Math.floor(Math.random() * 256); 
}

function randomColor() {
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();

    return `rgb(${r},${g},${b})`
}
