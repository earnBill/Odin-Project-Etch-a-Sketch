console.log('hi');
const container = document.querySelector('.container');

for (let i = 1; i <= 15; i++) {
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