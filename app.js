let scale = 16;
let i = 0; 
let j = 0;
let width;
let gridSize = 500

function grid(scale) {
    const container = document.querySelector('#container');
    calcWidth(scale);

    //Make div to hold the columns
    const columnHolder = document.createElement('div');
    columnHolder.classList.add('columnHolder');
    columnHolder.setAttribute('id', 'columnHolder');
    container.appendChild(columnHolder);

    //loop inside of a loop to make the grid
    
    //Make the columns
    while (j<scale) {
        const column = document.createElement('div');
        column.setAttribute('id', 'column');
        column.style.width = width + "px";  
        columnHolder.appendChild(column);

        //make the cubes
        while (i<scale) {
            const content = document.createElement('div');
            content.classList.add(`cube`);
            content.textContent = null;
            content.style.width = width + "px";  
            content.style.height = width + "px";
            column.appendChild(content);
            i++; 
        }
    i=0;
    j++
    }
    return;
}

//500 = height and width in pixels of the entire grid
function calcWidth (scale) {
    width = gridSize/ scale;
    return width;
}

grid(scale);
