// slider functionality
let defaultBoxColor = "#FFFFFF"; //default dimension, make sure this ties with CSS value


const dimensionsText = document.querySelector(".bottom-slider");
const colorButton = document.querySelector("input");
const randomButton = document.querySelector(".random");
const eraserButton = document.querySelector(".eraser");
const slider = document.querySelector(".slider");
const container = document.querySelector(".box-container");


let defaultNumSquares = slider.value; //default dimension
dimensions = document.createElement("div");

setSliderText()
populateSquare(defaultNumSquares)
colorBackground(colorButton.value)
reset()

//enable button functionality
colorButton.addEventListener("change", function (e) {colorBackground(e.target.value)})
randomButton.addEventListener("click", function() {
    randomColor = '#'+Math.floor(Math.random()*16777215).toString(16); // 16777215 is equivalent to #FFFFFF
    colorBackground(randomColor)
    console.log(colorButton.value)
    colorButton.value = randomColor
})

eraserButton.addEventListener("click", function() {
    colorBackground(defaultBoxColor)
    colorButton.value = defaultBoxColor
})

//set the slide text
function setSliderText(){
    dimensions.textContent = slider.value + " x " + slider.value;
    dimensionsText.appendChild(dimensions);
}

//"populates" the squares in the sketching area
function populateSquare(numSquares) {
    const dimensionSquare = 100 / numSquares;
    let boxes = [];
    for(i=0; i < numSquares ** 2; i++){
        boxes[0] = document.createElement("div");
        boxes[0].classList.add("box");
        boxes[0].setAttribute("style", "width: "+dimensionSquare+"%; height: "+dimensionSquare+"%");           
        container.appendChild(boxes[0]);
    }
}

//adds event listener to the boxes so they change to a certain color on mouseover
function colorBackground(color){
    const selectBoxes = document.querySelectorAll(".box")
    selectBoxes.forEach(box => box.addEventListener("mouseover", function() {
        box.style.backgroundColor = color;           
    })) 
}

//box update when you slide the slider
slider.oninput = function() {
    //change text next to slider
    numSquares = this.value;
    setSliderText()

    //alter the dimensions of the box
    const container = document.querySelector(".box-container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    populateSquare(numSquares)
    colorBackground(colorButton.value)
    reset()
} 

//reset button functionality
function reset(){
    const resetButton = document.querySelector(".reset");
    const selectBoxes = document.querySelectorAll(".box");
    resetButton.addEventListener("click", function() {
        for(i=0;i<selectBoxes.length;i++){
            selectBoxes[i].style.backgroundColor = defaultBoxColor
        }
    })
}