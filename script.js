// slider functionality
const dimensionsText = document.querySelector('.bottom-slider');
dimensions = document.createElement('div');
const slider = document.querySelector('.slider');

function setSliderText(){
    dimensions.textContent = slider.value + " x " + slider.value;
    dimensionsText.appendChild(dimensions);
}
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
function colorBackground(){
    const selectBoxes = document.querySelectorAll(".box")
    selectBoxes.forEach(item => item.addEventListener('mouseover', function() {
        item.style.backgroundColor="purple";           
    })) 
}
setSliderText()

//core box functionality
//box load
let numSquares = 4; //default dimension
const container = document.querySelector('.box-container');
let mainHeight = container.clientHeight;
populateSquare(numSquares)
colorBackground()

//box update
slider.oninput = function() {
    //change text next to slider
    numSquares = this.value;
    setSliderText()

    //alter the dimensions of the box
    const container = document.querySelector('.box-container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    populateSquare(numSquares)
    colorBackground()
    reset()
} 

//reset button functionality
function reset(){
    const resetButton = document.querySelector(".reset");
    const selectBoxes = document.querySelectorAll(".box");
    resetButton.addEventListener('click', function() {
        for(i=0;i<selectBoxes.length;i++){
            selectBoxes[i].style.backgroundColor="yellow"
        }
    })
}