let scale = 16;
let rows = 0; 
let columns = 0;
let width;
let gridSize = 500 ;
let colorSelection = '#2D232E';
let rainbowActive = false;
let shadowActive = false;

function calcWidth (scale) {
    width = gridSize/ scale;
    return width;
}

//Make the grid
function grid(scale) {
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

//start er up!
grid(scale);

//enable da hover-o-sensor thing-a-mabobbermajig
document.querySelectorAll(".cube").forEach(item => {
    item.addEventListener("mouseover", event => {
        if (rainbowActive == true) {
        console.log("rainbowmode")
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        colorSelection = `rgb(${randomR}, ${randomG}, ${randomB})`;
        item.style.backgroundColor = colorSelection;
    }
        else
        item.style.backgroundColor = colorSelection;
    })
})

//button onclick stuff
const defaultButton = document.querySelector('#default');
defaultButton.addEventListener('click', () => {
    defaultMode();
});
const shadowButton = document.querySelector('#shadow');
shadowButton.addEventListener('click', () => {
    shadow();
});
const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', () => {
    rainbow();
});
const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', () => {
    eraser();
});
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clear();
});


//Button functions
function defaultMode() {
    console.log("default");
    colorSelection = '#2D232E';
    rainbowActive = false;
    return;
};
function shadow() {
    console.log("shadow");
    colorSelection = '#2D232E80';
    rainbowActive = false;
    return;
};
function rainbow() {
    console.log("rainbow");
    rainbowActive = true;
    return;
}
function eraser() {
    console.log("eraser")
    colorSelection = "#F1F0EA";
    rainbowActive = false;
    return;
};
function clear() {
    console.log("clear")
    document.querySelectorAll('.cube').forEach(item => {
        item.style.backgroundColor = "#F1F0EA";
    })
    return;
};
