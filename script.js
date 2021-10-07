// slider functionality
const dimensionsText = document.querySelector('.bottom-slider');
dimensions = document.createElement('div');
const slider = document.querySelector('.slider');
dimensions.textContent = slider.value + " x " + slider.value;
dimensionsText.appendChild(dimensions);

//core box functionality
//box load


let numSquares = 4; //update so this is automatic

function populateSquare (numSquares) {
    const dimensionSquare = 100/numSquares;
    let boxes = [];
    for(i=0;i<numSquares**2;i++){
        boxes[0] = document.createElement('div');
        boxes[0].classList.add('box');
        boxes[0].setAttribute('style', 'width: '+dimensionSquare+'%; height: '+dimensionSquare+'%');           
        container.appendChild(boxes[0]);
    }
}

let mainHeight = document.querySelector('.box-container').clientHeight;
const container = document.querySelector('.box-container');
populateSquare (numSquares)
const selectBoxes = document.querySelectorAll(".box")
selectBoxes.forEach(item => item.addEventListener('mouseover', (e) => {
    item.style.backgroundColor="purple";           
}))

//box update
slider.oninput = function() {
    //change text next to slider
    let numSquares = this.value;
    dimensions.textContent = numSquares + " x " + numSquares;
    dimensionsText.appendChild(dimensions);

    //alter the dimensions of the box
    const container = document.querySelector('.box-container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    populateSquare (numSquares)
    const selectBoxes = document.querySelectorAll(".box")
    selectBoxes.forEach(item => item.addEventListener('mouseover', (e) => {
        item.style.backgroundColor="purple";           
    }))

} 

