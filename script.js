document.addEventListener("DOMContentLoaded", function() {
  createDivs(200);
})
 let size;
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
function getVal() {
  let val = document.querySelector('input').value;
  console.log(val);
}