const canvasCont = document.querySelector(".canvas-container");
const tools = document.querySelector(".tools");
const colorPickerContainer = document.querySelector("#colorContainer");
const colorPicker = document.createElement("input");
const buttonClearCanvas = document.createElement("button");
const buttonToggleBorder = document.createElement("button");

let myBoxes;
let gridStatus = true;
let paintLogic = false;
let color = "black";
let canvasSize = getCanvasSize();

function getCanvasSize(){
   let size = prompt("What is the canvas size?");

   if(size > 64){
    return 64;
   }
   return size;   
}

function getMatrice(){
    
    for(a = 0; a < canvasSize; a++){
        canvasCont.appendChild(getLineDiv());
    }

    myBoxes = canvasCont.querySelectorAll(".box");
}

function getBoxDiv(){
    const boxDiv = document.createElement("div");
    boxDiv.className = "box";

    return boxDiv;
}

function getLineDiv(){
    const boxLine = document.createElement("div");    
    boxLine.className = "line";

    for(i = 0; i < canvasSize; i++){
        boxLine.appendChild(getBoxDiv());
    }

    return boxLine;
}
//TOOLS FUNCTIONS
function getTools(){

    getColorPicker();
    getClearCanvasButton();
    getToggleButton();     
    
}

function colorSelection(){
    color = document.getElementById("colorChoice").value;
}

function clearCanvas(){

    console.log("item");   

    myBoxes.forEach((item) => {
        item.style.backgroundColor = "var(--background)";
        console.log(item);
    });
}

function getColorPicker(){

    colorPicker.type = "color";
    colorPicker.onchange = "clickColor(0, 0, 0, 5)"
    colorPicker.value = "#ff0000";
    colorPicker.id = "colorChoice";
    colorPickerContainer.appendChild(colorPicker);
}

function getClearCanvasButton(){

    buttonClearCanvas.textContent = "Clear Canvas";
    tools.appendChild(buttonClearCanvas);
    
}

function getToggleButton(){
    buttonToggleBorder.textContent = "Hide Grid";
    tools.appendChild(buttonToggleBorder);
}

let desiredBorder = "none";

function toggleBorder(){

    if (gridStatus){
        buttonToggleBorder.textContent = "Show Grid"
        desiredBorder = "none";
        gridStatus = false;
    }
    else{
        buttonToggleBorder.textContent = "Hide Grid"
        desiredBorder = "solid";
           
        gridStatus = true;
    }

    myBoxes.forEach((item) => {
        item.style.border = desiredBorder;
        if(gridStatus){
            item.style.borderWidth = "1px";
            item.style.borderColor = "var(--text10)";
        }   
    
    })
    
}







//Events

canvasCont.addEventListener("mousedown", function(e){
    
    e.preventDefault();    
    e.target.style.backgroundColor = color;
    paintLogic = true;
});

canvasCont.addEventListener("mouseover", function (e){   
    
    if(paintLogic == true){
        e.target.style.backgroundColor = color;
    }    
})

canvasCont.addEventListener("mouseup", function(e){
    
    paintLogic = false;    
});

colorPicker.addEventListener("input", colorSelection);

buttonClearCanvas.addEventListener("click", clearCanvas);

buttonToggleBorder.addEventListener("click", toggleBorder);

getMatrice();

getTools();



colorSelection();