let scale = 16;
let rows = 0; 
let columns = 0;
let width;
let gridSize = 500 //500px is default width
let colorSelection = '#2D232E'


function grid(scale) {
    //const container = document.querySelector('#container');
    calcWidth(scale);

    //Make div to hold the columns
    const columnHolder = document.createElement('div');
    columnHolder.classList.add('columnHolder');
    columnHolder.setAttribute('id', 'columnHolder');
    container.appendChild(columnHolder);

    //loop inside of a loop to make the grid
    
    //Make the columns
    while (columns<scale) {
        const column = document.createElement('div');
        column.setAttribute('id', 'column');
        column.style.width = width + "px";  
        columnHolder.appendChild(column);

        //make the cubes
        while (rows<scale) {
            const content = document.createElement('div');
            content.classList.add("cube");
            content.setAttribute('id', `row${rows}column${columns}`);
            content.textContent = null;
            content.style.width = width + "px";  
            content.style.height = width + "px";
            column.appendChild(content);
            rows++; 
        }
    rows=0;
    columns++;
    }
    columns=0;
    return;
}

function calcWidth (scale) {
    width = gridSize/ scale;
    return width;
}

//start er up!
grid(scale);

//enable da hover-o-sensor thing-a-mabobbermajig
document.querySelectorAll(".cube").forEach(item => {
    item.addEventListener("mouseover", event => {
        item.style.backgroundColor = colorSelection;
    })
})
