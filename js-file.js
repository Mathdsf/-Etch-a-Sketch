//take the grid container
let grid = document.querySelector('#grid');

//adding the buttons
let add = document.querySelector('.btn-input');
const btnDelete = document.querySelector('#delete');
const clearbtn = document.querySelector('#clear')




//adding size of the grid with the add button, append to the container and adding the columns of the grid properties.
add.addEventListener('click', addGrid);
function addGrid(e){
    let text = prompt('Enter the scale number ');
    if(text >= 100 || grid.childNodes.length > 10.000){ 
        return alert('Error: the input should be lessthan 100') 
    }
    for (let i = 0; i < text * text; i++){
        createDiv()
    };
    grid.style.gridTemplateColumns = `repeat(${text}, 1fr)`;
    getDivColor();
};
//functions from ADD button.
function createDiv(){
    let div = document.createElement('div');
    div.classList.add('div-grid');
    grid.appendChild(div);
}
//after add button is clicked, grid becomes a nodelist. adding a event if the mouse enter each div. 
function getDivColor(){
    grid.childNodes.forEach(div => {
        div.addEventListener('mousemove', (e)=> div.style.backgroundColor = "rgb("+e.offsetX+ 20+","+e.offsetY+ 50+", 50)");
    })
};
//--------------------------------------------//

//remove all grid (grid children) from the container, by deleting through a loop.
btnDelete.addEventListener('click', deletingGrid);
function deletingGrid(e){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    };
};
//-----------------------------------//

clearbtn.addEventListener('click', cleaningGridColor);
function cleaningGridColor(e){
    for(let i = 1; i < grid.childNodes.length; i++){
        grid.childNodes[i].style.backgroundColor = 'white';
    }
};