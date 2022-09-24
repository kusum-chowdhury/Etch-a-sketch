document.addEventListener("DOMContentLoaded", function() {
  createDivs(16);
})
 
function createDivs(size) {
  let container = document.querySelector(".container");
   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

}

