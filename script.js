let sizeOfGrid = 32;
let color = "black";
let eraser = document.querySelector("#eraser");
let rgbColor = document.querySelector("#rainbow-color");
let div = document.querySelector('div');
let black = document.querySelector('#black-color');
let rgb = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'royaleblue', 'lightblue', 'coral', 'black'];

function selectRandomColor() {
  let randomIndex = Math.floor(Math.random() * rgb.length)
  return rgb[randomIndex];
}

rgbColor.addEventListener('click', () => {
  rgbColor.classList.add("on");
  black.classList.remove("on");
})
eraser.addEventListener("click", ()=> {
  color = "white";
  rgbColor.classList.remove("on")
})
black.addEventListener('click', ()=> {
  color = "black";
  rgbColor.classList.remove("on")
})




function askforInput() {
  let size = prompt("enter num"); 
  createDivs(size)

}
document.addEventListener("DOMContentLoaded", function() {
  createDivs(sizeOfGrid);
})

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
