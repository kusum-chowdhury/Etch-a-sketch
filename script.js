let sizeOfGrid = 32;

function askforInput() {
  let newSize = prompt("select the size");
 if(newSize > 100) {
  return;
 } else {
  sizeOfGrid = newSize;
 }
 return sizeOfGrid;
}


document.addEventListener("DOMContentLoaded", function() {
  askforInput();
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
    div.style.background = "black";
  })  
  container.insertAdjacentElement("beforeend", div);
 }
}
