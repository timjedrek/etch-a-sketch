let scale = 16;
let rows = 0; 
let columns = 0;
let width;
let gridSize = 500 ;
let colorSelection = '#2D232E';
let rainbowActive = false;
let shadowActive = false;
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');

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
    hover();
    return;
}

//start er up! (and make the grid thingy pop up)
grid(scale);

//enable da hover-o-sensor thing-a-mabobbermajig
function hover() {
document.querySelectorAll(".cube").forEach(item => {
    item.addEventListener("mouseover", () => {
        
        //enable rainbow
        if (rainbowActive == true) {
            console.log("rainbowmode")
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            colorSelection = `rgb(${randomR}, ${randomG}, ${randomB})`;
            item.style.backgroundColor = colorSelection;
    }
        //enable shadow
        else if (shadowActive == true) {
            console.log("shadowmode")
            if (item.style.backgroundColor.match(/rgba/)) {
                let currentOpacity = Number(item.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    item.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    item.classList.add('gray');
                }
            } else if (item.style.backgroundColor == 'rgb(0, 0, 0)') {
                return;
            } else {
                item.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
            }
        }

        //default
        else
        item.style.backgroundColor = colorSelection;
    })
})
}

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
    shadowActive = false;
    return;
};
function shadow() {
    console.log("shadow");
    colorSelection = '#2D232E80';
    rainbowActive = false;
    shadowActive = true;
    return;
};
function rainbow() {
    console.log("rainbow");
    rainbowActive = true;
    shadowActive = false;
    return;
}
function eraser() {
    console.log("eraser")
    colorSelection = "#F1F0EA";
    rainbowActive = false;
    shadowActive = false;
    return;
};
function clear() {
    console.log("clear")
    document.querySelectorAll('.cube').forEach(item => {
        item.style.backgroundColor = "#F1F0EA";
    })
    return;
};

//slider control
sizeValue.innerHTML = `${sizeSlider.value} x ${sizeSlider.value}`;
sizeSlider.oninput = function() {
  sizeValue.innerHTML = `${this.value} x ${this.value}`;
  container.innerHTML = "";
  grid(this.value);
}