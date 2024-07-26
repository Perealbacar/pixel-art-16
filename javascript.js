const canvasCont = document.querySelector(".canvas-container");
let colorPickerContainer = document.querySelector("#colorContainer");
const colorPicker = document.createElement("input");

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

function colorSelection(){
    color = document.getElementById("colorChoice").value;
}

function getColorPicker(){

    colorPicker.type = "color";
    colorPicker.onchange = "clickColor(0, 0, 0, 5)"
    colorPicker.value = "#ff0000";
    colorPicker.id = "colorChoice";
    colorPickerContainer.appendChild(colorPicker);

}

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



getColorPicker()

getMatrice();

colorSelection();