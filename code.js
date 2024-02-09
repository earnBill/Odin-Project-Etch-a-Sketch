
const container = document.querySelector('.container');
const resetBtn = document.querySelector('.resetBtn');
const createBtn = document.querySelector('.createBtn');
const randomBtn = document.querySelector('.randomBtn');
const eraserBtn = document.querySelector('.eraserBtn');


let color = 'red';
let rows = 16;
let mouseDown = false;

let random = false;
let startColor = true;
let eraser = false;


//Monitor click for drawing
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


//Disable drag and drop
document.body.addEventListener('dragstart', event => {
    event.preventDefault();
  });
  
document.body.addEventListener('drop', event => {
    event.preventDefault();
});


createCamva(rows);

function createCamva(pixels) {
    for (let i = 1; i <= pixels; i++) {
        let row = document.createElement('div');
        row.className = "row";
        container.appendChild(row);
        
        for (let j = 1; j <= pixels; j++) {
            let pixel = document.createElement('div');
            pixel.className = "pixel";
            pixel.addEventListener('mouseover', (e) => {
                console.log(e.type);
                if (e.type === 'mouseover' && mouseDown === true) {
                    if (startColor === true) {
                      console.log(color);
                      pixel.style.backgroundColor = color;
                    }
                    else if (random == true){
                        pixel.style.backgroundColor = randomColor()
                    }
                    else if (eraser === true) {
                        console.log('erase');
                        pixel.style.backgroundColor = 'white';
                    }
                }
            })
            pixel.addEventListener('mousedown', () => {
                if (startColor === true) {
                    console.log(color);
                    pixel.style.backgroundColor = color;
                  }
                  else if (random == true){
                      pixel.style.backgroundColor = randomColor()
                  }
                  else if (eraser === true) {
                      console.log('erase');
                      pixel.style.backgroundColor = 'white';
                  }
            })

            row.appendChild(pixel);
        }
    }
}


createBtn.addEventListener('click', () => {
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



randomBtn.addEventListener('click', () => {
    random = true;
    eraser = false;
    startColor = false;
})


resetBtn.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    })
    random = false;
    eraser = false;
    startColor = true;
})

function randomNum() {
    return Math.floor(Math.random() * 256); 
}

function randomColor() {
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();

    console.log(`rgb(${r},${g},${b})`);
    return `rgb(${r},${g},${b})`
}

eraserBtn.addEventListener('click', () => {
    console.log('eraser on')
    eraser = true;
    random = false;
    startColor = false;
});



