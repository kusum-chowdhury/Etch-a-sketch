let sizeOfGrid = 32;
let color = "black";
let eraser = document.querySelector("#eraser");
let rgbColor = document.querySelector("#rainbow-color");
let div = document.querySelector('div');
let black = document.querySelector('#black-color');
let rgb = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'royaleblue', 'lightblue', 'coral', 'black'];

// select random color fro rgb variable
function selectRandomColor() {
  let randomIndex = Math.floor(Math.random() * rgb.length)
  return rgb[randomIndex];
}

// add on class on clicking of rainbow button
rgbColor.addEventListener('click', () => {
  rgbColor.classList.add("on");
})

//assign white color to color variable
//uses white to remove other colors
eraser.addEventListener("click", ()=> {
  color = "white";
  //remove on class from rainbow button 
  rgbColor.classList.remove("on")
})

//change back color variable to black 
black.addEventListener('click', ()=> {
  color = "black";
  //removes on class from rainbow button
  rgbColor.classList.remove("on")
})



//ask for input from user in prompt
//asigns input to the size of grid(board)
function askforInput() {
  let size = prompt("enter size of the grid"); 
  createDivs(size)

}

//on domloaded provides default grid
document.addEventListener("DOMContentLoaded", function() {
  createDivs(sizeOfGrid);
})

//create board with grid
function createDivs(size) {
  let container = document.querySelector(".container");
 container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
 container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
 let divsNum = size * size;
 for(let i = 0; i < divsNum; i++) {

  let div = document.createElement('div');

  div.addEventListener('mouseover', function(){
   if(rgbColor.classList.contains("on")){

     div.style.background = selectRandomColor();
    } else {
      div.style.background = color;
    }
  })  
  container.insertAdjacentElement("beforeend", div);
 }
}
