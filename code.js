console.log('hi');
const container = document.querySelector('.container');
let rows = 16;

for (let i = 1; i <= rows; i++) {
    let row = document.createElement('div');
    row.className = "row";
    container.appendChild(row);
    

    for (let j = 1; j <= 15; j++) {
        let pixel = document.createElement('div');
        pixel.className = "pixel";

        row.appendChild(pixel);
    }

    console.log('create Div');
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const canvaSize = prompt('Give the canva size (1-100)!!!!');
    const row = document.querySelector('.row');
    console.log(row);
    if (canvaSize > 0 && canvaSize <= 100 ) {
        for ( let i = 1; i <= rows; i++  ) {
        const row = document.querySelector('.row');
          container.removeChild(row);    
        }
        
    }
    console.log(canvaSize);
})

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'red';
        console.log('hover');
    })
})